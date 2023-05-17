import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
  const { data: posts, isLoading, error } = useFetch("http://localhost:8001/posts");

  return (
    <div className="home">
      {error && <div>{error}</div>}
      {isLoading && <div>Loading...</div>}
      {posts && <BlogList posts={posts} title="All Posts" />}
    </div>
  );
}

export default Home;