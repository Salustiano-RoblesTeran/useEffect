import React, {useEffect} from 'react'

const GalleryDetails = ({descripcion}) => {
    // Montaje
    useEffect(() => {
        console.log("Montaje")
    }, [])
    
    // Desmontaje
    useEffect(() => {
      
    
      return () => {
        console.log("Desmontaje")
      }
    }, [])
    

  return (
    <>
        <p>{descripcion}</p>
    </>
    
  )
}

export default GalleryDetails