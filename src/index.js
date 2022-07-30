import './firebase';
import './index.css';
import App from './App';
import { store } from './store';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const root = createRoot(document.getElementById('root'));
root.render(
    <ThemeProvider theme={theme}>
        <BrowserRouter>
            <Provider store={store}>
                <CssBaseline>
                    <App />
                </CssBaseline>
            </Provider>
        </BrowserRouter>
    </ThemeProvider>
);
