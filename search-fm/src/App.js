import React, { useEffect,useReducer } from 'react';
import {BrowserRouter as Router,Switch,Route,Link} from 'react-router-dom'
import './App.css';
import Search from './components/search';
import {API} from './api/api'
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
          fetch(`${API}&artist=${artistName}`) //gets array from api
          .then(response => response.json())
          .then(jsonResponse =>{
            if (!jsonResponse.error) {
             const artists = jsonResponse.artist.similar[Object.keys(jsonResponse.artist.similar)[0]];  //artist.similar accesses array of similar artists
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
           
    <h2>Similar artists:</h2>
            <div>
              {artists.map((artist,index)=>(  //grabs similar artists withing the array
                <SimilarArtist 
                key={`${index}-${artist.name}`}  //uniquely identifies each item in array by name
                artist={artist} //links to similartist.js component
                />
              ))}
            </div>

      </header>
    </div>

  );
}

export default App;
