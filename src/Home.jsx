import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {

  //1. const handleClick = (name, e) => {
    //   console.log("Hello" +' '+ name, e.target)
    // }
    // let name = 'Kenny';


    // 2. const [name, setName] = useState('Kenny');
    // const [age, setAge] = useState('25');
    
    // const handleClick = () => {
    //   setName('Martey');
    //   setAge(30);
    // }

    
    // const handleDelete = (id) => {
    //   const newBlogs = blogs.filter(blog => blog.id !== id);
    //   setBlogs(newBlogs);
    // }

    const { data: blogs, isPending, error } = useFetch('http://localhost:8800/blogs');
    

  return (
    <div className="home">
      { /* 1. <button onClick={(e) => handleClick("Kenny", e)}>Click Me</button> */}
      {/* 2. <h2 style={{color: 'white'}}>Homepage</h2>
      <p>{ name } is { age } years old</p> */}
      {/* 2. <button onClick={handleClick}>Click me</button> */}

        { error && <div>{ error }</div>}
        { isPending && <div>Loading...</div>}
        
        {/* I deleted the prop handleDelete={handleDelete} in the BlogList component */}
        {/* <h4>All Blogs</h4> */}
        {blogs && <BlogList blogs={blogs} title="All Blogs!" />}
        {/* <h1>KENNY BLOGS</h1>
        <BlogList blogs={blogs.filter((blog) => blog.author === "Kenny" )} handleDelete={handleDelete} /> */}


    </div>
  );
}

export default Home; 