import types from "./types";

const initialState = {
  isLoading: true,
  isProcessing: false,
  error: null,
  steps: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case types.FETCH_CHECKOUT:
      return {
        ...state,
        isLoading: false,
        error: null,
        ...action.payload
      };
    case types.STEP_CHANGE:
      return {
        ...state,
        steps: [
          ...state.steps.map(step => {
            return {
              ...step,
              isActive: step.id === action.payload.id
            };
          })
        ]
      };
    case types.STEP_COMPLETED:
      return completeStep(state, action);
    case types.CHECKOUT_PROCESSING:
      return {
        ...state,
        isProcessing: true
      };
    case types.CHECKOUT_PROCESSED:
      console.log(state);
      return {
        ...state,
        isCompleted: true,
        isProcessing: false
      };
    default:
      return state;
  }
}

function completeStep(state, action) {
  let nextIndex;

  return {
    ...state,
    steps: [
      ...state.steps.map((step, index) => {
        if (step.id === action.payload.id) {
          nextIndex = index + 1;
          return {
            ...step,
            isCompleted: true,
            isActive: false,
            data: action.payload.data
          };
        }
        return { ...step, isActive: index === nextIndex };
      })
    ]
  };
}
