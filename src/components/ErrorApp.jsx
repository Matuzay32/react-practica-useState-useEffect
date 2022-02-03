import React,{useState} from 'react';

const ErrorApp = () => {

const [error , setError] = useState("");


    return (
        <div>
        <button onClick={()=>setError('error al traer los datos ')}>

            Agregar error
        </button>

        <button onClick={()=>setError('No se pudo solucionar el error ')}>

        Solucionado error 
        </button>


        <button onClick={()=>setError('')}>

        Error Solucionado 
        </button>   

       { error && <h1>{error}</h1>}

        </div>
    );
};


export default ErrorApp;