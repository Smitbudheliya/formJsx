const NewPost = () => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [content, setContent] = useState('');
  const { currentUser } = useAuth();

  const handleSubmit = async () => {
    if (!currentUser) return alert("Login required!");
    await addDoc(collection(db, "posts"), {
      title,
      category,
      content,
      createdAt: serverTimestamp(),
      author: currentUser.email
    });
    alert("Post created!");
  };

  return (
    <div>
      <h2>New Blog Post</h2>
      <input placeholder="Title" onChange={e => setTitle(e.target.value)} />
      <input placeholder="Category" onChange={e => setCategory(e.target.value)} />
      <textarea placeholder="Content" onChange={e => setContent(e.target.value)} />
      <button onClick={handleSubmit}>Post</button>
    </div>
  );
};
