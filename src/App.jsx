import { Header } from "./components/Header/Header";
import { Compass, Footer } from "./components";
import {BrowserRouter , Route,  Routes} from 'react-router-dom';
import { DriversContainer } from "./components/Drivers/DriversContainer";

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/category/:category" element={<DriversContainer/>}/> 
        <Route path="/" element={<Compass />}/> 
      </Routes> 
      <Footer />
    </BrowserRouter>
  );
};

export default App;
