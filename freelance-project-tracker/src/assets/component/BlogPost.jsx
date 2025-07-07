import { Link } from 'react-router-dom';

const BlogPost = ({ posts }) => (
    <>
         <div>
      <h2>📝 Posts</h2>
      {posts.map((post) => (
        <div key={post.id} style={{ border: "1px solid #ccc", padding: 16, marginBottom: 16 }}>
          <h3>{post.title}</h3>
          <p><strong>Author:</strong> {post.author}</p>
          <p><strong>Category:</strong> {post.category}</p>
          <p>{post.content}</p>
          <p><strong>Likes:</strong> {post.likes}</p>
          <div>
            <strong>Comments:</strong>
            <ul>
              {post.comments.map((comment) => (
                <li key={comment.id}>
                  <strong>{comment.user}</strong>: {comment.text}
                </li>
              ))}
            </ul>
          </div>
          <p><em>Created At: {new Date(post.createdAt).toLocaleString()}</em></p>
        </div>
      ))}
    </div>
    </>
);

export default BlogPost;
