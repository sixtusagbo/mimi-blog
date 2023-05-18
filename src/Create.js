import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Sixtus");
  const [isLoading, setIsLoading] = useState(false);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    const post = { title, body, author };

    setIsLoading(true);

    setTimeout(() => {
      fetch('http://localhost:8001/posts', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
      }).then(() => {
        console.log("New post added successfully!");
        setIsLoading(false);
        history.push('/');
      });
    }, 800);
  }

  return (
    <div className="create">
      <h2>Add a new Post</h2>
      <form onSubmit={handleSubmit}>
        <label>Post Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Post Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        <label>Post Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Sixtus">Sixtus</option>
          <option value="Miracle">Miracle</option>
        </select>
        {!isLoading && <button>Create Post</button>}
        {isLoading && <button disabled>Adding new post...</button>}
      </form>
    </div>
  );
}

export default Create;