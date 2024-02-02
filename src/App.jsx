import { Compass, Footer ,Header ,DriversContainer} from "./components";
import { Service } from "./components/pageService/Service";
import {Mantenimiento} from './components/pageService/Mantenimiento';
import {BrowserRouter , Route,  Routes} from 'react-router-dom';

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/category/:category" element={<DriversContainer/>}/> 
        <Route path="/" element={<Compass />}/> 
        <Route path="/Service/Service" element={<Service />}/> 
        <Route path="/Service/Mantenimiento" element={<Mantenimiento />}/> 
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
};

export default App;
