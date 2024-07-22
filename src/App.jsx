// import { useState } from "react";
// import { Text, Button, Container } from "@chakra-ui/react";
import "./App.css";
import Navbar from './Navbar';
import Home from './Home';
import Create from "./Create";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogDetails from "./BlogDetails";
import Error from "./ErrorBoundary";


// import SearchBar from "./components/Searchbar";



// function App() {
//     const [count, setCount] = useState(0);

//     console.log(count)

//     return (
//         <Container className="App">
//             <Text fontSize="4xl" fontWeight="bold" fontStyle="italic" >Count: {count}</Text>
//             <Button  colorScheme='teal'  size='lg' onClick={() => setCount(count + 1)}>Increment</Button>
//         </Container>
//     )
// }


function App(){
    // const link = "http://www.google.com";

        return(
            <Router>
                <div className="App">
                    <Navbar />
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/create" element={<Create />} />
                            <Route path="/blogs/:id" element={<BlogDetails />} />
                            <Route path="*" element={<Error />} />
                        </Routes>
                    </div>
                </div>
            </Router>
        )
}

export default App