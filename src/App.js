import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LadningPage from './Pages/LandingPage/LadningPage';
import Treatment from './Pages/TreatmentPage/Treatment';
import Docter from './Pages/DocterPage/Docter';
import BookAppoinment from './Pages/BookAppoinment/BookAppoinment';
import About from './Pages/About/About';
import Pharmacy from './Pages/Pharmacy/Pharmacy';
import Labs from './Pages/Labs/Labs';
import Packages from './Pages/Packages/Packages';
import AddToCart from './Pages/AddtoCart/AddtoCart';
import LabDetails from './Components/LabDetails/LabDetails';
import Proctology from './Components/Depts/Proctology';
import ENT from './Components/Depts/Ent';
import Laparoscopy from './Components/Depts/Laparoscopy';
import Gynecology from './Components/Depts/gynecology.jsx';
import Vascular from './Components/Depts/Vascular.jsx';
import Urology from './Components/Depts/Urology.jsx';
import ChooseDoctor from './Components/Tabs/ChooseDoctor.jsx';
import LabSchedule from './Components/LabSchedule/LabSchedule.jsx';
import Scheduler from './Components/Scheduler/Scheduler.jsx';
import Receipt from './Components/Receipt/Receipt.jsx';
import ProductSlider from './Components/ProductSlider/ProductSlider.jsx';
import CustomerForm from './Components/CustomerForm/CustomerForm.jsx';

function App () {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route path="/form" element={<CustomerForm />} />

            <Route path="/product" element={<ProductSlider/>}/>
            <Route exact path="/" element={<LadningPage />} />
            <Route path="/schedule" element={<Scheduler />} />

            <Route path="/treatment" element={<Treatment />} />
            <Route path="/doctors" element={<Docter />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/Proctology" element={<Proctology />} />
            <Route path="/ent" element={<ENT />} />
            <Route path="/choosedoctor" element={<ChooseDoctor />} />
            <Route path="/labschedule" element={<LabSchedule />} />
            <Route path="/vascular" element={<Vascular />} />
            <Route path="/urology" element={<Urology />} />
            <Route path="/gynecology" element={<Gynecology />} />
            <Route path="/laparoscopy" element={<Laparoscopy />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/labdetails" element={<LabDetails />} />

            <Route path="/addtocart" element={<AddToCart />} />
            <Route path="/pharmacy" element={<Pharmacy />} />
            <Route path="/receipt" element={<Receipt />} />

            <Route path="/bookappointment" element={<BookAppoinment />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
}

export default App;
