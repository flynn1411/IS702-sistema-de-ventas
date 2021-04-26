import clsx from 'clsx';
import { Badge, Card, CardContent, Container, createStyles, CssBaseline, Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Theme, Toolbar } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import AppBar from "@material-ui/core/AppBar";
import { useHistory } from "react-router";
import useTheme from "@material-ui/core/styles/useTheme";
import { useEffect, useState } from "react";
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Typography from '@material-ui/core/Typography';
import HomeIcon from '@material-ui/icons/Home';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import ComputerIcon from '@material-ui/icons/Computer';
import SmartphoneIcon from '@material-ui/icons/Smartphone';
import TvIcon from '@material-ui/icons/Tv';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import Producto from '../interfaces/Producto';
import Fabricante from '../interfaces/Fabricante';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

export interface CatalogoProps {
    
}

const drawerWidth = 240;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    appBarShift: {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    menuButton: {
      marginRight: 36,
    },
    rightToolbar: {
        marginLeft: "auto",
        marginRight: -12
      },
    hide: {
      display: 'none',
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
    },
    drawerOpen: {
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
    drawerClose: {
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      overflowX: 'hidden',
      width: theme.spacing(7) + 1,
      [theme.breakpoints.up('sm')]: {
        width: theme.spacing(9) + 1,
      },
    },
    toolbar: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end',
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  }),
);
 
const templateProductos: Producto[] = [{
        "id": 1,
        "nombre": "MacBook Pro",
        "tipo_id": 1,
        "categoria": "Computadoras",
        "fabricante": "Apple",
        "fabricante_id": 1,
        "existencia": 400,
        "precio": 17232.23
    }];

let foundCategory = localStorage.getItem("CATEGORY");

var categoria:string = foundCategory ? foundCategory : "ALL";
var templateFabricante: Fabricante[] = [{"id":1, "Nombre": "Apple"}]

export default function Catalogo(){
    const history = useHistory();
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = useState<boolean>(false);
    const [ productos, setProductos ] = useState<Producto[]>(templateProductos);
    const [categoriaActual, setCategoriaActual] = useState<string>(categoria);
    const [ fabricantes, setFabricantes] = useState<Fabricante[]>(templateFabricante);

    function obtenerTodosProd():void{
        let url='http://ec2-3-95-214-239.compute-1.amazonaws.com:3000/api/v1/productos/list';

        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Accept': 'application/json'}
          }).then(respuesta => respuesta.json()).then( resJSON =>{
            if(resJSON instanceof Array){
                //console.log(resJSON)
                setProductos(resJSON);
            }
      
          }).catch(err => {
            console.log(err);
        });
    }

    function obtenerTodosFab():void{
        let url='http://ec2-3-95-214-239.compute-1.amazonaws.com:3000/api/v1/fabricantes/list';

        fetch(url, {
            method: 'GET',
            headers: {'Content-Type': 'application/json','Accept': 'application/json'}
          }).then(respuesta => respuesta.json()).then( resJSON =>{
            if(resJSON instanceof Array){
                //console.log(resJSON)
                setFabricantes(resJSON);
            }
      
          }).catch(err => {
            console.log(err);
        });
    }

    function obtenerProductos(categoria: string):void{
        let url='http://ec2-3-95-214-239.compute-1.amazonaws.com:3000/api/v1/productos/list'

        if(categoria==="ALL"){
            obtenerTodosProd();
        }else{

            let datos = {"id": parseInt(categoria)};
    
            fetch(url, {
                method: 'GET',
                headers: {'Content-Type': 'application/json','Accept': 'application/json'},
                body: JSON.stringify(datos)
              }).then(respuesta => respuesta.json()).then( resJSON =>{
                if(resJSON instanceof Array){
                    //console.log(resJSON)
                    setProductos(resJSON);
                }
          
              }).catch(err => {
                console.log(err);
            });
        }

    }

    useEffect(()=>{
        obtenerProductos(categoriaActual);
        obtenerTodosFab();
      }, []);

    const handleDrawerOpen = () => {
        setOpen(true);
      };
    
      const handleDrawerClose = () => {
        setOpen(false);
      };

    function logOut(){
        localStorage.removeItem("LOCAL_USER");
        history.push("/login");
    }

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]:open,
                })}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton, {
                        [classes.hide]: open,
                        })}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        Catálogo de Productos
                    </Typography>
                    <div id="iconosUsuario" className={classes.rightToolbar}>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Badge badgeContent={4} color="secondary">
                                <ShoppingCartIcon/>
                            </Badge>
                        </IconButton>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            color="inherit"
                        >
                            <Badge>
                                <AccountCircleIcon/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                      [classes.drawerOpen]: open,
                      [classes.drawerClose]: !open,
                    }),
                  }}
            >
                <div className={classes.toolbar}>
                    <Typography>Categorias</Typography>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider/>
                <List>
                    <ListItem button key="Todas">
                        <ListItemIcon>
                            <HomeIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Todos"}/>
                    </ListItem>
                    <ListItem button key="Computadoras">
                        <ListItemIcon>
                            <ComputerIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Computadoras"}/>
                    </ListItem>
                    <ListItem button key="Camaras">
                        <ListItemIcon>
                            <PhotoCameraIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Camaras"}/>
                    </ListItem>
                    <ListItem button key="Telefonos">
                        <ListItemIcon>
                            <SmartphoneIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Telefonos"}/>
                    </ListItem>
                    <ListItem button key="Televisores">
                        <ListItemIcon>
                            <TvIcon/>
                        </ListItemIcon>
                        <ListItemText primary={"Televisores"}/>
                    </ListItem>
                </List>
                <Divider/>
                <Typography variant="h6">
                    Fabricantes
                </Typography>
                <Divider/>
                <List >
                    {fabricantes.map(fabricante =>(
                        <ListItem button key={fabricante.id}>
                            <ListItemText primary={(fabricante.Nombre).toUpperCase()}/>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <GridList cols={3}>
                    {productos.map(producto => {
                        return (
                        <GridListTile key={producto.id}>
                            <Card key={producto.id} variant="outlined">
                                <CardContent>
                                    <Typography>
                                        {producto.nombre}
                                    </Typography>
                                    <Typography>
                                        {producto.precio}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </GridListTile>
                        );
                    })}
                </GridList>
            </main>
        </div>
    );
}