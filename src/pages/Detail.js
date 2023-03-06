import React from 'react'
import { useParams } from 'react-router-dom';
import useRecuperation from '../hooks/useRecuperation';

const Detail = ({maison, handleDeleteMaison}) => {
   
  return (
    <div className='card'>
    <div key={maison.maisonid}>
              <div className='top'>
                <h4>Image:</h4>
                <p>{maison.image} </p>
              </div>
              <div className='start'>
                <p>Adresse : ${maison.adresse}</p>
                <p>Prix : ${maison.prix}  </p>
                <p>Disponibilité : {maison.disponibilite}</p>                  
                <p>Status : {maison.status}</p>                   
                <p>Category : {maison.category}</p>                   
                <p >Date : {maison.date}</p>      
                <p>Description : {maison.description} </p>
              </div>

              
            </div>
           
            <div>
            <button className='btn-delete' onClick={() =>handleDeleteMaison(maison.maisonid)}>delete</button>
            </div>

</div>
  )
}

export default Detail
