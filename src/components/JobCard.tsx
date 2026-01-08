interface JobProps {
  job: {
    id: number;
    title: string;
    company: string;
    location: string;
    category: string;
    type?: string;
    duration?: string;
  };
}

import { Link } from 'react-router-dom';

const JobCard = ({ job }: JobProps) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', backgroundColor: '#fff' }}>
      <h3>{job.title}</h3>
      <p style={{ color: '#666', margin: '5px 0' }}>{job.company} • {job.location}</p>
      <span style={{ fontSize: '12px', background: '#e2e8f0', padding: '4px 8px', borderRadius: '4px' }}>
        {job.category}
      </span>
      <div style={{ marginTop: '15px' }}>
        <Link to={`/job/${job.id}`} style={{ background: '#2563eb', color: '#fff', padding: '8px 12px', borderRadius: '5px', textDecoration: 'none' }}>
          View Details
        </Link>
      </div>
    </div>
  );
};

export default JobCard;