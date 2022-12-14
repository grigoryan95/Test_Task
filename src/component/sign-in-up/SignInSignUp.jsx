import {Formik} from "formik";
import PropTypes from 'prop-types';
import {Alert} from "@mui/material";
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import LoginIcon from '@mui/icons-material/Login';
import { signInSignUpStyle } from '../../mock-data/style';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {validationSchema} from "../../validation/validationEmailPass";

export default function SignInSignUp({name, link, login, handleSubmitOut}) {

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={signInSignUpStyle}>
                <Avatar
                    sx={{m: 1, backgroundColor: 'secondary.main'}}
                    children={login ? <LoginIcon/> : <LockOutlinedIcon/>}
                />
                <Typography component="h1" variant="h5" children={name}/>

                    <Formik
                        initialValues={{email: '', password: ''}}
                        validateOnBlur
                        validationSchema={validationSchema}
                        onSubmit={(values) => handleSubmitOut(values)}
                    >
                        {
                            ({   dirty,
                                 values,
                                 errors,
                                 touched,
                                 isValid,
                                 handleBlur,
                                 handleChange,
                                 handleSubmit
                             }) => {
                                return (
                                    <Box
                                        noValidate
                                        sx={{mt: 1}}
                                        component="form"
                                    >
                                        {touched.email && errors.email && <Alert severity="error" children={errors.email} />}
                                        <TextField
                                            required
                                            fullWidth
                                            autoFocus
                                            id="email"
                                            type="email"
                                            name="email"
                                            margin="normal"
                                            onBlur={handleBlur}
                                            value={values.email}
                                            autoComplete="email"
                                            label="Email Address"
                                            onChange={handleChange}
                                        />
                                        {touched.password && errors.password && <Alert severity="error" children={errors.password} />}
                                        <TextField
                                            required
                                            fullWidth
                                            onBlur={handleBlur}
                                            onChange={handleChange}
                                            value={values.password}
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
                                            children={name}
                                            variant="contained"
                                            sx={{mt: 3, mb: 2}}
                                            onClick={handleSubmit}
                                            disabled={!isValid && !dirty}
                                        />
                                        <Link style={{textDecoration: 'none'}} to={`/${link}`}>
                                            <Button
                                                fullWidth
                                                type="submit"
                                                variant="contained"
                                                children={`Go to ${link} page`}
                                                sx={{mt: 3, mb: 2, color: 'white'}}
                                            />
                                        </Link>
                                    </Box>
                                )
                            }
                        }
                    </Formik>
                </Box>
        </Container>
    );
}

SignInSignUp.propTypes = {
    name: PropTypes.string,
    link: PropTypes.string,
    login: PropTypes.string,
    handleSubmit: PropTypes.func
}