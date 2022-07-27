import SignInSignUp from "./component/sign_in_up/SignInSignUp";
import {createTheme, ThemeProvider} from '@mui/material/styles';

function App() {
    const theme = createTheme();


    return (
        <ThemeProvider theme={theme}>
            <SignInSignUp name="Sign in"/>
        </ThemeProvider>
    );
}

export default App;
