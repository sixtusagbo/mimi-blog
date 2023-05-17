import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:8001/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setIsLoading(false);
      })
  }, []);

  return (
    <div className="home">
      {isLoading && <div>Loading...</div>}
      {posts && <BlogList posts={posts} title="All Posts" />}
    </div>
  );
}

export default Home;