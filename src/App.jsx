import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LadningPage from './Pages/LandingPage/LadningPage.jsx';
import Treatment from './Pages/TreatmentPage/Treatment.jsx';
import Docter from './Pages/DocterPage/Docter.jsx';
import BookAppoinment from './Pages/BookAppoinment/BookAppoinment.jsx';
import About from './Pages/About/About.jsx';
import Pharmacy from './Pages/Pharmacy/Pharmacy.jsx';
import Labs from './Pages/Labs/Labs.jsx';
import Proctology from './Components/Depts/Proctology.jsx';
import ENT from './Components/Depts/Ent.jsx';
import Laparoscopy from './Components/Depts/Laparoscopy.jsx';
import Gynecology from './Components/Depts/gynecology.jsx';
import Vascular from './Components/Depts/Vascular.jsx';
import Urology from './Components/Depts/Urology.jsx';
import ChooseDoctor from './Components/Tabs/ChooseDoctor.jsx';
import Scheduler from './Components/Scheduler/Scheduler.jsx';
import Receipt from './Components/Receipt/Receipt.jsx';

function App () {
  return (
    <div className="App">
      <Router>
        <main>
          <Routes>
            <Route exact path="/" element={<LadningPage />} />
            <Route exact path="/schedule" element={<Scheduler />} />

            <Route path="/treatment" element={<Treatment />} />
            <Route path="/doctors" element={<Docter />} />
            <Route path="/aboutus" element={<About />} />
            <Route path="/labs" element={<Labs />} />
            <Route path="/Proctology" element={<Proctology />} />
            <Route path="/ent" element={<ENT />} />
            <Route path="/choosedoctor" element={<ChooseDoctor />} />

            <Route path="/vascular" element={<Vascular />} />
            <Route path="/urology" element={<Urology />} />
            <Route path="/gynecology" element={<Gynecology />} />
            <Route path="/laparoscopy" element={<Laparoscopy />} />

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
