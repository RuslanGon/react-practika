import { Field, Form, Formik } from 'formik';
import React from 'react'
import * as yup from "yup";

const initialValues = {
  userName: "",
  userEmail: ""
};

const userSchema = yup.object().shape({
  userName: yup.string().min(2, "Too Short!").max(50, "Too Long!").required("Required"),
  userEmail: yup.string().email("Must be a valid email!").required("Required"),
});

const MailBoxForm = ({onAddUser}) => {

     const handleSubmit = (values, actions) => {
      // onAddUser(formData)
      console.log(values);
      actions.resetForm();
    };
    
  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchem={userSchema}>
    <Form>
        <h2>Add new user</h2>
        <label>
            <span>user email:</span>
            <br />
            <Field type="email" name="userEmail" />
        </label>
        <br />
        <label>
            <span>user name:</span>
            <br />
            <Field type="text" name="userName" />
        </label>
        <br />
        <button type='submit'>Create new user</button>
    </Form>
    </Formik>
  )
}

export default MailBoxForm