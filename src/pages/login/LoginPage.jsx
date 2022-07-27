import SignInSignUp from "../../component/sign_in_up/SignInSignUp";
import {useDispatch} from "react-redux";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const LoginPage = () => {
    const dispatch = useDispatch()


    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth()
        const data = new FormData(event.currentTarget);
        const obj = {
            email: data.get('email'),
            password: data.get('password'),
        }
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then((data) => console.log(data))
            .catch()

    };

    return (
        <div>
            <SignInSignUp name="Sign In" link="register" handleSubmit={handleSubmit} />
        </div>
    );
};