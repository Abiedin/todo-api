import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  phone: Yup.number()
    .typeError('Must be number')
    .min(5, 'Number must be 5 characters long')
    .required('Required'),
  name: Yup.string()
    .typeError('Must be string')
    .min(2, 'Password must be 2 characters long')
    .required('Required'),
  password: Yup.string()
    .min(2, 'Password must be 2 characters long')
    .matches(/[0-9]/, 'Password requires a number')
    .required('Required'),
  /*.matches(/[a-z]/, 'Password requires a lowercase letter')
    .matches(/[A-Z]/, 'Password requires an uppercase letter')
    .matches(/[^\w]/, 'Password requires a symbol'),*/
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Must match "password" field value')
    .required('Required'),
});

export default FormSchema;
