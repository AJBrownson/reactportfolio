import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import './Form.css'



export default function Form() {

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      country: '',
      email: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      lastName: Yup.string()
      .max(20, 'Must be 20 characters or less')
      .required('Required'),
      country: Yup.string()
      .max(15, 'Must be 15 characters or less')
      .required('Required'),
      email: Yup.string()
      .email('invalid email address')
      .required('Required'),
    }),

    onSubmit: (values) => {
        console.log(values)
    }
  })



  return (
    <>
      <form onSubmit={formik.handleSubmit} method='post' name='contact' netlify>
        <div id='first'>
          <input id="firstName"
                 name='firstName'
                 type="text"
                 placeholder="First Name"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.firstName}
                  />
                  {formik.touched.firstName && formik.errors.firstName ? <p>{formik.errors.firstName}</p> : null }

        </div>
        <div id='last'>
          <input id="lastName"
                 name='lastName'
                 type="text"
                 placeholder="Last Name"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.lastName}
                  />
                  {formik.touched.lastName && formik.errors.lastName ? <p>{formik.errors.lastName}</p> : null }
        </div>
        <div id='country'>
          <input id="country"
                 name='country'
                 type="text"
                 placeholder="Country of Residence"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.country}
                  />
                  {formik.touched.country && formik.errors.country ? <p>{formik.errors.country}</p> : null }
        </div>
        <div id='email'>
          <input id="email"
                 name='email'
                 type="text"
                 placeholder="E-mail Address"
                 onChange={formik.handleChange}
                 onBlur={formik.handleBlur}
                 value={formik.values.email}
                  />
                  {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null }
        </div>
        <textarea onSubmit={formik.handleSubmit} type='text' placeholder='What do you want to talk about?' cols='50' row='5' />
        <button type='submit'>Submit</button>
      </form>
    </>
  )
}
