import React, {useEffect,useState} from 'react';

const LifeCicle = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);


    useEffect(() => {   
        console.log('use effect []')


        return () => {
            console.log(  "cleanup");
          }
    },[]);
 
    useEffect(() => {   
        console.log('use effect sin dependencias')


        return () => {
            console.log(  "cleanup");
          }
    });
 
    useEffect(() => {   
        console.log('use effect [counter1]')


        return () => {
            console.log(  "cleanup");
          }
    },[counter1]);
 

    useEffect(() => {   
        console.log('use effect [counter2]')


        return () => {
            console.log(  "cleanup");
          }

    },[counter2]);


    useEffect(() => {   
        console.log('use effect [ambos dependencias]')

        return () => {
          console.log(  "cleanup");
        }

    },[counter2,counter1]);
 



    return (
        <div>

        <h1>clicks count 1 : {counter1}</h1>
        <h1>clicks count 2 : {counter2}</h1>


        <button onClick={()=>setCounter1(counter1+1)}>increment c1</button>
        <button onClick={()=>setCounter2(counter2+1)}>increment c2</button>
        

        </div>
    );
};


export default LifeCicle;