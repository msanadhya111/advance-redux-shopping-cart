import { useSelector } from "react-redux";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";

function App() {
  const isCartVisible = useSelector((state) => state.visible.cartIsVisible);
  return (
    <Layout>
      {isCartVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;

/*
When we sent a fetch request if we send through put, it will always be the way we are sending in the db.
If we send with the post, it change the way in the way by putting it in the object.

GET request can be cached, can remain in the browser history, can be bookmarked, have length restriction(url) this is
why not advisable to use it on the sensitive data.
POST cannot be cached, cannot remain in the browser history, cannot be bookmarked, do not have length restriction,
this is why it is advisable to use it for sensitive data.
PUT request is used to send data to a server to create/update the resource.
*/

/* 
Reducer in redux should be a pure, synchronous, side effects free function means for one input + action it should produce 
one output and that should be same for the same input

Suppose we wants to implement async code in our redux code ->

1) Use useEffect inside the component and dispatch out action after useEffect is done.Here in this case we will be 
   implementing the async stuff in the component itself and then after we can send the data to store after getting or 
   recieving it

2) Implement our own action creators(not the one we got from redux) inside it we can do it. Here in this we will be creating 
   Action Creator in the store itself

  Action Creator -> It will be a normal function which will return the function itself, it is always there
  with every reducer function as inbuilt.
  To create a Custom one -> We can create a separate function and return the dispatch function like objects
  as redux/toolkit supports both

  When we dispatch our action from the component, if the dispatch action is an object then middleware comes in between
  but don't do anything, it just passed, but if it's a fn then run the async task it contains and then passed the result
  to the reducer function.
  
  If there is a action creator like send(cart) {
    return (dispatch) => {
     // action we dispatch
    }
  }
  And how we call it dispatch(send(cart)) => We do not have to execute it redux/toolkit will do it for us

  There is a redux dev toolkit which we have, it's like an extension just like components, and we can play around with it, 
  very useful to track where the issue is. 
*/

/*
------------store file------------
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'; // Assuming you have combined reducers

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;

------------redux thunk-----------
// actions.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes';

export const fetchData = () => {
  return dispatch => {
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: FETCH_DATA_SUCCESS, payload: data });
      })
      .catch(error => {
        dispatch({ type: FETCH_DATA_FAILURE, payload: error });
      });
  };
};



----------reducer function------------
// reducers.js
import { FETCH_DATA_SUCCESS, FETCH_DATA_FAILURE } from './actionTypes';

const initialState = {
  data: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        error: null
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        data: [],
        error: action.payload
      };
    default:
      return state;
  }
};

export default reducer;




------------component--------------------

// MyComponent.js
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchData } from './actions';


const MyComponent = ({ data, error, fetchData }) => {
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      {error && <p>Error: {error}</p>}
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => ({
  data: state.data,
  error: state.error
});

export default connect(mapStateToProps, { fetchData })(MyComponent);

*/
