import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Article from "./Components/Article";
import { BlogProvider } from "./Components/BlogContext";
import CategoryPage from "./Components/CategoryPage";
import Header from "./Components/Header";
import Home from "./Components/Home";
import PageNotFound from "./Components/PageNotFound";


function App() {
  return (
    <BlogProvider>
            <Router>
                <Header/>

                <Routes>
                    <Route path="/" element={   <Navigate   to={"/home"}/>}/>
                    <Route path="/home" element={ <Home/> }/>
                    <Route path="/article/:articleTitle/:articleCategory" element={  <Article/>  }/>
                    <Route path="/categoryPage/:categoryName" element={ <CategoryPage/> }/>
                    <Route path='/*' element={  <PageNotFound/>  }/>
                </Routes>
            </Router>
    </BlogProvider>
  );
}

export default App;


// Command to install react-router-dom:
// npm i react-router-dom

// Total Amount Of Time Taken to Complete This Project = Approx. 33 Hrs & 46 Mins
