import React, { createContext, useReducer } from "react";
import { reducer, defaultState } from "./reducer";
import ChildOne from "./childOne";
import { Context } from "./context";


export default function App() {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <Context.Provider value={{state, dispatch}}>
      <ChildOne />
    </Context.Provider>
  )
}
