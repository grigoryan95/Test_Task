import SignInSignUp from "../../component/sign_in_up/SignInSignUp";
import {useDispatch} from "react-redux";
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {setUser} from "../../store/slices/userSlice";
import {useHistory} from "react-router-dom";

export const RegisterPage = () => {
    const dispatch = useDispatch();
    const {push} = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        const data = new FormData(event.currentTarget);
        const obj = {
            email: data.get('email'),
            password: data.get('password'),
        }
        createUserWithEmailAndPassword(auth, obj.email, obj.password)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    token: user.accessToken
                }))
                push('/')
            })
            .catch(console.error)
    };

    return (
        <div>
            <SignInSignUp name="Sign Up" link="login" handleSubmit={handleSubmit} />
        </div>
    );
};