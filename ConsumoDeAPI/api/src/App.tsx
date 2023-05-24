import { useEffect} from 'react';
import { useState } from 'react'
import './App.css'
import { api } from './services/api'
import { ReactNode } from 'react';
import axios from 'axios';



const App = ()=>{
  
  const [Games, setGames] = useState<any[]>([])

  useEffect(()=>{
    axios
      .get('http://localhost:2008/games').then((res)=>{
        console.log(res.data);
        
        setGames(res.data.results)
      }).catch((err) =>{
        console.log(err);
        
      })
      
      
  },[])
   

  return(
    <div>
        <div>
          {Games.map((Games)=> <div>{Games.title}</div>)}
        </div>

      

    </div>
  )
 
}

export default App
