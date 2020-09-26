import { createContext, useState } from 'react'

const IsSickoModeContext = createContext<boolean>(null!)
const SetSickoModeContext = createContext<(val: boolean) => void>(null!)

function ContextProvider({ children }: { children: React.ReactNode }) {
  const [isSickoMode, setSickoMode] = useState(false)

  return (
    <IsSickoModeContext.Provider value={isSickoMode}>
      <SetSickoModeContext.Provider value={setSickoMode}>
        {children}
      </SetSickoModeContext.Provider>
    </IsSickoModeContext.Provider>
  )
}

export { SetSickoModeContext, IsSickoModeContext, ContextProvider }
