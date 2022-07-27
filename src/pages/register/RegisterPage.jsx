import SignInSignUp from "../../component/sign_in_up/SignInSignUp";
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";

export const RegisterPage = () => {
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth()
        const data = new FormData(event.currentTarget);
        const obj = {
            email: data.get('email'),
            password: data.get('password'),
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(({user}) => console.log(user))
            .catch()
    };

    return (
        <div>
            <SignInSignUp name="Sign Up" link="login" handleSubmit={handleSubmit} />
        </div>
    );
};