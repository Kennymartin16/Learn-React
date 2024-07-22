import { Link } from "react-router-dom";

//I deleted handleDelete as a prop
const BlogList = ({blogs, title}) => {


  
  return (
    <div className="bloglist">
      {blogs.map((blog) => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h2>{blog.title}</h2>
            <p>Written by: {blog.author}</p>
          </Link>
          
         {/* <button onClick={() => handleDelete(blog.id)}>Delete Blog</button> */}

        </div>
      ))}
      <h2> {title}</h2>
    </div>
  );
};

export default BlogList;
