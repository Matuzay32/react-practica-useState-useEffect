import React ,{useState}from 'react';

const ConditionalApp = () => {

const [condition, setCondition] = useState(true);

    return (
        <div>

        <button onClick={()=>setCondition(!condition)}>Toggle</button>


        <h1>Conditional App</h1>
            {/* { condition ? <h1> esta en true</h1> :<h1> esta en false</h1> }  */}

           {/* {condition &&  <h1> esta en true</h1> } */}

           {/* <h1>
               La variable es {condition.toString()}
           </h1> */}



        </div>
    );
};


export default ConditionalApp;