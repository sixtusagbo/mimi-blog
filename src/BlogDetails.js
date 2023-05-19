import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useFetch(`http://localhost:8001/posts/${id}`);
  const history = useHistory();

  const handleDelete = () => {
    fetch(`http://localhost:8001/posts/${post.id}`, {
      method: 'DELETE'
    }).then(() => history.push('/'));
  }

  return (
    <div className="post_details">
      {isLoading && <div>Loading post detail...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
          <div>{post.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;