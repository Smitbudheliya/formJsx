const CommentSection = ({ postId }) => {
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]);

  const addComment = async () => {
    await addDoc(collection(db, "posts", postId, "comments"), {
      text: comment,
      createdAt: serverTimestamp()
    });
    setComment('');
  };

  useEffect(() => {
    const q = query(collection(db, "posts", postId, "comments"), orderBy("createdAt"));
    onSnapshot(q, (snapshot) => {
      setComments(snapshot.docs.map(doc => doc.data()));
    });
  }, [postId]);

  return (
    <div>
      <input value={comment} onChange={e => setComment(e.target.value)} />
      <button onClick={addComment}>Add Comment</button>
      {comments.map((c, i) => <p key={i}>{c.text}</p>)}
    </div>
  );
};
