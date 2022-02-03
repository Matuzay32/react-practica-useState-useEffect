import React ,{useState}from 'react';

const initialProduct = {
    title: 'Primer producto',
    description:' Este es el primer producto de la app de prueba'
};

const ProductApp = () => {

    const [product, setProduct] = useState(initialProduct);

    const updateProduct = (property,value)=>{
        setProduct({
            ...product,
            [property]: value
        });

    }
    return (
        <div>
        <button onClick={()=>updateProduct('title','este es el titulo')}>Update</button>
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            {/* <pre>{JSON.stringify(product,null, 2)}</pre> */}
        </div>
    );
};


export default ProductApp;
