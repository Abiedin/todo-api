import { useDispatch } from 'react-redux';
import React, { useState } from 'react';
import { changeUserStorage, stateUser } from '../../../slices/userSlice';
import './inputs.scss';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormSchema from '../validation/FormSchema';

const InputsField = ({ id, setActive }) => {
  const dispatch = useDispatch();
  const [stateLocalUser] = useState(
    JSON.parse(localStorage.getItem('users')).data[id - 1]
  );

  const initialValues = {
    id: id,
    email: stateLocalUser.email,
    name: stateLocalUser.name,
    phone: stateLocalUser.phone,
    username: stateLocalUser.username,
    company: {
      catchPhrase: stateLocalUser.company.catchPhrase,
      name: stateLocalUser.company.name,
      bs: stateLocalUser.company.bs,
    },
    address: {
      city: stateLocalUser.address.city,
      street: stateLocalUser.address.street,
      suite: stateLocalUser.address.suite,
      zipcode: stateLocalUser.address.zipcode,
      geo: {
        lat: stateLocalUser.address.geo.lat,
        lng: stateLocalUser.address.geo.lng,
      }
    },
    website: stateLocalUser.website,    
    password: '',
    confirmPassword: '',
  };

  return (
    <div>
      <Formik
        initialValues={initialValues}
       
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            setSubmitting(false);
            setActive(false);
            dispatch(changeUserStorage(values));
            dispatch(stateUser());
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
          handleSubmit,
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
                  name="name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
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
                  value={values.company.name}
                  name="company.name"
                  id="companyName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="fild-input"
                />
                <label htmlFor="catchPhrase" className="fild__lable">
                  Specialization
                </label>
                <br />
                <Field
                  type="text"
                  value={values.company.catchPhrase}
                  id="catchPhrase"
                  name="company.catchPhrase"
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
                  value={values.company.bs}
                  id="tagline"
                  name="company.bs"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  className="fild-input"
                />
                <label htmlFor="city" className="fild__lable">
                  City
                </label>
                <br />
                <Field
                  type="text"
                  value={values.address.city}
                  id="city"
                  name="address.city"
                  onChange={handleChange}
                  className="fild-input"
                />
                <label htmlFor={`street`} className="fild__lable">
                  Street
                </label>
                <br />
                <Field
                  type="text"
                  value={values.address.street}
                  id="street"
                  onBlur={handleBlur}
                  name="address.street"
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
