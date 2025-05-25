import BlogCard from "./BlogCard";

const BlogSection = () => {
  const posts = [
    {
      id: 1,
      title: "Healthy eating made fun with fresh ingredients",
      date: "10",
      month: "Oct",
      category: "Snacks",
      author: "Admin",
      image: "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/2.jpg",
    },
    {
      id: 2,
      title: "Ultimate guide to cooking organic at home",
      date: "09",
      month: "Sep",
      category: "Food",
      author: "Admin",
      image: "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/1.jpg",
    },
    {
      id: 3,
      title: "Colorful salad bowls for your daily detox",
      date: "12",
      month: "Oct",
      category: "Snacks",
      author: "Admin",
      image: "https://maraviyainfotech.com/projects/carrot/carrot-v22/carrot-html/assets/img/blog/3.jpg",
    },
  ];

  return (
    <>
       <div className="blog-title text-center" style={{ paddingTop: "40px"}}>
        <h1>Latest News</h1>
        <p style={{fontSize:16, color:"#7A7A7A"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor <br />incididunt ut labore lacus vel facilisis.</p>
      </div>
       <div className="container"  style={{ paddingBlock : "40px"}}>
        <section>
      <div
        style={{
          display: "grid",
          gap: "24px",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
        }}
      >
        {posts.map((post) => (
          <BlogCard key={post.id} {...post} />
        ))}
      </div>
    </section>
       </div>
    </>
   
  );
};

export default BlogSection;
