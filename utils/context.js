import { createContext, useState } from 'react'

export const SickoModeContext = createContext()
export const SetSickoModeContext = createContext()

export function ContextProvider(props) {
  const [isSickoMode, setSickoMode] = useState(false)

  return (
    <SickoModeContext.Provider value={isSickoMode}>
      <SetSickoModeContext.Provider value={setSickoMode}>
        {props.children}
      </SetSickoModeContext.Provider>
    </SickoModeContext.Provider>
  )
}
