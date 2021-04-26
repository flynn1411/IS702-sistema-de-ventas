import React, { useState, useEffect } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Link as LinkRoute, useHistory } from 'react-router-dom';
import SignUpForm from '../interfaces/SignUpForm';
import {instanceOfUser} from '../interfaces/User';
import ObjDireccion from '../interfaces/ObjDireccion';
import { MenuItem } from '@material-ui/core';

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

var templateDirecciones: ObjDireccion[] = [{"id":1, "calle": "Hubo un error"}];

/*########################## VISTA DE SIGNUP #####################################*/
function SignUp() {
  const classes = useStyles();
  const [ registerErr, setRegisterErr ] = useState(false);
  const [direccionesObtenidas, setDirecciones] = useState<ObjDireccion[]>(templateDirecciones);
  const [ direccionActual, setDireccionActual ] = useState<number>(1);
  const history = useHistory();

  const handleDireccionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDireccionActual(parseInt(event.target.value));
  };

  async function obtenerDirecciones(){
    let direcciones: ObjDireccion[];
    let direccionUrl = 'http://3.95.214.239:3000/api/v1/direccion/list';
  
    fetch(direccionUrl, {
        method: 'GET',
        headers: {'Content-Type': 'application/json','Accept': 'application/json'}
      }).then(respuesta => respuesta.json()).then( resJSON =>{
        direcciones = resJSON;
        setDirecciones(direcciones);
  
      }).catch(err => {
        console.log(err);
      });
  }

  useEffect(()=>{
    obtenerDirecciones();
  }, []);

  //obtenerDirecciones();

  function mostrarError(){
    return(
      <h3 style={{color: "red"}}>El correo que ingresó ya se encuentra en uso.</h3>
    );
  }

  //const url: string = 'http://localhost:3000/api/v1/auth/register';
  const url: string = 'http://3.95.214.239:3000/api/v1/auth/register';

  function registrarUsuario(e: React.FocusEvent<HTMLFormElement>){
    e.preventDefault();

    let datos: SignUpForm = {
      primer_nombre: e.target.fNombre.value,
      segundo_nombre: e.target.sNombre.value,
      primer_apellido: e.target.fApellido.value,
      segundo_apellido: e.target.sApellido.value,
      correo: e.target.email.value,
      contrasena: e.target.password.value,
      num_telefono: e.target.phone.value,
      direccion_id: e.target.direccion.value,
      rol: 2
    };

    //console.log(datos);

    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json','Accept': 'application/json'},
      body: JSON.stringify(datos)
    }).then(respuesta => respuesta.json()).then( resJSON =>{

      if(resJSON.status==="SUCCESS" && instanceOfUser(resJSON.user)){
        localStorage.setItem("LOCAL_USER",JSON.stringify(resJSON.user));
        setRegisterErr(false);
        history.push("/");

      }else{
        setRegisterErr(true);
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
          Crea una cuenta  
        </Typography>
        <form className={classes.form} noValidate onSubmit={registrarUsuario} >
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="PrimerNombre"
            label="Primer Nombre"
            name="fNombre"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="SegundoNombre"
            label="Segundo Nombre"
            name="sNombre"
            autoFocus
          /> 
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="PrimerApellido"
            label="Primer Apellido"
            name="fApellido"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="SegundoApellido"
            label="Segundo Apellido"
            name="sApellido"
            autoFocus
          />

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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="phone"
            label="Telefono"
            name="phone"
            autoComplete="phone"
            autoFocus
          />
          <TextField
            id="direccion"
            name="direccion"
            select
            value={direccionActual}
            onChange={handleDireccionChange}
            label="Dirección"
            helperText="Seleccione una dirección"
          >
            {
              direccionesObtenidas.map((direccion) => (
                <MenuItem key={direccion.id} value={direccion.id}>
                  {direccion.calle}
                </MenuItem>
              ))
            }
          </TextField>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Registro
          </Button>
          <Grid container>
            <Grid item>
              <LinkRoute to="/login">{"¿Ya tienes una cuenta?, Ingresa aquí"}</LinkRoute>
            </Grid>
            <Grid item>
              {registerErr? mostrarError(): undefined}
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
      </Box>
    </Container>
  );
}

export default SignUp;
