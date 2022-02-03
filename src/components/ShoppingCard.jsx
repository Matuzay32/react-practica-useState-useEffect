import React,{useState} from 'react';


const initialCart = [
{
    id:1,
    title:"product",
    description: 'desc'

},
{
    id:2,
    title:"product 2",
    description: 'desc'

},

{
    id:3,
    title:"product 3",
    description: 'desc'

},
]


const ShoppingCard = () => {
const [cart, setCart] = useState(initialCart);

const deleteProduct = (id)=>{
   const changedCart = cart.filter(product => product.id !== id)

    setCart(changedCart);

}

const addProduct =  (newProduct) =>{
    newProduct.id= Date.now();


 newProduct = [newProduct,...cart]

    setCart(newProduct)


}
const updateProduct =  (updateProduct) =>{

    const changedCart = cart.map((product)=>(
        product.id === updateProduct.id 
        ? updateProduct
        :product

    ))

    setCart(changedCart);

}
    return (
			<div>
                <button onClick={()=>addProduct({title: 'nuevo producto ', description:'nuevo producto agregado'})}> Agregar </button>
               
                

				{cart.map((p) => {
					return (
						<div key={p.id}>
							<li>{p.title}</li>
							<li>{p.description}</li>
                            <button onClick={()=>deleteProduct(p.id)}>Eliminar un producto</button>
                            <button onClick={()=>updateProduct({id:p.id,title: 'Editado ', description:'Editado'})}> Update </button>
						</div>
					);
				})}



			</div>
		);
};


export default ShoppingCard;