import { RoutesComponent } from './RoutesComponent';
import {
   BrowserRouter,

} from "react-router-dom";
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