import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mimi Blog</h1>
      <div className="links">
        <Link to="/" style={{
          color: "#fff",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}>Home</Link>
        <Link to="/create">New Post</Link>
      </div>
    </nav>
  );
}

export default Navbar;