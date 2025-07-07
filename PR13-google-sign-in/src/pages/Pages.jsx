// import pages css
import './pages.css';
import { auth, GoogleAuthProvider } from '../../fireBase'




const Pages = () => {

    const handlelogin = async () => {
        try {
            let user = await singwithPopup(auth, GoogleAuthProvider)
                console.log(user);
                
        }
        catch (err) {
            console.log(err);
            return false;

        }

    }

    return (
        <div>
            <header style={{ width: "1351px" }} className="navbar sticky-top bg-dark text-white py-2">
                <div className="container d-flex justify-content-between align-items-center">
                    <nav>
                        <ul className="nav">
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#"><i className="fa fa-file-code-o" /></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </nav>
                    <button onClick={() => handlelogin()} className="btn btn-outline-light">Google</button>
                </div>
            </header>

            <div className="container my-4">
                <div className="row">
                    {/* Sidebar */}
                    <aside className="col-md-3 mb-4">
                        <h5>Recent Posts</h5>
                        <ul className="list-group">
                            <li className="list-group-item"><a href="#">Post One</a></li>
                            <li className="list-group-item"><a href="#">Post Two</a></li>
                            <li className="list-group-item"><a href="#">Post Three</a></li>
                            <li className="list-group-item"><a href="#">Post Four</a></li>
                            <li className="list-group-item"><a href="#">Post Five</a></li>
                        </ul>
                    </aside>

                    {/* Main Content */}
                    <section className="col-md-9">
                        <img
                            src="https://abbeyjfitzgerald.com/wp-content/uploads/2017/12/sticky-notes.jpg"
                            alt="Sticky Notes"
                            className="img-fluid mb-3"
                            title="Sticky Notes"
                        />
                        <h2>Sticky Positioning</h2>
                        <p>
                            Sticky positioning is a combo of relative and fixed positioning...
                        </p>
                        <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry...
                        </p>
                        <p>
                            Why do we use it? It is a long established fact that a reader will be distracted...
                        </p>
                        <p>You'll see that the header stays in place when you scroll down.</p>
                    </section>
                </div>
            </div>

            {/* Footer */}
            <footer className="bg-light text-center py-4 mt-auto">
                <h5>Sticky Positioning Example</h5>
                <p>Hope you enjoyed learning about how to make a sticky header!</p>
            </footer>
        </div>
    )
}

export default Pages
