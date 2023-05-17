import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
      })
  }, []);

  return (
    <div className="home">
      {posts && <BlogList posts={posts} title="All Posts" />}
    </div>
  );
}

export default Home;