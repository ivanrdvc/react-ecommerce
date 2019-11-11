import types from "./types";

const changeStep = id => ({
  type: types.STEP_CHANGE,
  payload: {
    id
  }
});

const completeStep = (id, data) => ({
  type: types.STEP_COMPLETED,
  payload: {
    id,
    data
  }
});

function fetchCheckout() {
  return dispatch => {
    fetch("/checkout/getcheckout")
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: types.FETCH_CHECKOUT,
          payload: json
        });
      })
      .catch(error => console.log(error));
  };
}

function fakeProcessPayment() {
  const wait = () =>
    new Promise(resolve => {
      setTimeout(() => {
        resolve("resolved");
      }, 2000);
    });

  return dispatch => {
    dispatch({ type: types.CHECKOUT_PROCESSING });
    wait()
      .then(json => {
        dispatch({
          type: types.CHECKOUT_PROCESSED,
          payload: json
        });
      })
      .catch(error => console.log(error));
  };
}

export default {
  changeStep,
  completeStep,
  fetchCheckout,
  fakeProcessPayment
};
