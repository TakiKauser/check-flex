// import { connect } from "react-redux";
import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import customerReducer from "./reducers/customerReducer";
import orderReducer from "./reducers/orderReducer";

const middleWare = applyMiddleware(thunk)

const combineReducer = combineReducers({
    customer: customerReducer,
    order: orderReducer
});

export const store = createStore(combineReducer, composeWithDevTools(middleWare))