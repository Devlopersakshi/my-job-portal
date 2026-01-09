import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <h2 style={{ color: '#2741d8', margin: 0 }}>JobPortal</h2>
      <div style={{ display: 'flex', gap: '20px' }}>
        <Link to="/" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}>Home</Link>
        <Link to="/applications" style={{ textDecoration: 'none', color: '#333', fontWeight: 600 }}>My Applications</Link>
      </div>
    </nav>
  );
};
export default Navbar;