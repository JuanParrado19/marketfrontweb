import React, { useEffect, useState } from 'react';

const Products = ({setCart}) => {
    const [products, setProducts] = useState([]);
    const [cart, setCartlocal] = useState([]);
    useEffect(() => {
        // Realiza la petición GET para obtener el JSON de productos
        fetch('http://146.190.59.47:3000/product/list')
            .then(response => response.json())
            .then(data => setProducts(data));
    }, []);

    const addToCart = (product,productName) => {
        setCartlocal(productList => [...productList, product]);
        setCart = productList => [...productList, product];
        setCart(cart);
        console.log(product);
        console.log(setCart);
        alert(`Product ${productName} added to cart`);
    };

    return (
        <div className="container mx-auto p-5">
            <h1 className="text-2xl font-bold pb-2">Products</h1>
            <div className="grid grid-cols-4 gap-4">
                {products.map(product => (
                    <div key={product.id} className="bg-white p-4 shadow">
                        <img src={product.image} alt={product.name} className="w-full" style={{ height:"280px" }}/>
                        <h2 className="text-xl font-bold">{product.name}</h2>
                        <p className="text-gray-500">{product.description}</p>
                        <p className="text-green-500">${product.price}</p>
                        <button onClick={() => addToCart(product , product.name)} className="bg-blue-500 text-white px-4 py-2 mt-2 rounded">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>    
    );
};

export default Products;