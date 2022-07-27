import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

export default function SignInSignUp({name}) {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
    };

    return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                    }}
                >
                    <Avatar
                        sx={{ m: 1, bgcolor: 'secondary.main' }}
                        children={<LockOutlinedIcon />}
                    />
                    <Typography component="h1" variant="h5" children={name} />
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            required
                            fullWidth
                            autoFocus
                            id="email"
                            name="email"
                            margin="normal"
                            label="Email Address"
                            autoComplete="email"
                        />
                        <TextField
                            required
                            fullWidth
                            id="password"
                            name="password"
                            margin="normal"
                            type="password"
                            label="Password"
                            autoComplete="current-password"
                        />
                        <Button
                            fullWidth
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                            children={name}
                        />
                    </Box>
                </Box>
            </Container>
    );
}