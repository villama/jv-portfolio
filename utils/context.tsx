import { createContext, useState } from 'react'

const IsSickoModeContext = createContext(false)
const ContextSetters = createContext({})

function ContextProvider(props: any) {
  const [isSickoMode, setSickoMode] = useState(false)

  return (
    <IsSickoModeContext.Provider value={isSickoMode}>
      <ContextSetters.Provider value={{setSickoMode}}>
        {props.children}
      </ContextSetters.Provider>
    </IsSickoModeContext.Provider>
  )
}

export {IsSickoModeContext, ContextSetters, ContextProvider}
