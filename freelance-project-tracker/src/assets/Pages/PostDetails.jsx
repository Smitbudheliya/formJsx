const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      const docSnap = await getDoc(doc(db, "posts", id));
      if (docSnap.exists()) setPost(docSnap.data());
    };
    fetchPost();
  }, [id]);

  return post ? (
    <div>
      <h2>{post.title}</h2>
      <p>{post.content}</p>
      <CommentSection postId={id} />
    </div>
  ) : <p>Loading...</p>;
};
export default PostDetails;