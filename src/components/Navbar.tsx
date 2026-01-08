import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '15px 40px', display: 'flex', justifyContent: 'space-between', backgroundColor: '#fff', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ fontSize: '24px', fontWeight: 'bold', textDecoration: 'none', color: '#2563eb' }}>JobPortal</Link>
      <div>
        <Link to="/" style={{ marginRight: '20px', textDecoration: 'none', color: '#333' }}>Home</Link>
        <Link to="/applications" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>My Applications</Link>
      </div>
    </nav>
  );
};

export default Navbar;