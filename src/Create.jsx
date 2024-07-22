import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('martey');
  const [isPending, setIsPending] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const blog = { title, body, author};

    setIsPending(true);
    
    fetch('http://localhost:8800/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() =>{
      console.log('New Blog added');
      setIsPending(false);
      navigate('/');
    });
    // console.log(blog);

  }

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  // }

  return (
    <div className="create">
      <h2>Add a new Blog😎 </h2>
      <form onSubmit={handleSubmit}>
        <label>Blog Title:</label>
        <input 
          type="text" 
          required
          value ={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Blog Body:</label>
        <textarea 
          required
          value={body}
          onChange={(e) =>setBody(e.target.value)}
        ></textarea>
        <label>Blog Author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        >
          <option value="martey">Martey</option>
          <option value="kenny">Kenny</option>
        </select>
        { !isPending && <button>Add Blog</button>}
        { isPending && <button disabled>Adding blog...</button>}
        <h1>{ title }</h1>
        <p>{ body }</p>
        <p>{ author }</p>

      </form>
    </div>
  )
}

export default Create;