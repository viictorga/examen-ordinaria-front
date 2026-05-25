"use client"
import { useEffect, useState } from "react";
import "./globals.css"
import { Character } from "./types";
import { api } from "@/lib/api";
import { CartaGuapa } from "./components/cardCharacter/cardCharacter";
import { EstadoGuapo } from "./components/status/Status";
import { Buscador } from "./components/buscador/Buscador";
import { GeneroChulo } from "./components/genero/Genero";
import { FuncionPaginacion } from "./components/Paginador/paginador";

const  Home = () =>{
  const [search, setSearch] = useState<string>("")
  const [estado, setEstado] = useState<string>("")
  const [genero, setGenero] = useState<string>("")
  const  [personajes, setPersonajes] = useState<Character[]>([])
    const [loading,setLoading] = useState<boolean>(true)
  const [error,setError] = useState<string>("")
  const [page, setPage] = useState<number>(1)
    const [prev,setPrev]=useState<boolean>(true)
  const [next,setNext]=useState<boolean>(true)
    const [totalPaginas,setTotalPaginas]=useState<number>(0)

 
 useEffect(()=>{
    const llamada = api.get(`/character/?name=${search}&gender=${genero}&status=${estado}&page=${page}`)
    llamada.then((e)=>{
      setPersonajes(e.data.results)
      setPrev(e.data.info.prev)
      setNext(e.data.info.next)
      setTotalPaginas(e.data.info.pages)
    })
    .catch((e)=>{
        setError(e.message)
    })
    .finally(()=>{
      setLoading(true)
    })
  

  },[search,page, estado, genero])


  return (
    <div className="generalAsiGuapo">
      <div className="componentesChulos">
        <Buscador setSearch={setSearch}></Buscador>
        <GeneroChulo genero={genero} setGenero={setGenero}/>
        <EstadoGuapo estadito={estado} setEstado={setEstado}/>
      </div>
      <div className="personajesCartas">
        {personajes && personajes.map((e)=>{
          return <CartaGuapa key={e.id} personaje={e}></CartaGuapa>
        })}
      </div>
      <FuncionPaginacion page={page} setPage={setPage} totalPages={totalPaginas} ></FuncionPaginacion>
      
    </div>
  );
}
export default Home;
