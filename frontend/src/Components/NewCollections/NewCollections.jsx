import React, { useEffect, useState } from 'react'
import './NewCollections.css'
// import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'

const NewCollections = () => {

  const [new_collection, setNew_Collection] = useState([])
  
  useEffect(()=>{
    fetch('https://e-commerce-3rxb.onrender.com/newcollection')
    .then((response)=>response.json())
    .then((data)=>setNew_Collection(data))
  },[])

  return (
    <div className='newcollection'>
      <h1>NEW COLLECTIONS</h1>
      <hr />

      <div className="collections">
        {new_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}></Item> 
        })}
      </div>
    </div>
  )
}

export default NewCollections
