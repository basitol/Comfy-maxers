import {
  CREATE_ORDER_REQUEST,
  CREATE_ORDER_SUCCESS,
  CREATE_ORDER_FAIL,
  ORDER_CREATED_REQUEST,
  ORDER_CREATED_SUCCESS,
  ORDER_CREATED_FAIL,
} from "../constants/orderConstant";

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_ORDER_REQUEST:
      return {
        loading: true,
      };
    case CREATE_ORDER_SUCCESS:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case CREATE_ORDER_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const orderDetailsReducer = (
  state = { loading: true, orderItems: [], shippingAddress: [] },
  action
) => {
  switch (action.type) {
    case ORDER_CREATED_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ORDER_CREATED_SUCCESS:
      return {
        loading: false,
        order: action.payload,
      };
    case ORDER_CREATED_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
