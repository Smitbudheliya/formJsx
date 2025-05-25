// import bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// import bootstrap js
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import bootstrap icons
import 'bootstrap-icons/font/bootstrap-icons.css';
// import custom css
import './Header.css';


const Header = () => {
  return (
    <div>
      <header className="border-bottom shadow-sm">
        {/* Top Row */}
        <div className="container py-4 d-flex justify-content-between align-items-center">
          {/* Logo */}
          <div className="d-flex align-items-center">
            <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="Logo" width={115} height={35} className="me-2" />

          </div>
          {/* Search Bar */}
          <form className="d-flex w-50">
            <input className="form-control me-1 p-2" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }} type="search" placeholder="Search For items..." aria-label="Search" />
            <select className="form-select me-1" style={{ maxWidth: 150, borderRadius: 0 }} >
              <option selected >All Categories</option>
            </select>
            <button className="allbutton" type="submit">🔍</button>
          </form>
          {/* Icons */}
          <div className="d-flex align-items-center gap-3">
            <a href="#" className="fs-5 fw-bold text-decoration-none p-2 text-dark d-flex align-items-center gap-1">
              <i class="bi bi-person-circle"></i> Account
            </a>
            <a href="#" className="fs-5  fw-semibold text-decoration-none p-2 text-dark d-flex align-items-center gap-1">
              <i class="bi bi-suit-heart "></i> Wishlist
            </a>
            <a href="#" className="fs-5 fw-semibold text-decoration-none p-2 text-dark d-flex align-items-center gap-1">
              <i class="bi bi-cart2"></i>Cart
            </a>
          </div>
        </div>
        {/* Nav Row */}
        <nav className="navbar navbar-expand-lg bg-white border-top">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="mainNavbar">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 gap-3">
                <li className="nav-item"><a className="nav-link active" href="#">Home</a></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Category</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Vegetables</a></li>
                    <li><a className="dropdown-item" href="#">Fruits</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Products</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">New Arrivals</a></li>
                    <li><a className="dropdown-item" href="#">Popular</a></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Pages</a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">About</a></li>
                    <li><a className="dropdown-item" href="#">Contact</a></li>
                  </ul>
                </li>
                <li className="nav-item"><a className="nav-link" href="#">Blog</a></li>
                <li className="nav-item"><a className="nav-link" href="#">Elements</a></li>
              </ul>
              <div className="text-primary d-flex align-items-center gap-1">
                <i className="bi bi-telephone" /> +123 ( 456 ) ( 7890 )
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section className="banner">
        
        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={0} className="active bg-dark" aria-current="true" aria-label="Slide 1" />
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to={1} className="bg-dark" aria-label="Slide 2" />
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <div className="row align-items-center banner-img ">
                <div style={{ paddingLeft: 100 }} className="contaier py-4 d-flex  justify-content-between align-items-center">
                  <div className="col-md-6 text-center text-md-start">
                    <p className="fw-bold text-dark mb-1">
                      <span className="text-success">100%</span> Organic Vegetables
                    </p>
                    <h1 className="mb-4">The best way to <br /> stuff your wallet.</h1>
                    <p className="subheading mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                    </p>
                    <a href="#" className="btn cta-btn px-4 py-2">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel-item">
              <div className="row align-items-center banner-img ">
                <div style={{ paddingLeft: 100 }} className="contaier py-4 d-flex  justify-content-between align-items-center">
                  <div className="col-md-6 text-center text-md-start">
                    <p className="fw-bold text-dark mb-1">
                      <span className="text-success">100%</span> Organic Vegetables
                    </p>
                    <h1 className="mb-4">The best way to <br /> stuff your wallet.</h1>
                    <p className="subheading mb-4">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet reiciendis beatae consequuntur.
                    </p>
                    <a href="#" className="btn cta-btn px-4 py-2">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      

      <footer className="bg-light py-5">
        <div className="container">
          <div className="row gy-4" style={{ fontSize: 14 }}>
            {/* About */}
            <div className="col-md-4" >
              <img src="https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/logo/logo.png" alt="logo" />
              <p className="text-muted mt-3" >
                Carrot is the biggest market of grocery products. Get your daily needs from our store.
              </p>
              <p className="text-muted mt-3"><i className="bi bi-geo-alt me-2" /> 51 Green St. Huntington ohaio beach, NY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;11746 KY 4783, USA.</p>
              <p className="text-muted mt-3"><i className="bi bi-envelope me-2" /> example@email.com</p>
              <p className="text-muted mt-3"><i className="bi bi-telephone me-2" /> +91 123 4567890</p>
            </div>
            {/* Company Links */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Company</h6>
              <ul className="list-unstyled text-muted">
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">About Us</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Delivery Information</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Privacy Policy</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Terms &amp; Conditions</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Contact Us</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Support Center</a></li>
              </ul>
            </div>
            {/* Category Links */}
            <div className="col-md-2">
              <h6 className="fw-bold mb-3">Category</h6>
              <ul className="list-unstyled text-muted">
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Fruits &amp; Vegetable</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Snack &amp; Spice</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Dairy &amp; Bakery</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Juice &amp; Drinks</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Chicken &amp; Meat</a></li>
                <li className='my-3'><a href="#" className="text-decoration-none text-muted ">Fast Food</a></li>

              </ul>
            </div>
            {/* Newsletter */}
            <div className="col-md-4">
              <h6 className="fw-bold mb-3">Subscribe Our Newsletter</h6>
              <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Search here..." />
                <button className="btn btn-outline-secondary" type="button">
                  <i className="bi bi-send-fill" />
                </button>
              </div>
              {/* Social Icons */}
              <div className="mb-3">
                <button className="btn btn-outline-secondary btn-sm me-1"><i className="bi bi-facebook" z /></button>
                <button className="btn btn-outline-secondary btn-sm me-1"><i className="bi bi-x" /></button>
                <button className="btn btn-outline-secondary btn-sm me-1"><i className="bi bi-dribbble" /></button>
                <button className="btn btn-outline-secondary btn-sm"><i className="bi bi-instagram" /></button>
              </div>
              {/* Food Thumbnails */}
              <div className="d-flex gap-2">
                <img src="thumb1.jpg" className="img-thumbnail" style={{ width: 50, height: 50, objectFit: 'cover' }} />
                <img src="thumb2.jpg" className="img-thumbnail" style={{ width: 50, height: 50, objectFit: 'cover' }} />
                <img src="thumb3.jpg" className="img-thumbnail" style={{ width: 50, height: 50, objectFit: 'cover' }} />
                <img src="thumb4.jpg" className="img-thumbnail" style={{ width: 50, height: 50, objectFit: 'cover' }} />
              </div>
            </div>
          </div>
        </div>
      </footer>

    </div>


  )
}
export default Header
