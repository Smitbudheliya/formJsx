import AddProject from "./assets/project-list/AddProject"
import EditProject from "./assets/project-list/EditProject"
import ProjectList from "./assets/project-list/ProjectList"
//bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {


  return (
    <>
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

    </>
  )
}

export default App
