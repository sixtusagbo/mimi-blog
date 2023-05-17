import { useState } from "react";

const Home = () => {
  let [name, setName] = useState("Miralo");
  let [age, setAge] = useState(19);

  const handleNameChange = () => {
    setName("Sixtus");
  };

  const incrementAge = () => setAge(age += 1);

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>My name is {name}.</p>
      <p>I am {age} years old.</p>
      <button onClick={handleNameChange}>Change my name</button>
      <button onClick={incrementAge}>Increase age</button>
    </div>
  );
}

export default Home;