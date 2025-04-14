import { useEffect, useState, createContext } from "react";

export const ProductContext = createContext();

export default function ProductProvider({ children }) {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(responseve => responseve.json())
            .then(responseve => setProduct(responseve))
    }, []);

    return <ProductContext.Provider value={{ product, setProduct }}>{children}</ProductContext.Provider>
}