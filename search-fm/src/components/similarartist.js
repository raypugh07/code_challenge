import React from 'react'
import '../App.css';




const SimilarArtist = ({artist})=>{
    return(
        <div className='Artist'>
         
            {/* <img src={artist.image}></img> */}

            <h2>{artist.name}</h2>
            <h3>Listeners: {artist.listeners}</h3>
            <a href={artist.url} target='_blank'>Info</a>
            
        </div>
    )
}




export default SimilarArtist;