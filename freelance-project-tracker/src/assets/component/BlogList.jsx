const BlogList = ({ posts, search, category }) => {
  const filtered = posts.filter(p =>
    p.title.toLowerCase().includes(search.toLowerCase()) &&
    (category ? p.category === category : true)
  );

  return (
    <div className="row">
      {filtered.map(post => (
        <div className="col-md-4 mb-3" key={post.id}>
          <div className="card">
            <div className="card-body">
              <h5>{post.title}</h5>
              <p>{post.summary.slice(0, 100)}...</p>
              <a href={`/post/${post.id}`} className="btn btn-primary">Read More</a>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
