import { useState } from "react";

const Home = () => {
  const [posts, setPosts] = useState([
    { title: "This is post one", body: "lorem ipsum ...", author: "Sixtus", id: 1 },
    { title: "This is post two", body: "lorem ipsum ...", author: "Miralo", id: 2 },
    { title: "This is post three", body: "lorem ipsum ...", author: "Miracle", id: 3 },
  ]);

  return (
    <div className="home">
      {posts.map((post) => (
        <div className="post_preview" key={post.id}>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;