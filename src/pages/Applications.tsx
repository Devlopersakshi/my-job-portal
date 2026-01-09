import { useEffect, useState } from 'react';

const Applications = () => {
  const [myApps, setMyApps] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('applications') || '[]');
    setMyApps(data);
  }, []);

  const clearHistory = () => {
    localStorage.removeItem('applications');
    setMyApps([]);
  };

  return (
    <div style={{ padding: '40px', maxWidth: '900px', margin: 'auto' }}>
      <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <h2>My Applications ({myApps.length})</h2>
        {myApps.length > 0 && <button onClick={clearHistory} style={{background:'#ff4d4d', color:'#fff', padding:'8px 15px', borderRadius:'5px', border:'none', cursor:'pointer'}}>Clear History</button>}
      </div>
      
      {myApps.length === 0 ? (
        <div style={{textAlign:'center', marginTop:'50px'}}>
           <p>No applications found yet. Start applying!</p>
        </div>
      ) : (
        myApps.map((app: any, index: number) => (
          <div key={index} style={{ background: '#fff', padding: '20px', marginBottom: '15px', borderRadius: '10px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)', border: '1px solid #eef' }}>
            <h3 style={{margin:'0 0 10px 0', color:'#2741d8'}}>{app.jobTitle}</h3>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', fontSize:'14px'}}>
              <p><strong>Company:</strong> {app.company}</p>
              <p><strong>Date:</strong> {app.date}</p>
              <p><strong>Email:</strong> {app.email}</p>
              <p><strong>Phone:</strong> {app.phone}</p>
            </div>
            {app.resume && <a href={app.resume} target="_blank" style={{color:'#2741d8', fontSize:'14px', display:'block', marginTop:'10px'}}>View Submitted Resume →</a>}
          </div>
        ))
      )}
    </div>
  );
};

export default Applications;