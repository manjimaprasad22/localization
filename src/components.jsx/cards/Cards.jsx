import React from 'react'
import data from './assets/Data.json'
import thaj from './assets/images/thaj.jpg'
import { useSelector } from 'react-redux';
import './assets/css/style.css'
import { useNavigate } from 'react-router-dom';

const Cards = () => {
console.log(data,"aaaaa");
const { carbon } = useSelector((state) => state.carbon);
const navigate = useNavigate()
  return (
    <div>
        <div class="card" style={{width: "18rem"}} >
          {carbon?
  <div className='image-alternate card-img-top' style={{width:"100%", height:"200px"}}></div>
  :
  <img class="card-img-top" src={thaj} alt="Card image cap" loading="lazy"/>

          }
  <div class="card-body">
    <h5 class="card-title">{data.data.name}</h5>
    <p class="card-text">{data.data.description}</p>
    <button class="btn btn-primary" onClick={()=>navigate('/detail')}>Detail</button>
  </div>
</div>
    </div>
  )
}

export default Cards