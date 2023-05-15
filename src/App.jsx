import { useState ,useEffect } from 'react'
import axios from 'axios'
import './App.css'
import Clim from './Components/Clim'
 import City from './Components/City'


function App() {
  
  const [isVisible,setIsVisible ]=useState({})
  const [isGrade , setIsGrade]= useState(false)

  const [isValue,setIsValue]=useState("")
  let aux=""

  

  useEffect(()=>{
    navigator.geolocation.getCurrentPosition(pos=>{
    console.log(pos)

    axios
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=6235b1b8482460e5e216284863064c2f&lang=es&units=metric`)
    .then(resp=> setIsVisible(resp.data))
    .catch(error =>console.error(error))

    })
   
    
},[])




const changeGrades =() =>{
  console.log(isValue)
  setIsGrade(!isGrade)

  if(isGrade==true){aux="metric"}else{aux="imperial"}

  if(isValue===""){
    

    navigator.geolocation.getCurrentPosition(pos=>{

    axios                                                                                          
    .get(`https://api.openweathermap.org/data/2.5/weather?lat=${pos.coords.latitude}&lon=${pos.coords.longitude}&appid=6235b1b8482460e5e216284863064c2f&lang=es&units=${aux}`)
    .then(resp=> setIsVisible(resp.data))

    .catch(error =>console.error(error))
    
    })


  }else{
    if(isGrade==true){aux="metric"}else{aux="imperial"}

    navigator.geolocation.getCurrentPosition(pos=>{

      axios                                                                                          
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${isValue}&appid=6235b1b8482460e5e216284863064c2f&lang=es&units=${aux}`)
      .then(resp=> setIsVisible(resp.data))
      .catch(error =>console.error(error))
      
      })
     

  }
  
 

   
 
}


const ciudad =() =>{
  navigator.geolocation.getCurrentPosition(pos=>{

    axios                                                                                          
    .get(`https://api.openweathermap.org/data/2.5/weather?q=${isValue}&appid=6235b1b8482460e5e216284863064c2f&lang=es&units=metric`)
    .then(resp=> setIsVisible(resp.data))

    .catch(error =>console.error(error))
    
    })
   

 
}

  return (
    <div className="App">
         <div className="display">
                <section>
                   <h2 className='titulo'>Weather app</h2>
                </section>
               
                <section className='baner2'>
                  <input type="text"
                  className='input'
                  id="inputCiudad" 
                  placeholder="Buscar una Ciudad"
                  onChange={(e) => setIsValue(e.target.value)}
                  value={isValue}/>
                  {<button className='Go' onClick={ciudad}>Ir</button>}
                </section>
                
                
          </div>
       <Clim 
       data={isVisible}
       />
       {<button className='Change' onClick={changeGrades}>{isGrade ? "Cambiar a C°" : "Cambiar a F°"} </button>}
   
   
      
      
  

    </div>
  )
}

export default App
