import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState([
    { title: "This is post one", body: "lorem ipsum ...", author: "Sixtus", id: 1 },
    { title: "This is post two", body: "lorem ipsum ...", author: "Miralo", id: 2 },
    { title: "This is post three", body: "lorem ipsum ...", author: "Miracle", id: 3 },
  ]);

  return (
    <div className="home">
      <BlogList posts={posts} title="All Posts" />
    </div>
  );
}

export default Home;