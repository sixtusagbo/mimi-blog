import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8001/posts")
      .then(res => {
        if (!res.ok) {
          throw Error("Could not fetch posts");
        }
        return res.json();
      })
      .then(data => {
        setPosts(data);
        setIsLoading(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsLoading(false);
      })
  }, []);

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {posts && <BlogList posts={posts} title="All Posts" />}
    </div>
  );
}

export default Home;