import { useState } from 'react';
import jobsData from '../jobs.json';
import JobCard from '../components/JobCard';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');

  const filteredJobs = jobsData.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || job.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="home-container">
      <div className="filter-container">
        <input 
          type="text" 
          placeholder="Search jobs, skills, or location..." 
          style={{ width: '350px' }}
          onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <select onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Types</option>
          <option value="Job">Jobs</option>
          <option value="Internship">Internships</option>
        </select>
      </div>

      <div className="job-grid">
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default Home;