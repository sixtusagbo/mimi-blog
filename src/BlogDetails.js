import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog_details">
      <h2>Post {id} Details</h2>
    </div>
  );
}

export default BlogDetails;