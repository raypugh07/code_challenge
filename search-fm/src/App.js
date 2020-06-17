import React, { useReducer } from 'react';
import './App.css';
import Search from './components/search';
import {API,API2} from './api/api'
import {reducer} from './reducers/index'
import SimilarArtist from './components/similarartist';



const initialState={  //sets up initial state of app
  fetching:false,  //not loading
  artists:[],  //no artist from array yet
  error:null  //no errors
}


function App() {
  const[state,dispatch] = useReducer(reducer,initialState);  //initializes use of reducer for state management



        const search = artistName =>{
          dispatch({
            type:'START'  //initializes search
          })
          fetch(`${API2}&artist=${artistName}`) //gets array from api
          .then(response => response.json())
          .then(jsonResponse =>{
            if (!jsonResponse.error) {
             const artists = jsonResponse.results.artistmatches[Object.keys(jsonResponse.results.artistmatches)[0]];  //artist.similar accesses array of similar artists
              dispatch({
                type:'SUCCESS',
               payload:artists
              });
            } else {
              dispatch({
                type:'FAIL',
                error:jsonResponse.error
              });
            }
          })
        }
  
  let {artists} = state;  //defines map function


  return (

    <div className="App">
      <header className="App-header">
      <div>
                
               <Search 
               search={search}  //connects search component to api
               
               />

            </div>
       <div>
        
      </div>
           
            <div>

            <h2>Results:</h2>

              {artists.map((artist,index)=>(  //grabs similar artists within the array
                <SimilarArtist 
                key={`${index}-${artist.name}`}  //uniquely identifies each item in array by name
                artist={artist} //links to similarartist.js component
                />
                
              ))}
            </div>

      </header>
    </div>

  );
}

export default App;