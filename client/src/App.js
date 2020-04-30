import React from 'react';
import css from './App.css'
import Sidebar from './components/sidebar/sidebar';
import { withRouter, Switch, BrowserRouter, Route} from 'react-router-dom';
import Content from './components/content/content';
import {FileProvider} from './components/FileContext/FileContext'
import Login from './components/login/login';
import Signup from './components/Signup/signup';
import AuthGuard from "./components/login/AuthGuard"
import Folder from './components/content/folder';

const Main = withRouter(({ location }) => {
    return (
      <>  
       {(location.pathname != '/login' && location.pathname != '/signup') && (	
        <>	
         <Sidebar />         	
        </>	
      )}
      <Switch>
       
          <AuthGuard path="/home" component={Content} />
          <AuthGuard path="/" exact component={Content} />
          <AuthGuard path="/folder/:id" component={Folder} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={Signup} />
       
      </Switch>
      </>
    )
      
     
   
})
function App() {
  return (
    <FileProvider>
    <div className="wrapper">
    <BrowserRouter>
    <Main />
  </BrowserRouter>
  </div>
  </FileProvider>
  );
}

export default App;
