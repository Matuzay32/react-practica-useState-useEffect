import React, { useEffect, useState } from 'react';


const ReziseApp = () => {


useEffect(() => {
	const handdleResize = () => setWindowWdith(window.innerWidth);

	window.addEventListener("resize", handdleResize);

	return () => {
		window.removeEventListener("resize", handdleResize);
	};
}, []);



const [windowWdith, setWindowWdith] = useState(window.innerWidth);

const isMobible = windowWdith <768
    return (
        <div>
            {windowWdith}

          { isMobible ? <h1>Mobible</h1> : <h1>Desktop</h1>  }


        </div>
    );
};


export default ReziseApp;