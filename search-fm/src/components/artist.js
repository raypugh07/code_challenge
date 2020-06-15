import React from 'react'




const Artist = props=>{
    return(
        <div className='Artist'>
            <h1>{props.name}</h1>
            <h2>{props.playcount}</h2>
        </div>
    )
}


Artist.defaultProps = {  //sets default values of items
    name:'',
    playcount:''
}