import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jobsData from '../jobs.json';

const JobDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const job = jobsData.find(j => j.id === Number(id));

  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', exp: '', resume: '', cover: ''
  });

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const applications = JSON.parse(localStorage.getItem('applications') || '[]');
    const newApp = { ...formData, jobTitle: job?.title, company: job?.company, date: new Date().toLocaleDateString() };
    localStorage.setItem('applications', JSON.stringify([...applications, newApp]));
    alert('Application Submitted Successfully!');
    navigate('/applications');
  };

  if (!job) return <p>Job not found</p>;

  return (
    <div style={{ padding: '40px', maxWidth: '600px', margin: 'auto' }}>
      <h1>{job.title} at {job.company}</h1>
      <p><strong>Location:</strong> {job.location} | <strong>Type:</strong> {job.category}</p>
      
      <form onSubmit={handleApply} style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginTop: '20px' }}>
        <input type="text" placeholder="Full Name" required style={{padding: '10px'}} onChange={e => setFormData({...formData, name: e.target.value})} />
        <input type="email" placeholder="Email" required style={{padding: '10px'}} onChange={e => setFormData({...formData, email: e.target.value})} />
        <input type="tel" placeholder="Phone Number" required style={{padding: '10px'}} onChange={e => setFormData({...formData, phone: e.target.value})} />
        <select required style={{padding: '10px'}} onChange={e => setFormData({...formData, exp: e.target.value})}>
          <option value="">Experience Level</option>
          <option value="Fresher">Fresher</option>
          <option value="1-2 Years">1-2 Years</option>
          <option value="3+ Years">3+ Years</option>
        </select>
        <input type="url" placeholder="Resume Link (GDrive/GitHub)" required style={{padding: '10px'}} onChange={e => setFormData({...formData, resume: e.target.value})} />
        <textarea placeholder="Cover Letter" rows={4} style={{padding: '10px'}} onChange={e => setFormData({...formData, cover: e.target.value})}></textarea>
        <button type="submit" style={{ padding: '12px', background: '#2563eb', color: '#fff', border: 'none', cursor: 'pointer', borderRadius: '5px' }}>
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default JobDetails;