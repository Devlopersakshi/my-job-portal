import { Link } from 'react-router-dom';

const JobCard = ({ job }: { job: any }) => {
  return (
    <div className="job-card">
      <div>
        <h3 style={{ margin: '0 0 5px 0', color: '#1a1e3d' }}>{job.title}</h3>
        <p style={{ margin: '0 0 15px 0', color: '#666', fontWeight: 500 }}>{job.company}</p>
        <div style={{ fontSize: '14px', color: '#888' }}>
           📍 {job.location} | 💼 {job.category}
        </div>
      </div>
      <Link to={`/job/${job.id}`} className="view-btn">
        View Details
      </Link>
    </div>
  );
};

export default JobCard;