"use client"

type Props = {
    genero:string
    setGenero:React.Dispatch<React.SetStateAction<string>>
}

export const GeneroChulo = ({genero,setGenero}:Props)=>{

    return(
        <div>
            <button onClick={()=>{
            if(genero === "Female"){
                 setGenero("Male")
        }
            else if(genero === "Male"){
                setGenero("Genderless")
            }
            else if(genero === "Genderless"){
             setGenero("unknown")
            }
            else{
                setGenero("Female")
            }
            }}>Cambiar Genero</button>
            <p>{genero}</p>
            </div>
    )
}