import BlogPost from './BlogPost';

const BlogList = ({ users, posts }) => (
  <div>
    <h2>👥 Users</h2>
    <ul>
      {users.map((user) => (
        <li key={user.id}>
          <strong>{user.username}</strong> — Role: {user.role}
        </li>
      ))}
    </ul>

    <hr />

    <h2>📝 Blog Posts</h2>
    <div>
      {posts.map((JJpost) => (
        <BlogPost key={post.id} post={post} />
      ))}
    </div>
  </div>
);

export default BlogList;
