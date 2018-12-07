import React from 'react';
import './App.css';
import 'normalize.css/normalize.css';
import Routes from "./component/routes/Routes";
import {MyProvider} from "./component/contextAPI/MyProvider";

const App = () =>{
    return (
      <MyProvider>
        <Routes/>
      </MyProvider>
    );
};

export default App;
