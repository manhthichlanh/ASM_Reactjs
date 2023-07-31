import React, { createContext, useContext, useState, useReducer } from 'react';
import axios from "axios";

export const AppContext = createContext();

const initstate = {
  cartItems: JSON.parse(localStorage.getItem('cart')) || [],

}
const reducer = (state,action) => {
  switch (action.type) {
      case 'SET_CART_ITEMS':
        const item = {
          ...state,
          cartItems: action.payload,
        };

        localStorage.setItem("cart",JSON.stringify(item.cartItems) );
        return item;
      case 'ADD_TO_CART':
        const existingIndex = state.cartItems.findIndex(item => item._id === action.payload._id);
        if (existingIndex !== -1) {
          // Nếu sản phẩm đã tồn tại trong giỏ hàng, cập nhật số lượng của sản phẩm đó
          const updatedCartItems = state.cartItems.map(item => {
            if (item._id === action.payload._id) {
              return {
                ...item,
                quantity: Number(item.quantity) + Number(action.payload.quantity) ,
              };
            }
            return item;
          });
          const newState = {
            ...state,
            cartItems: updatedCartItems,
          };
          localStorage.setItem('cart', JSON.stringify(updatedCartItems));
          return newState;
        } else {
          // Nếu sản phẩm chưa có trong giỏ hàng, thêm sản phẩm đó vào giỏ hàng
          const newState = {
            ...state,
            cartItems: [...state.cartItems, action.payload],
          };
          localStorage.setItem('cart', JSON.stringify(newState.cartItems));
          return newState;
        }
      case 'DELETE_ITEM':
        console.log(action.payload)
        const newStateDelete = {
          ...state,
          cartItems: state.cartItems.filter(item => item._id !== action.payload),
        };
        localStorage.setItem('cart', JSON.stringify(newStateDelete.cartItems));
        return newStateDelete;
      case 'UPDATE_QUANTITY':
        console.log(action.payload)

        const newStateUpdate = {
          ...state,
          cartItems: state.cartItems.map(item => {
            if (item._id === action.payload._id) {
              return {
                ...item,
                quantity: action.payload.quantity,
              };
            }
            return item;
          }),
        };
        localStorage.setItem('cart', JSON.stringify(newStateUpdate.cartItems));
        return newStateUpdate;
      default:
        return state;
    }
}
 function useAppContext() {
  const context = useContext(AppContext);

  if (context === null) {
    throw new Error('useAppContext must be used within a AppContextProvider');
  }
  return context;
}
 function fetchDate(url) {
    axios.get(url);
 }
 function AppContextProvider({ children }) {

  const [ state, dispatch ] = useReducer(reducer,initstate);

  const obj = {
    state, 
    dispatch
  }

  return <AppContext.Provider value={obj}>{children}</AppContext.Provider>;
}
export { useAppContext, AppContextProvider }