import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import jobs from '../jobs.json';

const JobDetails = () => {
  const { id } = useParams();
  const [formData, setFormData] = useState({ userName: "", userEmail: "", userSkills: "" });

  const job = jobs.find(j => j.id === Number(id));

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.userName || !formData.userEmail) return alert("Fill details!");

    const newApp = { jobTitle: job?.title, company: job?.company, ...formData, date: new Date().toLocaleDateString() };
    const existing = JSON.parse(localStorage.getItem("myApps") || "[]");
    localStorage.setItem("myApps", JSON.stringify([...existing, newApp]));

    alert("Applied successfully!");
    setFormData({ userName: "", userEmail: "", userSkills: "" });
  };

  if (!job) return <h2>Not found</h2>;

  return (
    <div style={{ padding: '40px', textAlign: 'center' }}>
      <h1>{job.title}</h1>
      <div style={{ border: '1px solid #ddd', padding: '20px', maxWidth: '500px', margin: 'auto', borderRadius: '10px' }}>
        <p>{job.desc}</p>
        <form onSubmit={handleSubmit} style={{ textAlign: 'left', marginTop: '20px' }}>
          <input name="userName" placeholder="Name" value={formData.userName} onChange={handleChange} style={inputStyle} />
          <input name="userEmail" placeholder="Email" value={formData.userEmail} onChange={handleChange} style={inputStyle} />
          <button type="submit" style={btnStyle}>Submit Application</button>
        </form>
      </div>
    </div>
  );
};

const inputStyle = { width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '5px', border: '1px solid #ccc' };
const btnStyle = { width: '100%', padding: '10px', backgroundColor: '#2563eb', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' };

export default JobDetails;