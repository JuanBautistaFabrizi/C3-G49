import React from 'react'
import './item.css'
import ItemCount from '../ItemCount/ItemCount'



const Item = ({data}) => {
  return (
      
      <div className="container">
            <div className="row align-items-start">
                <div className="col">
                    <h2 className="">{data.title}</h2>
                    <h4 className="">$ {data.price}</h4>
                </div>
                <div className="image col"> 
                    <img src={data.thumbnail} width="200" alt=""/> 
                    
                </div>
            </div>
            <div className="row">
                <div className="col ver-mas mt-4">
                    <ItemCount />
                </div>
            </div>
      </div>
      
    
  )
}
  
  


export default Item