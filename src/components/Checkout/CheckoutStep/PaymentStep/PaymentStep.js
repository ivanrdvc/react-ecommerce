import React, { useState } from "react";
import "./PaymentStep.css";
import { Form, Field } from "react-final-form";

function PaymentStep(props) {
  const onSubmit = () => props.complete(props.id);
  const validate = values => {
    const errors = {};
    if (!values.cardNumber) {
      errors.cardNumber = "Required";
    }
    if (!values.cardHolder) {
      errors.cardNumber = "Required";
    }
    if (!values.expiration) {
      errors.cardNumber = "Required";
    }
    if (!values.CVC) {
      errors.cardNumber = "Required";
    }
    return errors;
  };

  return (
    <div className="CheckoutStep">
      <h2 className="CheckoutStep-title">{props.name}</h2>

      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit} className="CheckoutStep-form">
            <Field name="cardNumber">
              {({ input, meta }) => (
                <div className="form-item">
                  <label>Card Number</label>
                  <input
                    {...input}
                    type="text"
                    className="input input--text"
                    placeholder="Card Number"
                  />
                  {meta.errord && <span>{meta.error}</span>}
                </div>
              )}
            </Field>

            <div>
              <Field name="cardHolder">
                {({ input, meta }) => (
                  <div className="form-item">
                    <label>Card Holder</label>
                    <input
                      {...input}
                      type="text"
                      className="input input--text"
                      placeholder="Card Holder"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="expiration">
                {({ input, meta }) => (
                  <div className="form-item">
                    <label>Expiration</label>
                    <input
                      {...input}
                      type="text"
                      className="input input--text"
                      placeholder="Expiration"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
              <Field name="CVC">
                {({ input, meta }) => (
                  <div className="form-item">
                    <label>CVC</label>
                    <input
                      {...input}
                      type="text"
                      className="input input--text"
                      placeholder="CVC"
                    />
                    {meta.error && meta.touched && <span>{meta.error}</span>}
                  </div>
                )}
              </Field>
            </div>
            <button
              type="submit"
              className="button button--primary"
              disabled={pristine || invalid}
            >
              Continue
            </button>
          </form>
        )}
      />
    </div>
  );
}

export default PaymentStep;
