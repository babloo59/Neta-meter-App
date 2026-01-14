import React from 'react';

function ComplaintFeed({ complaints }) {
  return (
    <div className="complaint-feed">
      <h2 style={{borderBottom: '2px solid #ff4757', paddingBottom: '10px'}}>
          📢 Janta ki Awaaz (Recent Reports)
      </h2>
      
      {complaints.length === 0 ? (
          <p>Abhi tak sab shanti hai...</p>
      ) : (
          <div className="complaint-list">
              {complaints.slice().reverse().map((c) => (
                  <div key={c.id} className="complaint-item">
                      <span style={{fontWeight: 'bold', color: '#ff4757'}}>@{c.netaName}:</span> 
                      <span style={{marginLeft: '10px'}}>{c.description}</span>
                  </div>
              ))}
          </div>
      )}
    </div>
  );
}

export default ComplaintFeed;
