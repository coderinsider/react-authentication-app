import { RoutesComponent } from './RoutesComponent';
import {
   BrowserRouter,

} from "react-router-dom";
import React, {Fragment} from 'react';
import './App.css'
import HeaderPanel from './components/pages/HeaderPanel';
const App = () => {
   return (
      <>
         <BrowserRouter>
            <Fragment>
               <HeaderPanel />
               <RoutesComponent/>
            </Fragment>
         </BrowserRouter>
      </>
   )
}

export default App