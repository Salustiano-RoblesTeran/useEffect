import React, { useEffect } from 'react'
import { useState } from 'react'
import { sculptureList } from '../assets/data/data'; 
import GalleryDetails from './GalleryDetails';

export const Gallery = () => {
    // console.log(sculptureList);
    const [index, setIndex] = useState(0);
    // console.log(sculptureList[index])

    const [show, setShow] = useState(false);

    // userEffect
    useEffect(() => {
        // alert("Bienvenidos a la galeria");
    }, [])

    // Guardar datos en una variable
    let escultura = sculptureList[index];
  return (
    <>
    <h2>Gallery</h2>
    <button onClick={()=> setIndex(index - 1)} disabled = {index < 1 ? true : false}>Back</button>
    <button onClick={()=> setIndex(index + 1)} disabled = {(index + 1) >= sculptureList.length}>Next</button>
    <h2>{escultura.name} {escultura.artist}</h2>
    <h2>{index + 1} de {sculptureList.length}</h2>
    <img src={escultura.url} alt={escultura.alt}/>

    <div>
        <button onClick={()=>setShow(!show)}>{show ? "Hidden details" : "Show details"}</button>

        {show && <GalleryDetails descripcion = {escultura.description}/>}
        
    </div>

    
    </>
  );
}
