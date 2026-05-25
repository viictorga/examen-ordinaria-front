"use client"

import "./page.css"

type Props ={
    page:number,
    totalPages:number,
    setPage:(page:number)=>void,
    prev:boolean,
    next:boolean
}

export const FuncionPaginacion = ({
    page,
    totalPages,
    setPage,
    prev,
    next
}:Props)=>{

    const paginas = [

        // PRIMERAS
        1,
        2,
        3,

        // PAGINA ACTUAL SOLO
        // SI NO ESTA YA
        ...(page > 3 && page < totalPages - 2
            ? [page]
            : []
        ),

        // ULTIMAS
        totalPages - 2,
        totalPages - 1,
        totalPages

    ]

    .filter((e)=> e > 0 && e <= totalPages)

    const paginasFiltradas = [...new Set(paginas)]

    return(

        <div className="general">

            <div className="izq">

                <button
                    onClick={()=>{

                        if(prev){
                            setPage(page - 1)
                        }

                    }}
                >
                    ⬅
                </button>

            </div> 

            <div className="numero">

                {
                    paginasFiltradas.map((e)=>{

                        // PAGINA ACTUAL
                        if(e === page){

                            return(
                                <p key={e}>
                                    {e}
                                </p>
                            )

                        }

                        // RESTO
                        return(

                            <button
                                key={e}

                                onClick={()=>{
                                    setPage(e)
                                }}
                            >
                                {e}
                            </button>

                        )

                    })
                }

            </div>

            <div className="der">

                <button
                    onClick={()=>{

                        if(next){
                            setPage(page + 1)
                        }

                    }}
                >
                    ⮕
                </button>

            </div>
       
        </div>

    )

}