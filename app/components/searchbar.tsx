'use client'
import { useState } from "react"


export default function SearchBar(props:any) {
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event: any) => {
        setSearchValue(event.target.value);
    }

    const handleClearButtonClick = () => {
        setSearchValue("");
    }

    const searchBarStyle = {
        border: "1px solid cyan",
        borderRadius: "5px",
        padding: "2px"
    }

    const clearButtonStyle = {
        padding: "2px",
        border: "1px solid cyan",
        borderRadius: "5px",
        cursor: "pointer"
    }

    const shouldDisplayButton = searchValue.length > 0;

    const filteredProducts = props.products.filter((product: any) => {
        return product.title.toLowerCase().includes(searchValue.toLowerCase())
    })

    return (

        <div>
            <h1 style={{paddingBottom: "30px"}}>The Fakest Store</h1>
            <input type="text" value={searchValue} onChange={handleInputChange} style={searchBarStyle} />
            <span style={{marginRight: "10px"}} />
            {
                shouldDisplayButton &&
                <button style={clearButtonStyle} onClick={handleClearButtonClick}>Clear</button>
            }   

            <div style={{height: "30px"}}></div>

            <div style={{display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1rem"}}>
                {filteredProducts.map((product:any) => {
                    return (
                        <span style={{marginBottom: "20px"}} key={product.title}>
                            <div>
                                <img src={product.image} style={{maxHeight: "200px"}}></img>
                            </div>
                            <div>
                                <b>{product.title}</b>
                            </div>
                            <div>
                                {product.price}
                            </div>
                        </span>
                    )
                        
                })}
            </div>
            
            
        </div>
    );
}
