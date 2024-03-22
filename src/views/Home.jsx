import React from 'react'
import { useTranslation } from "react-i18next";
import Texts from '../components.jsx/Texts';
import Navbar from '../components.jsx/navbar/Navbar';
import Cards from '../components.jsx/cards/Cards';


const Home = () => {
    const {t}= useTranslation()
    const releaseDate = new Date('2024-03-10')
    const timeDifference = new Date - releaseDate
    const number_of_days = Math.floor(timeDifference/(1000*60*60*24)) 
   
  return (
    <div className="container">
        
    <Navbar/>
      <div className="d-flex flex-column align-items-start">    
     <h1 className="font-weight-normal mb-3"> {t('welcome_message')}</h1>
     <p>{t('days_since_release',{number_of_days})}</p>
      </div>
  <Texts/>
  <Cards/>
    </div>
  )
}

export default Home