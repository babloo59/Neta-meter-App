import React, { useEffect, useState } from 'react';
import './App.css';

// Humare naye components import kiye
import Header from './Components/Header';
import NetaCard from './Components/NetaCard';
import ComplaintFeed from './Components/ComplaintFeed';

function App() {
  const [netas, setNetas] = useState([]);
  const [complaints, setComplaints] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  // Data Fetching
  useEffect(() => {
    // 1. Get Netas
    fetch('https://neta-meter-backend-api.onrender.com/api/netas')
      .then(res => res.json())
      .then(data => setNetas(data))
      .catch(err => console.error(err));

    // 2. Get Complaints
    fetch('https://neta-meter-backend-api.onrender.com/api/complaint')
      .then(res => res.json())
      .then(data => setComplaints(data))
      .catch(err => console.error(err));
  }, []);

  // Filter Logic
  const filteredNetas = netas.filter(neta => 
    neta.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    neta.party.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app-container">
      
      {/* 1. Header Section */}
      <Header searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 2. Main Grid Section */}
      <div className="card-grid">
        {filteredNetas.map((neta) => (
          <NetaCard key={neta.id} neta={neta} />
        ))}

        {filteredNetas.length === 0 && (
            <div style={{textAlign: 'center', gridColumn: '1/-1', color: 'gray', marginTop: '20px'}}>
                Koi Neta nahi mila boss! 🤷‍♂️
            </div>
        )}
      </div>

      {/* 3. Footer/Complaint Section */}
      <ComplaintFeed complaints={complaints} />

    </div>
  );
}

export default App;
