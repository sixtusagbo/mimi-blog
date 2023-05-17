const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Mimi Blog</h1>
      <div className="links">
        <a href="/" style={{
          color: "#fff",
          backgroundColor: "#f1356d",
          borderRadius: "8px",
          paddingLeft: "12px",
          paddingRight: "12px",
        }}>Home</a>
        <a href="/create">New Post</a>
      </div>
    </nav>
  );
}

export default Navbar;