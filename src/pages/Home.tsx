import { useState } from 'react';
import jobsData from '../jobs.json';
import JobCard from '../components/JobCard';

// TypeScript ko batane ke liye ki job kaisa dikhta hai
interface Job {
  id: number;
  title: string;
  company: string;
  location: string;
  category: string;
  type?: string;
  duration?: string;
}

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');

  // Filtering Logic
  const filteredJobs = (jobsData as Job[]).filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          job.company.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = category === 'All' || job.category === category;
    const matchesLocation = location === 'All' || job.location === location;
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <div style={{ padding: '20px' }}>
      {/* --- Filter Section --- */}
      <div style={{ marginBottom: '30px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        <input 
          type="text" 
          placeholder="Search jobs or companies..." 
          style={{ padding: '10px', width: '300px', borderRadius: '5px', border: '1px solid #ccc' }}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        
        <select style={{ padding: '10px', borderRadius: '5px' }} onChange={(e) => setCategory(e.target.value)}>
          <option value="All">All Categories</option>
          <option value="Job">Jobs</option>
          <option value="Internship">Internships</option>
        </select>

        <select style={{ padding: '10px', borderRadius: '5px' }} onChange={(e) => setLocation(e.target.value)}>
          <option value="All">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="Bangalore">Bangalore</option>
          <option value="Hyderabad">Hyderabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Noida">Noida</option>
          <option value="Gurugram">Gurugram</option>
        </select>
      </div>

      {/* --- Jobs Grid --- */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '20px' }}>
        {filteredJobs.map(job => (
          <JobCard key={job.id} job={job} />
        ))}
      </div>

      {filteredJobs.length === 0 && (
        <p style={{ textAlign: 'center', marginTop: '50px', color: '#666' }}>
          No jobs or internships found matching your search.
        </p>
      )}
    </div>
  );
};

export default Home;