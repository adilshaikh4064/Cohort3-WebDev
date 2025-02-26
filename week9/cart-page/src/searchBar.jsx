/* eslint-disable react/prop-types */
import "react";

function SearchBar({filterText,inStockOnly,onFilterTextChange,onInStockOnlyChange}){
    return(
        <>
            <div>
                <input 
                    type="text" placeholder="search..." id="search-bar" 
                    value={filterText}
                    onChange={(e)=>onFilterTextChange(e.target.value)}
                />
            </div>
            <label>
                <input 
                    type="checkbox" id="check-box"
                    checked={inStockOnly} 
                    onChange={(e)=>onInStockOnlyChange(e.target.checked)}
                /> 
                {' '}
                Only show products in stock
            </label>
        </>
    )
}

export default SearchBar