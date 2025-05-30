const Footer = () => {
  return (
    <div>
      
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

export default Footer;
