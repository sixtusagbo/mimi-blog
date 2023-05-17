const Home = () => {
  const handleClick = (e) => {
    console.log("Clicked", e);
  }

  const handleClickAgain = (noun, e) => {
    console.log(`Hello ${noun}!`, e.target);
  }

  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click me</button><br />
      <button onClick={(e) => handleClickAgain("World", e)}>Click me again o</button>
    </div>
  );
}

export default Home;