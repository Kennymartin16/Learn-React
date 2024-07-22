import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Navbar = () => { 
  const navigate = useNavigate();

  const handleHome = () => {
    navigate('/')
  }


  return (
    <nav className="navbar">
      <h1 onClick={handleHome}>Martey&#39;s Blog</h1> 
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/create" style={{
          backgroundColor: "#96651c",
          borderRadius: "8px",
        }}>New Blog</Link>
      </div>
    </nav>
  );
}

export default Navbar;