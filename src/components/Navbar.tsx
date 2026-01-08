import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav style={{ padding: '20px', display: 'flex', justifyContent: 'space-between', background: '#fff', borderBottom: '1px solid #ddd' }}>
      <h2 style={{ margin: 0, color: '#2563eb' }}>JobPortal</h2>
      <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>Home</Link>
        <Link to="/applications" style={{ textDecoration: 'none', color: '#333', fontWeight: 'bold' }}>My Applications</Link>
      </div>
    </nav>
  );
};

export default Navbar;
