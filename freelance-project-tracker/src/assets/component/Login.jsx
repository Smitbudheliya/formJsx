const Login = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const navigate = useNavigate();

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
      navigate('/');
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div>
      <input type="email" onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPass(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  );
};
