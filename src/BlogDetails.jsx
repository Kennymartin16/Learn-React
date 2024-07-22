import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import { useNavigate } from 'react-router-dom';

const BlogDetails = () => {
  const { id } = useParams();
  const { data: blog, isPending, error } = useFetch('http://localhost:8800/blogs/' + id);
  const navigate = useNavigate();

  const handleDelete = (e) =>{
    e.preventDefault();

    fetch('http://localhost:8800/blogs/' + blog.id, {
      method: 'DELETE'
    }).then(() =>{
      navigate('/#');
    })
  }

  return(
    <div className="blog-details">
      { isPending && <div>Loading...</div>}
      { error && <div>{ error }</div> }
      { blog && (
        <article>
          <h2> {blog.title}</h2>
          <p>Written by <span>{ blog.author }</span></p>
          <div>{ blog.body }</div>

          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;