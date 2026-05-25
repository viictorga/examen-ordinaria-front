"use client"

type Props = {
    estadito:string
    setEstado:React.Dispatch<React.SetStateAction<string>>
}
// no me da parahacerlo algoritmico con un array
export const EstadoGuapo = ({estadito,setEstado}:Props)=>{

    return(
        <div>
        <button onClick={()=>{
            if(estadito === "dead"){
                setEstado("alive")
            }
            else if(estadito === "alive"){
                setEstado("unknown")
            }
            else{
                setEstado("dead")
            }
            }}>Cambiar Estado</button>
            <p>{estadito}</p>
        </div>
    )
}