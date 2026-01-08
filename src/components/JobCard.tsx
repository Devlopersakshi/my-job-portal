import { Link } from 'react-router-dom';

type JobProps = {
  id: number;     
  title: string;
  company: string;
  location: string;
};

function JobCard({ id, title, company, location }: JobProps) {
  return (
    <div className="job-card">
      <h3>{title}</h3>
      <p>{company}</p>
      <p>{location}</p>
      
      <Link to={`/job/${id}`} className="apply-button" style={{
        display: 'inline-block',
        textDecoration: 'none',
        backgroundColor: '#2563eb',
        color: 'white',
        padding: '8px 15px',
        borderRadius: '5px'
      }}>
        View Details
      </Link>
    </div>
  );
}

export default JobCard;