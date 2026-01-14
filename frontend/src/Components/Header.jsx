import React from 'react';

function Header({ searchTerm, setSearchTerm }) {
  return (
    <div className="header">
      <h1>Neta <span>Meter</span></h1>
      <p>Asli Chehra, Asli Data</p>
      
      <input 
        type="text" 
        placeholder="🔍 Neta ya Party ka naam dhoondo..." 
        className="search-bar"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );
}

export default Header;
