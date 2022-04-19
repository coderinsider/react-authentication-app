import { RoutesComponent } from './RoutesComponent';
import {
   BrowserRouter,

} from "react-router-dom";
import './App.css'
import HeaderPanel from './components/pages/HeaderPanel';
const App = () => {
   return (
      <>
         <BrowserRouter>
            <HeaderPanel />
            <RoutesComponent/>
         </BrowserRouter>
      </>
   )
}

export default App