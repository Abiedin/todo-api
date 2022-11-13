import { useDispatch, useSelector } from 'react-redux';
import React from 'react';
import { changeUserStorage } from '../../../slices/userSlice';
import './inputs.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const FormSchema = Yup.object().shape({
  phone: Yup.number()
    .typeError('Must be number')
    .min(5, 'Number must be 5 characters long')
    .required('Required'),
  lastName: Yup.string()
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

const InputsField = ({ id, setActive }) => {
  const dispatch = useDispatch();

  /*let stateLocalUser = useSelector((state) => state.userLocal.storLocalUser);
  console.log('stateLocalUser =', stateLocalUser);*/

  const stateLocalUser = JSON.parse(localStorage.getItem('users')).data[id-1];
  

  /*if (!stateLocalUser) {
    stateLocalUser = JSON.parse(localStorage.getItem('users')).data[id-1];
    console.log("После перезагрузки", stateLocalUser)
  }*/

  const initialValues = {
    id: id,
    email: stateLocalUser.email,
    lastName: stateLocalUser.name,
    phone: stateLocalUser.phone,
    companyName: stateLocalUser.company.name,
    specialization: stateLocalUser.company.catchPhrase,
    tagline: stateLocalUser.company.bs,
    website: stateLocalUser.website,
    city: stateLocalUser.address.city,
    street: stateLocalUser.address.street,
    password: '',
    confirmPassword: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            setActive(false);
            dispatch(changeUserStorage(values));
          }, 400);
        }}
        validationSchema={FormSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
          isSubmitting,
        }) => (
          <Form onSubmit={handleSubmit}>
            <div className="fild">
              <div className="fild__itemsleft">
                <Field
                  type="text"
                  value={values.id}
                  name="id"
                  className={'fild__id-hidden'}
                />
                <label htmlFor="lastName" className="fild__lable">
                  Name *
                </label>
                <br />
                <Field
                  type="text"
                  id="lastName"
                  name="lastName"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.lastName}
                  className="fild-input"
                />
                {errors.lastName && touched.lastName && (
                  <p className="error">{errors.lastName}</p>
                )}
                <label htmlFor="email" className="fild__lable">
                  Email *
                </label>
                <br />
                <Field
                  type="email"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className="fild-input"
                />
                <ErrorMessage name="email" className="error" component="div" />
                <label htmlFor="password" className="fild__lable">
                  Password *
                </label>
                <br />
                <Field
                  type="password"
                  value={values.password}
                  id="password"
                  name="password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="fild-input"
                />
                {errors.password && touched.password && (
                  <p className="error">{errors.password}</p>
                )}
                <label htmlFor="conpassword" className="fild__lable">
                  Confirm password *
                </label>
                <br />
                <Field
                  type="password"
                  value={values.confirmPassword}
                  id="conpassword"
                  name="confirmPassword"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="fild-input"
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <p className="error">{errors.confirmPassword}</p>
                )}
                <label htmlFor="phone" className="fild__lable">
                  Phone *
                </label>
                <br />
                <Field
                  type="text"
                  value={values.phone}
                  id="phone"
                  name="phone"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="fild-input"
                />
                {errors.phone && touched.phone && (
                  <p className="error">{errors.phone}</p>
                )}
              </div>
              <div className="fild__itemsright">
                <label htmlFor="website" className="fild__lable">
                  Website
                </label>
                <br />
                <Field
                  type="text"
                  value={values.website}
                  id="website"
                  name="website"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className="fild-input"
                />
                <label htmlFor="companyName" className="fild__lable">
                  Company
                </label>
                <br />
                <Field
                  type="text"
                  value={values.companyName}
                  name="companyName"
                  id="companyName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="fild-input"
                />
                <label htmlFor={`specialization`} className="fild__lable">
                  Specialization
                </label>
                <br />
                <Field
                  type="text"
                  value={values.specialization}
                  id="specialization"
                  name="specialization"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="fild-input"
                />
                <label htmlFor="tagline" className="fild__lable">
                  Tag line
                </label>
                <br />
                <Field
                  type="text"
                  value={values.tagline}
                  id="tagline"
                  name="tagline"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="fild-input"
                />
                <label htmlFor={`city`} className="fild__lable">
                  City
                </label>
                <br />
                <Field
                  type="text"
                  value={values.city}
                  id="city"
                  name="city"
                  onChange={handleChange}
                  className="fild-input"
                />
                <label htmlFor={`street`} className="fild__lable">
                  Street
                </label>
                <br />
                <Field
                  type="text"
                  value={values.street}
                  id="street"
                  onBlur={handleBlur}
                  name="street"
                  onChange={handleChange}
                  className="fild-input"
                />
              </div>
            </div>
            <button
              className="textarea-btn"
              type="submit"
              disabled={isSubmitting}
            >
              Add
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default InputsField;
