import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { HeaderSection } from '../../section';
import { SignInSignUp } from '../../component';
import { setUser } from '../../store/slices/userSlice';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const LoginPage = () => {
    const dispatch = useDispatch();
    const {push} = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();
        const auth = getAuth();
        const data = new FormData(event.currentTarget);
        const obj = {
            email: data.get('email'),
            password: data.get('password'),
        };
        signInWithEmailAndPassword(auth, obj.email, obj.password)
            .then(({user}) => {
                dispatch(setUser({
                    id: user.uid,
                    email: user.email,
                    token: user.accessToken
                }))
                push('/')
                localStorage.setItem('token', user.accessToken);
            })
            .catch()
    };

    return (
        <>
            <HeaderSection/>
            <SignInSignUp
                login="login"
                name="Sign In"
                link="register"
                handleSubmit={handleSubmit}
            />
        </>
    );
};