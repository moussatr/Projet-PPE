import React from 'react'
import Items from '../components/Items'

function Home({maisons, handleDeleteMaison }) {
  
  return (
    <div className='techno-list' >
    <h1>La liste de tout les maisons</h1>
    <div  className='list'>
  
        {
            maisons.map(maison => (
                <Items maison={maison} key={maison.maisonid} handleDeleteMaison={handleDeleteMaison}/>
            ))
        }
    
    </div>
    
</div>
  )
}

export default Home