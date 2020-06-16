import React, { Component } from 'react';

const Search = ({search}) => {


        const [artistName, setArtist] = React.useState('');
        
        const handleChange = event => {
            setArtist(event.target.value);
        }

        const resetInput = () =>{
            setArtist("")
        }

        const callFunction =e=>{
            e.preventDefault();
            search(artistName);
            resetInput();
  
          }

        return (
            <div>
                <input
                onChange={handleChange}
                type='text'
                placeholder='Enter your favorite artist ...'
                value={artistName}
                
                />

                <input
                onClick={callFunction}
                type='submit'
                value='search'

                />
                
            </div>
        );
    }


export default Search;