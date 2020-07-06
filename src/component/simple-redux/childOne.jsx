import React, { useContext } from "react"
import { Context } from "./context"

export default function ChildOne() {
  const { state, dispatch } = useContext(Context)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={() => {
        dispatch({type: "increment"})
      }}>increment</button>
      <button onClick={() => {
        dispatch({type: "decrement"})
      }}>
        decrement
      </button>
    </div>
  )
}
