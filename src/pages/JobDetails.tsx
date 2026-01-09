import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from '../jobs.json';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find(j => j.id === Number(id));

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', exp: '', resume: '', cover: '' });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const existing = JSON.parse(localStorage.getItem('applications') || '[]');
    const newApp = { ...formData, jobTitle: job?.title, company: job?.company, date: new Date().toLocaleDateString() };
    localStorage.setItem('applications', JSON.stringify([...existing, newApp]));
    alert('Application Submitted Successfully!');
    navigate('/applications');
  };

  if (!job) return <p>Job not found</p>;

  return (
    <div style={{ padding: '40px', maxWidth: '500px', margin: 'auto', background: '#fff', marginTop: '30px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <h2 style={{color: '#2741d8'}}>{job.title}</h2>
      <p><strong>{job.company}</strong> | {job.location}</p>
      <hr />
      <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <input type="text" placeholder="Full Name" required onChange={e => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email Address" required onChange={e => setFormData({...formData, email: e.target.value})} />
        <input type="tel" placeholder="Phone Number" required onChange={e => setFormData({...formData, phone: e.target.value})} />
        <input type="url" placeholder="Resume Link (Google Drive)" required onChange={e => setFormData({...formData, resume: e.target.value})} />
        <textarea placeholder="Tell us why you're a good fit..." rows={4} onChange={e => setFormData({...formData, cover: e.target.value})}></textarea>
        <button type="submit" className="apply-btn">Submit Application</button>
      </form>
    </div>
  );
};

export default JobDetails;