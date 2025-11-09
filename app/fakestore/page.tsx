"use client"
import SearchBar from "../components/searchbar"
import { useEffect, useState } from "react";



export default function FakeStore () {

    const [productsState, setProductsState] = useState([])

    useEffect(() => {
        
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray)=> {
                const newProductsState = productsArray.map((product:any) => {
                    console.log(product)
                    return product
                })
                setProductsState(newProductsState);
            });

    }, [])

    const hasProducts = productsState.length > 0
    
    return (
        <div style={{width: "100%", margin: "100px"}}>
                {hasProducts ? <SearchBar products={productsState}/> : "Loading..."}
        </div>
    );
}

