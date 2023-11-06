import { signUpWithGoogle } from "../firebase/firebaseConfig";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/features/imgSlice";
function Login() {
  const dispatch = useDispatch();
  const signUpLogin = () => {
    signUpWithGoogle()
      .then((user) => dispatch(addUser(user.user)))
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1 className="mt-5 text-3xl mb-4">Sign Up / Login</h1>
      <button onClick={() => signUpLogin()} className="btn btn-secondary">
        Login
      </button>
    </div>
  );
}

export default Login;
