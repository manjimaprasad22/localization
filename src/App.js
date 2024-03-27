

import React, { useEffect } from "react";
import cookies from "js-cookie";
import Home from "./views/Home";
import Detailpage from "./views/Detailpage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FlipDemo from "./views/FlipDemo";




const languages = [

  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
    dir: "ltr"
  },
  {
    code: 'ar',
    name: 'العربية',
    country_code: 'sa',
    dir: "rtl"
  },

]
function App() {
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find(l => l.code === currentLanguageCode)
 

useEffect(() => {
  document.body.dir = currentLanguage.dir || 'ltr'
}, [currentLanguage])

  return (
    <div className="App">
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />     
        <Route path="/detail" element={<Detailpage />} />     
        <Route path="/next" element={<FlipDemo />} />     
      </Routes>
       </Router>
    </div>
  );
}

export default App;
