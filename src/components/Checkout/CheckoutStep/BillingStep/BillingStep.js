import React from "react";
import { Form, Field } from "react-final-form";
import { utils } from "../../../../services/common/index";

function BillingStep(props) {
  const onSubmit = data => props.complete(props.id, data);

  const validate = values => {
    const errors = {};
    if (!values.firstName) {
      errors.firstName = "Required";
    }
    if (!values.lastName) {
      errors.lastName = "Required";
    }
    if (!values.email) {
      errors.email = "Required";
    }
    if (!utils.validateEmail(values.email)) {
      errors.email = "Enter a valid address.";
    }
    return errors;
  };

  return (
    <div className="CheckoutStep">
      <h2 className="CheckoutStep-title">{props.name}</h2>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        initialValues={
          props.data && {
            firstName: props.data.firstName,
            lastName: props.data.lastName,
            email: props.data.email
          }
        }
        render={({ handleSubmit, invalid }) => (
          <form onSubmit={handleSubmit} className="CheckoutStep-form ">
            <Field name="firstName">
              {({ input, meta }) => (
                <div className="form-item">
                  <label>First Name</label>
                  <input
                    {...input}
                    type="text"
                    className="input input--text"
                    placeholder="First Name"
                  />
                  {meta.error && meta.touched && (
                    <span className="error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>
            <Field name="lastName">
              {({ input, meta }) => (
                <div className="form-item">
                  <label>Last Name</label>
                  <input
                    {...input}
                    type="text"
                    className="input input--text"
                    placeholder="Last Name"
                  />
                  {meta.error && meta.touched && (
                    <span className="error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <Field name="email">
              {({ input, meta }) => (
                <div className="form-item">
                  <label>Email</label>
                  <input
                    {...input}
                    type="text"
                    className="input input--text"
                    placeholder="Email"
                  />
                  {meta.error && meta.touched && (
                    <span className="error">{meta.error}</span>
                  )}
                </div>
              )}
            </Field>

            <button
              type="submit"
              className="button button--primary"
              disabled={invalid}
            >
              Next Step
            </button>
          </form>
        )}
      />
    </div>
  );
}

export default BillingStep;
