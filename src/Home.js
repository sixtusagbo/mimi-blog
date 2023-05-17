import { useEffect, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [posts, setPosts] = useState([
    { title: "This is post one", body: "lorem ipsum ...", author: "Sixtus", id: 1 },
    { title: "This is post two", body: "lorem ipsum ...", author: "Miracle", id: 2 },
    { title: "This is post three", body: "lorem ipsum ...", author: "Sixtus", id: 3 },
  ]);

  const handleDelete = (id) => {
    const newPosts = posts.filter((p) => p.id !== id);
    setPosts(newPosts);
  }

  useEffect(() => {
    console.log("use effect fired");
    console.log(posts);
  });

  return (
    <div className="home">
      <BlogList posts={posts} title="All Posts" handleDelete={handleDelete} />
    </div>
  );
}

export default Home;