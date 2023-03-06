import React from 'react'
import { useState } from 'react'

function Vendre(props) {
  const [maison, setMaison] = useState({
    image: '',
    adresse:'',
    prix: '',
    disponibilite: '',
    status:'',
    category:'',
    date:'',
    description:''

  });

  const { handleMaison } =props;

  function handleSubmit(evt) {
    evt.preventDefault();
    handleMaison(maison);
    setMaison({
      image: '',
      adresse:'',
      prix: '',
      disponibilite: '',
      status:'',
      category:'',
      date:'',
      description:''
    })
  }
  
  function handleChange(e) {
    const { name, value } = e.target;
    setMaison({...maison, [name]: value});
    
  }
  return (
    <div>
      <h1>Ajouter votre maison à vendre</h1>
        <div className='div-form'>
            <form onSubmit={(evt) => handleSubmit(evt)}>
                <label htmlFor='image' id='image' >Image:</label>
                <br />
                <input type="file" name='image' value={maison.image} onChange={(e) => handleChange(e)}  />
                <br />
                <label htmlFor='adresse' id='adresse' >Adresse:</label>
                <br />
                <input type="text" name='adresse' value={maison.adresse} onChange={(e) => handleChange(e)}  />
                <br />
                <label htmlFor='prix' id='prix' >Prix:</label>
                <br />
                <input type="number" name='prix' value={maison.prix} onChange={(e) => handleChange(e)} />
                <br />
                <label htmlFor='disponibilite' id='disponibilite' >Disponibilité:</label>
                <br />
                
                <input type="text" name='disponibilite' value={maison.disponibilite} onChange={(e) => handleChange(e)}  />
                <br />
                <label htmlFor='status' id='status' >Status:</label>
                
                <br />
                <select name='status' id='echnocategory'  value={maison.status} onChange={(e) => handleChange(e)} >
                    <option value="">Select a status</option>
                    <option value="active">Active</option>
                    <option value="inactive">Inactive</option>
                  
                </select>
                <br />
                
                <label htmlFor='category' id='tecnocategory' >Category:</label>
                <br />
                
                <select name='category' id='echnocategory'  value={maison.category} onChange={(e) => handleChange(e)}>
                    <option value="">Select a category</option>
                    <option value="front">Front</option>
                    <option value="back">Back</option>
                    <option value="fulstack">Full stack</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <label htmlFor='date' id='tecnoname' >Date:</label>
                <br />
                <input type="date" name='date' value={maison.date} onChange={(e) => handleChange(e)}  />
                <br />
                <label htmlFor='description'  >Description:</label>
                <br />
                <textarea name='description'
                  id="tecnodescription"
                  cols="30"
                  rows="10"
                  value={maison.description} onChange={(e) => handleChange(e)} 
                ></textarea>
                <br />
                <input type="submit" value="Add Maison" className='btn' />


            </form>
            </div>
    </div>
  )
}

export default Vendre