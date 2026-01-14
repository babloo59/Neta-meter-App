import React from 'react';
import { Bar } from 'react-chartjs-2';
// Chart JS imports yahan move ho gaye
import {
  Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function NetaCard({ neta }) {
  
  // Logic: Growth Calculation
  const growth = ((neta.wealth2024 - neta.wealth2019) / neta.wealth2019) * 100;
  const isSuspicious = growth > 500;

  // Logic: Report Handling
  const handleReport = () => {
    const complaintText = prompt(`🚨 POL KHOL: \n${neta.name} ke khilaf kya report karna hai?`);
    if (complaintText) {
      const complaintData = { netaName: neta.name, description: complaintText };
      
      fetch('https://neta-meter-backend-api.onrender.com/api/report', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(complaintData)
      })
      .then(res => res.json())
      .then(() => alert("Shikayat darj ho gayi hai! ✅"))
      .catch(err => alert("Server Error! ❌"));
    }
  };

  return (
    <div className="card">
      <div className="card-header">
        <h2>{neta.name}</h2>
        <span className="party-badge">{neta.party}</span>
      </div>
      
      <div className="card-body">
        <p className="state">📍 {neta.state}</p>

        {/* Criminal Stats */}
        <div className={`stat-box ${neta.criminalCases > 0 ? 'danger' : 'safe'}`}>
          ⚖️ Criminal Cases: <strong>{neta.criminalCases}</strong>
        </div>

        {/* Wealth Graph Section */}
        <div className="wealth-section" style={{ background: '#fff', padding: '10px', borderRadius: '8px' }}>
          <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '10px' }}>💰 Sampatti Growth</p>
          <div style={{ height: '200px' }}>
            <Bar
              data={{
                labels: ['2019', '2024'],
                datasets: [{
                  label: 'Sampatti (Cr)',
                  data: [neta.wealth2019, neta.wealth2024],
                  backgroundColor: ['#95a5a6', neta.wealth2024 > neta.wealth2019 * 5 ? '#ff4757' : '#2ed573'],
                  borderRadius: 5,
                }],
              }}
              options={{
                responsive: true, maintainAspectRatio: false,
                plugins: { legend: { display: false } }, scales: { y: { beginAtZero: true } }
              }}
            />
          </div>
          <p style={{ textAlign: 'center', marginTop: '10px', fontWeight: 'bold', color: growth > 500 ? 'red' : 'green' }}>
            📈 Growth: {growth.toFixed(0)}%
          </p>
          {isSuspicious && <div className="alert-box">⚠️ Warning: Suspicious Growth!</div>}
        </div>

        {/* Voter Security Section */}
        <div className="security-section" style={{marginTop: '15px', borderTop: '1px solid #eee', paddingTop: '10px'}}>
          <p style={{marginBottom: '5px'}}>📊 Voter Growth: <strong>{neta.voterGrowth}%</strong></p>
          {neta.voterGrowth > 20 ? (
            <div style={{background: '#ff4757', color: 'white', padding: '8px', borderRadius: '5px', fontSize: '0.85rem'}}>
              🚨 <strong>HIGH ALERT:</strong> Suspicious Voter Spike!
            </div>
          ) : (
            <div style={{color: 'green', fontSize: '0.85rem'}}>✅ Normal Demographics</div>
          )}
        </div>

        {/* Report Button */}
        <button className="report-btn" onClick={handleReport}>📢 Report Corruption</button>
      </div>
    </div>
  );
}

export default NetaCard;
