"use client"


import { Character } from "@/app/types"
import { useParams } from "next/navigation"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { api } from "@/lib/api"


const paginaPersonaje= () =>{
    const {id} = useParams()
      const [error,setError] = useState<string>("")
      const [personajeOficial,setPersonajeOficial]= useState<Character|null>(null)
      const router = useRouter()
      
    useEffect(()=>{
       if(id){
            api.get(`/character/${id}`).then((e)=>{
               setPersonajeOficial(e.data)
           })
           .catch((e)=>{
               setError(e.message + "el id es este" + id)
           })
           
          
       }
      
     },[id])
    return(
    <div>
        <div className="todoDeCadaPJ">
        
            <div className="info"></div>
            <h1>Nombre: {personajeOficial?.name} </h1>
            <h2>Especie:{personajeOficial?.gender} </h2>
            <h2>Status: {personajeOficial?.status}</h2>
            <h2>Especie:{personajeOficial?.species} </h2>
            <h2>ID:{personajeOficial?.id} </h2>
            <h2>Origen:{personajeOficial?.origin.name} </h2>
            <h2>Especie:{personajeOficial?.location.name} </h2>
            <button onClick={router.back}> ATRAS </button>
           
            </div>
    </div>
    )
    
}
export default paginaPersonaje