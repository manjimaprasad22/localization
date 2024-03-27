import React from 'react'
import { useTranslation } from "react-i18next";
import Texts from '../components.jsx/Texts';
import Navbar from '../components.jsx/navbar/Navbar';
import Cards from '../components.jsx/cards/Cards';
import BookFlip from '../components.jsx/cards/BookFlip';
import HTMLFlipBook from 'react-pageflip';
import thaj from '../components.jsx/cards/assets/images/thaj.jpg'
import ai from '../components.jsx/cards/assets/images/deep.png'
import ice from '../components.jsx/cards/assets/images/iceland.jpg'


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
  <HTMLFlipBook width={200} height={200}
   orientation="horizontal" // or "vertical"
   uncutPages={true}
   showSwipeHint={true}
   responsive={true}
   loopForever={true}
   flipOnTouch={true}
   flipOnTouchZone={30}>
            <div className="demoPage"></div>
            <div className="demoPage"><img src={thaj} alt="" style={{width:"200px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ai} alt="" style={{width:"200px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ice} alt="" style={{width:"200px", height:"200px"}} /></div>
            <div className="demoPage"><img src={ai} alt="" style={{width:"200px", height:"200px"}} /></div>           
        </HTMLFlipBook>
  <BookFlip/>
    </div>
  )
}

export default Home