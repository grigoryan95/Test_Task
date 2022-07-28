import {Redirect} from "react-router-dom";
import {useAuth} from "../../hooks/use-auth";
import {useDispatch} from "react-redux";
import {removeUser} from "../../store/slices/userSlice";


export const HomePage = () => {
    const dispatch = useDispatch()
    const {isAuth, email} = useAuth()
    const handleRemove = () => {
        dispatch(removeUser())
    }

    const test = isAuth ?
            <div>
                <p>home page</p>
                <button onClick={handleRemove}>Log out from {email}</button>
            </div>

        : <Redirect to="/login" />

    return (
        { test }
    )
};
