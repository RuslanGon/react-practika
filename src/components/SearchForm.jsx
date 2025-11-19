import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import * as yup from "yup";

const initialValues = {
    searchTerm: "",
};

const searchFormSchema = yup.object().shape({
searchTerm: yup.string().min(2, "Too Short!").required("enter your search product, please"),
});

const SearchForm = ({onSearchQuery}) => {
const handleSubmit = (values) => {
onSearchQuery(values.searchTerm)
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={searchFormSchema}>
      <Form>
        <h2>Search product by name</h2>
        <label>
          <Field type="text" name="searchTerm" placeholder="search product" />
          <ErrorMessage name="searchTerm" component="span" />
        </label>
        <br />
        <button type="submit">Search product 🔎</button>
      </Form>
    </Formik>
  );
};

export default SearchForm;
