import { Link } from 'react-router-dom';

const BlogList = ({ posts, title }) => {

  return (
    <div className="blog_list">
      <h2>{title}</h2>

      {posts.map((post) => (
        <div className="post_preview" key={post.id}>
          <Link to={`/posts/${post.id}`}>
            <h2>{post.title}</h2>
            <p>Written by {post.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;