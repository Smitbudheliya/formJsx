import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthProvider } from "./assets/context/AuthContext.jsx"
import Navbar from "./assets/component/Navbar.jsx"
import Home from "./assets/pages/Home.jsx"  
import Login from "./assets/component/Login.jsx"
import Signup from "./assets/component/Signup.jsx"
import CreatePost from "./assets/Pages/CreatePost.jsx"
import PostDetails from "./assets/Pages/PostDetails.jsx"
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (

    <BrowserRouter>
      <AuthProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/create" element={<CreatePost />} />
          <Route path="/post/:id" element={<PostDetails />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>


  )
}

export default App
