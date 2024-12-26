import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Compass, Footer, Header } from './components';
import { Service } from './components/pageService/Service';
import { Mantenimiento } from './components/pageService/Mantenimiento';
import { DriverListDetail } from './components/DriverDetail/DriverListDetail';
import Contact from './components/Contact/Contact';

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Compass />} />
        <Route path="/Service/Service" element={<Service />} />
        <Route path="/Service/Mantenimiento" element={<Mantenimiento />} />
        <Route path="/product/:id" element={<DriverListDetail />} />
        <Route path="/Contact/Contact" element={<Contact />} />

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
