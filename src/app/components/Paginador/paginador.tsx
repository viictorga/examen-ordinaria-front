"use client"

import "./page.css"

type Props ={
    page:number,
    totalPages:number,
    setPage:(page:number)=>void
}

export const FuncionPaginacion = ({
    page,
    totalPages,
    setPage
}:Props)=>{

    const primeras = [1,2,3]

    const ultimas = [
        totalPages - 2,
        totalPages - 1,
        totalPages
    ]

    const paginas = [

        ...primeras,

        // SOLO mete la actual
        // si no está ya en primeras o últimas
        ...( !primeras.includes(page) &&
            !ultimas.includes(page)
            ? [page]
            : []
        ),

        ...ultimas

    ].filter((e)=> e > 0 && e <= totalPages)

    return(

        <div className="general">

            <div className="izq">

                <button
                    onClick={()=>{

                        if(page > 1){
                            setPage(page - 1)
                        }

                    }}
                >
                    ⬅
                </button>

            </div> 

            <div className="numero">

                {
                    paginas.map((e)=>{

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

                        if(page < totalPages){
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