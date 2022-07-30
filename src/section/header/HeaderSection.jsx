import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { toolbarStyle } from '../../mock-data/style';
import { removeUser } from '../../store/slices/userSlice';

export function HeaderSection() {
    const dispatch = useDispatch();
    const isAuth = localStorage.getItem('token');
    const logout = () => {
        dispatch(removeUser())
    };
    return (
        <>
            <AppBar sx={{background: '#0b1b32'}}>
                <Toolbar sx={toolbarStyle}>
                    <img
                        className="logo"
                        alt="Bee Web's Logo"
                        src="https://beewebsystems.com/wp-content/themes/beeweb/assets/img/bee-web-new-logo.png"
                    />
                    <Typography variant="h4">
                        Test Task
                    </Typography>
                    <Typography variant="h6" component="div">
                        {
                            isAuth
                                ? <Button
                                    type="submit"
                                    onClick={logout}
                                    children="Log out"
                                    variant="contained"
                                    sx={{mt: 3, mb: 2}}
                                />
                                : null
                        }
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar/>
        </>
    );
}