import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Applications = () => {
  const [myApps, setMyApps] = useState([]);

  
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("myApps") || "[]");
    setMyApps(data);
  }, []);

  
  const clearHistory = () => {
    if (window.confirm("Kya aap saari applications delete karna chahte hain?")) {
      localStorage.removeItem("myApps");
      setMyApps([]);
    }
  };

  return (
    <div style={{ padding: '40px', backgroundColor: '#f8fafc', minHeight: '100vh', fontFamily: 'Arial' }}>
      <div style={{ maxWidth: '850px', margin: 'auto' }}>
        
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '30px' }}>
          <h2 style={{ margin: 0, color: '#1e293b' }}>My Applications ({myApps.length})</h2>
          {myApps.length > 0 && (
            <button onClick={clearHistory} style={clearBtnStyle}>
              Clear History
            </button>
          )}
        </div>

       
        {myApps.length === 0 ? (
          <div style={emptyStateStyle}>
            <h3>No Applications Found</h3>
            <p>Aapne abhi tak kisi bhi job ke liye apply nahi kiya hai.</p>
            <Link to="/" style={browseLinkStyle}>Browse All Jobs</Link>
          </div>
        ) : (
          
          myApps.map((app, index) => (
            <div key={index} style={appCardStyle}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <h3 style={{ margin: '0 0 5px 0', color: '#2563eb' }}>{app.jobTitle}</h3>
                  <p style={{ margin: 0, fontWeight: 'bold', color: '#475569' }}>{app.company}</p>
                </div>
                <span style={statusBadgeStyle}>Applied</span>
              </div>
              
              <div style={detailsGridStyle}>
                <p style={detailTextStyle}><b>Applicant:</b> {app.userName}</p>
                <p style={detailTextStyle}><b>Email:</b> {app.userEmail}</p>
                <p style={detailTextStyle}><b>Date:</b> {app.date}</p>
              </div>
            </div>
          ))
        )}

        <div style={{ textAlign: 'center', marginTop: '30px' }}>
          <Link to="/" style={{ color: '#64748b', textDecoration: 'none' }}>← Back to Job Portal</Link>
        </div>
      </div>
    </div>
  );
};


const appCardStyle = {
  backgroundColor: '#fff',
  padding: '25px',
  borderRadius: '12px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
  marginBottom: '20px',
  border: '1px solid #e2e8f0'
};

const statusBadgeStyle = {
  backgroundColor: '#dcfce7',
  color: '#166534',
  padding: '6px 14px',
  borderRadius: '50px',
  fontSize: '12px',
  fontWeight: 'bold',
  textTransform: 'uppercase' as 'uppercase'
};

const detailsGridStyle = {
  marginTop: '20px',
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
  gap: '10px',
  borderTop: '1px solid #f1f5f9',
  paddingTop: '15px'
};

const detailTextStyle = { margin: 0, fontSize: '14px', color: '#64748b' };

const clearBtnStyle = {
  backgroundColor: 'transparent',
  color: '#ef4444',
  border: '1px solid #ef4444',
  padding: '8px 16px',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '14px'
};

const emptyStateStyle = {
  textAlign: 'center' as 'center',
  padding: '60px',
  backgroundColor: '#fff',
  borderRadius: '15px',
  border: '2px dashed #e2e8f0'
};

const browseLinkStyle = {
  display: 'inline-block',
  marginTop: '15px',
  padding: '10px 20px',
  backgroundColor: '#2563eb',
  color: '#fff',
  textDecoration: 'none',
  borderRadius: '8px'
};

export default Applications;