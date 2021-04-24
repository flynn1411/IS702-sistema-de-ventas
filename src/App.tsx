import { 
    Route,
    Switch
} from 'react-router-dom'
import Catalogo from './vistas/Catalogo'
import LogIn from './vistas/LogIn'
import SignUp from './vistas/SignUp'
import PrivateRoute from './componentes/PrivateRoute'

export interface AppProps {
    
}
 
function App(){
    function verificarUsuario():boolean {
        if(localStorage.getItem("LOCAL_USER") !== null || localStorage.getItem("LOCAL_USER") === 'undefined'){
            return true;
        }else{
            return false;
        }
    }

    return (
        <main>
            <Switch>
                <Route path="/login">
                    <LogIn/>
                </Route>
                <Route path="/signup">
                    <SignUp/>
                </Route>
                <PrivateRoute exact path="/" authenticationPath="/login" isAuthenticated={verificarUsuario()}>
                    <Catalogo/>
                </PrivateRoute>
            </Switch>
        </main>
    );
}
 
export default App;