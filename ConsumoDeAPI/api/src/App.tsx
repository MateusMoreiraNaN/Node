import { useEffect} from 'react';
import { useState } from 'react'
import './App.css'
import { api } from './services/api'
import { ReactNode } from 'react';
import axios from 'axios';



const App = ()=>{
  
  

  const[game, setGame]=useState([])

  useEffect(()=>{
    
    /*
    axios
      .get('http://localhost:2008/games').then((res)=>{
        console.log(res.data);
        
        setGames(res.data.results)
      }).catch((err) =>{
        console.log(err);
        
      })
    */
      const getGames = async() =>{
        const res = await axios.get('http://localhost:2008/games')
        //console.log(res.data);
        setGame(res.data)
        
      }
      getGames()

      
  },[])
   

  return(
    <div>
        <div>
          <h1>{title}</h1>
        </div>

      

    </div>
  )
 
}

export default App
