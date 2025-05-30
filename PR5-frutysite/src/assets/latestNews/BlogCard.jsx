import "./BlogCard.css";

const BlogCard = ({ title, date, month, category, author, image }) => {
  return (
    <>
     

      <div className="blog-card bg-light d-flex flex-column justify-content-between align-items-center">

        <div className="blog-content">
          <p className="blog-meta">By {author} • {category}</p>
          <h3 className="blog-title col-8">{title}</h3>
          <a href="#" className="blog-link">Read More →</a>
        </div>
        <div className="blog-image">
          <img src={image} alt={title} />
          <div className="blog-date">
            <li className="day list-group-number
            ">{date}</li>
            <span className="month">{month}</span>
          </div>
        </div>

      </div>
    </>
  );
};

export default BlogCard;
