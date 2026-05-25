import React, { createContext, useContext, useEffect, useState } from "react";


type FavoritosType = {
    addToLista : (id:string)=> void;
    lista : string[],
    deleteFromLista: (id: string) => void;
}

const ContextoFavoritos = createContext<FavoritosType | null>(null)

export const FavoritosProvider = ({children}: {children: React.ReactNode}) =>{
    const [lista, setLista] = useState<string[]>([])
    const guardado = localStorage.getItem("personas")
    useEffect(()=>{
        if(guardado){
            const c = guardado ? guardado?.split(','): [];
            setLista(c)
        }
    }, [])
    useEffect(()=>{
        localStorage.setItem("personas", String(lista))
    }, [lista])
    const addToLista = (id:string)=>{
        setLista([...lista, id])
    }
    const deleteFromLista = (id:string)=>{
        setLista(lista.filter(x => x!== id)) 
    }
    return(
        <div>
            <ContextoFavoritos.Provider value={{lista, addToLista, deleteFromLista}}>
                {children}
            </ContextoFavoritos.Provider>
        </div>
    )
}


export const useFavoritos = ()=>{
    const context = useContext(ContextoFavoritos);
    if(!context) throw new Error("el contexto es nulo")
    return context;
}