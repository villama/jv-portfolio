import { createContext, useState } from 'react'

type ContextType = {
  isSickoMode: boolean
  setSickoMode: (val: boolean) => void
}

const Context = createContext<ContextType>(null!)

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [isSickoMode, setSickoMode] = useState(false)

  return (
    <Context.Provider value={{ isSickoMode, setSickoMode }}>
      {children}
    </Context.Provider>
  )
}

export { Context, ContextProvider }
