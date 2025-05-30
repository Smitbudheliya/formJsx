const Members = [
  {
    name: "Stephen Smith",
    role: "Co Founder",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    text: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”"
  },
  {
    name: "Lorem Robinson",
    role: "Manager",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 4,
    text: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”"
  },
  {
    name: "Saddika Alard",
    role: "Team Leader",
    image: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    text: "“eiusmpsu dolor sit amet, conse cte tur ng elit, sed do eiusmod tem lacus vel facilisis.”"
  }
];

const Member = () => {
  const renderStars = (count) => {
    return (
      <div>
        {Array.from({ length: 5 }).map((_, i) => (
          <span key={i} className={`text-warning fs-5 ${i >= count ? "opacity-25" : ""}`}>
            ★
          </span>
        ))}
      </div>
    );
  };

  return (
    <section className="py-5 bg-white">
      <div className="container text-center mb-5 pb-5">
       <h1 style={{fontSize:35}}>Great Words From People</h1>
        <p style={{fontSize:16, color:"#7A7A7A"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore lacus vel facilisis.</p>
      </div>

      <div className="container">
        <div className="row g-4 ">
          {Members.map((t, index) => (
            <div key={index} className="col-12 col-md-6 col-lg-4 ">
              <div className="card h-100 shadow-sm border-0 position-relative pt-5 bg-light">
                <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle ">
                  <img
                    src={t.image}
                    alt={t.name}
                    className="rounded-circle border-5 border-white shadow"
                    style={{ width: "96px",height: "96px", objectFit: "cover" }}
                  />
                </div>
                <div className="card-body text-center mt-5">
                  <p className="card-text text-muted">{t.text}</p>
                  {renderStars(t.rating)}
                  <h5 className="fw-bold mt-3 mb-1">{t.name}</h5>
                  <small className="text-secondary">{t.role}</small>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Member;
// 