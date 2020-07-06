import React, { useContext, createContext } from "react"

const Context = createContext(null)

function Child() {
  const context = useContext(Context)
  return <div>{context.title}</div>
}

export default function useContentComponent() {
  return (
    <Context.Provider value={{ title: '你吼辣么大声干嘛' }}>
      <Child />
    </Context.Provider>
  )
}
