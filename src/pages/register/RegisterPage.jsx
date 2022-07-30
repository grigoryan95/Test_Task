import { useDispatch } from 'react-redux';
import { HeaderSection } from '../../section';
import { useHistory } from 'react-router-dom';
import { setUser } from '../../store/slices/userSlice';
import SignInSignUp from '../../component/sign-in-up/SignInSignUp';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const RegisterPage = () => {
    const {push} = useHistory();
    const dispatch = useDispatch();

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
            .catch()
    };

    return (
        <>
            <HeaderSection/>
            <SignInSignUp
                link="login"
                name="Sign Up"
                handleSubmit={handleSubmit}/>
        </>
    );
};