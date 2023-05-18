import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import useFetch from "./useFetch";

const BlogDetails = () => {
  const { id } = useParams();
  const { data: post, error, isLoading } = useFetch(`http://localhost:8001/posts/${id}`);

  return (
    <div className="post_details">
      {isLoading && <div>Loading post detail...</div>}
      {error && <div>{error}</div>}
      {post && (
        <article>
          <h2>{post.title}</h2>
          <p>Written by {post.author}</p>
          <div>{post.body}</div>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;