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
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, event.email, event.password)
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
                handleSubmitOut={handleSubmit}/>
        </>
    );
};