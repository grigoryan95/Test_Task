import * as yup from 'yup';

export const validationSchema = yup.object({
    email: yup.string().email('Must be a valid email').max(255).required('Email is required'),
    password: yup.string().required('Password is required').min(4, 'min 4 Symbol').max(8, 'max 8 Symbol'),
});