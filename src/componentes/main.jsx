import React from 'react'
import florista from './florista.jpg' 


function Main(){
    return(
        <main>
            <img className="florista" src={florista} alt="florista"/>
            <p>Olá, tudo bem? Que a semana comece com flores.</p>
       </main>
    )
}

export default Main