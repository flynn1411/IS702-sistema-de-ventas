import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import LoginForm from '../interfaces/LoginForm';
import { Link as LinkRoute } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function LogIn() {
  const classes = useStyles();
  const [loginErr, setLoginErr] = useState<boolean>(false);

  function mostrarError(){
    return(
      <h3 style={{color: "red"}}>El usuario o contraseña son incorrectos.</h3>
    );
  }

  //const url: string = 'http://localhost:3000/api/v1/auth/login';
  const url: string = 'http://ec2-3-133-125-192.us-east-2.compute.amazonaws.com:3000/api/v1/auth/login';

  function verificarDatos(e: React.FocusEvent<HTMLFormElement>){
    e.preventDefault();

    let datos: LoginForm = {"correo": e.target.email.value,"contrasena": e.target.password.value};

    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      body: JSON.stringify(datos)
    }).then(respuesta => respuesta.json()).then( resJSON =>{
      //console.log(resJSON);
      if(!resJSON.err){
        setLoginErr(false);
        localStorage.setItem("LOCAL_USER",JSON.stringify(resJSON.user));

      }else{
        setLoginErr(true);
      }
    });
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Ingresa con tu cuenta
        </Typography>
        <form className={classes.form} onSubmit={verificarDatos}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Correo Electrónico"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Guardar Datos"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item>         
              <LinkRoute to="/signup">{"¿No tienes una cuenta? Registrate aquí"}</LinkRoute>
            </Grid>
            <Grid item>
              {loginErr? mostrarError(): undefined}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

export default LogIn;
