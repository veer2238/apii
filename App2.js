import React from 'react'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

const App2 = () => {

    const [num,setNum] = useState([])



    useEffect(()=>{
       axios.get('https://jsonplaceholder.typicode.com/posts')
       .then((res)=> setNum(res.data)

       )
    },[])



  return (
    <div> 



    {num.map((post)=>{
        const{id,title,body} = post;
        return(
            <div class="card" key={id}>

            
            <div class="card-body">
              {title}
            </div>


            <div class="card-body">
              {body}
            </div>


          </div>
        )
     })}


    
    
    </div>
  )
}

export default App2