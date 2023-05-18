import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Sixtus");

  return (
    <div className="create">
      <h2>Add a new Post</h2>
      <form>
        <label>Post Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        <label>Post Body:</label>
        <textarea value={body} onChange={(e) => setBody(e.target.value)} required></textarea>
        <label>Post Author:</label>
        <select value={author} onChange={(e) => setAuthor(e.target.value)}>
          <option value="Sixtus">Sixtus</option>
          <option value="Miracle">Miracle</option>
        </select>
        <button>Create Post</button>
        <p>{title}</p>
        <p>{body}</p>
        <p>{author}</p>
      </form>
    </div>
  );
}

export default Create;