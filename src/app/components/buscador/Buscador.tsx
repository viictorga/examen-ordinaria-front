import { useState } from "react"



type Props = {
    setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const Buscador = ({setSearch}: Props)=>{
    const [name, setName] = useState<string>("")

    return(
        <div>
            <p>Nombre: </p>
            <input onChange={(e)=>setName(e.target.value)} onKeyDown={(f)=>{
                if(f.key === "Enter"){
                        setSearch(name)
                    }
            }}></input>
            <button onClick={()=> setSearch(name)}> Buscar</button>
        </div>
    )
}