import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";

// Home Sections
import Background from "./Components/Background";


// Wisdom Teeth
import WisdomTeeth from "./Components/Pages/TeethGums/WisdomTeeth";
import BrokenChippedTeeth from "./Components/Pages/TeethGums/BrokenChippedTeeth";
import Toothache from "./Components/Pages/TeethGums/Toothache";
import RecedingGums from "./Components/Pages/TeethGums/RecedingGums";
import TeethCleaning from "./Components/Pages/TeethGums/TeethCleaning";
import GumDisease from "./Components/Pages/TeethGums/GumDisease";
import TeethGrinding from "./Components/Pages/TeethGums/TeethGrinding";
import JawPain from "./Components/Pages/TeethGums/JawPain";
import BadBreath from "./Components/Pages/TeethGums/BadBreath";
import SoreTeeth from "./Components/Pages/TeethGums/SoreTeeth";
import AbscessTeeth from "./Components/Pages/TeethGums/AbscessTeeth";
import MouthUlcer from "./Components/Pages/TeethGums/MouthUlcer";
import TeethFilling from "./Components/Pages/TeethGums/TeethFilling";
import AmalgamFilling from "./Components/Pages/TeethGums/AmalgamFilling";
import DryMouth from "./Components/Pages/TeethGums/DryMouth";
import YellowTeeth from "./Components/Pages/CosmeticImprovement/YellowTeeth";
import MissingTeeth from "./Components/Pages/CosmeticImprovement/MissingTeeth";
import WornTeeth from "./Components/Pages/CosmeticImprovement/WornTeeth";
import CrookedTeeth from "./Components/Pages/CosmeticImprovement/CrookedTeeth";



function Home() {
  return (
    <>
      <Background />
      
    </>
  );
}

function App() {
  return (

    
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wisdom-teeth" element={<WisdomTeeth />} />
        <Route path="/broken-chipped-tooth" element={<BrokenChippedTeeth />} />
        <Route path="/toothache" element={<Toothache />} />
        <Route path="/receding-gums" element={<RecedingGums />} />
        <Route path="/teeth-cleaning" element={<TeethCleaning />} />
        <Route path="/gum-disease" element={<GumDisease />} />
        <Route path="/teeth-grinding" element={<TeethGrinding />} />
        <Route path="/jaw-pain" element={<JawPain />} />
        <Route path="/bad-breath" element={<BadBreath />} />
        <Route path="/sore-teeth-treatment" element={<SoreTeeth />} />
        <Route path="/abscess-teeth-treatment" element={<AbscessTeeth />} />
        <Route path="/mouth-ulcer-treatment" element={<MouthUlcer />} />
        <Route path="/teeth-filling-treatment" element={<TeethFilling />} />
        <Route path="/amalgam-filling-treatment" element={<AmalgamFilling />} />
        <Route path="/dry-mouth-treatment" element={<DryMouth />} />
        <Route path="/yellow-teeth-treatment" element={<YellowTeeth />} />
        <Route path="/missing-teeth-treatment" element={<MissingTeeth />} />
        <Route path="/worn-teeth-treatment" element={<WornTeeth />} />
        <Route path="/crooked-teeth-treatment" element={<CrookedTeeth />} />



      </Routes>
    </Router>

  

  );
}

export default App;
