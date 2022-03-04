import React, { useState } from "react";

export default function SearchBar({onSearch}) {
  
  const {city, setCity} = useState ('')
  
  return (
    <form class="form-inline my-2 my-lg-0"
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
      <input
        class="form-control mr-sm-2"
        type="text"
        placeholder="Ciudad..."
        aria-label="Ciudad..."
        onChange={(e) => setCity(e.target.value)}
      />
      <input
       class="btn btn-outline-success my-2 my-sm-0"
       type="submit" value="Agregar"  />
    </form>
    
  );
  
}
