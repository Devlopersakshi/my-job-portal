import { useState } from 'react';
import JobCard from '../components/JobCard';
import jobs from '../jobs.json'; 

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="search-section" style={{ textAlign: 'center', padding: '20px' }}>
        <input
          type="text"
          placeholder="Search jobs..."
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
        />
      </div>

      <div className="jobs-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {filteredJobs.map(job => (
          <JobCard 
            key={job.id}
            id={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;