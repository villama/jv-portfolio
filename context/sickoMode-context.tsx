import { createContext, Dispatch, useReducer, useContext } from 'react'

const SickoModeContext = createContext<{ isSickoMode: boolean } | undefined>(undefined)
const SickoModeDispatchContext = createContext<Dispatch<{ type: string }> | undefined>(undefined)

function SickoModeReducer(state: { isSickoMode: boolean }, action: { type: string }) {
  switch (action.type) {
    case 'setTrue': {
      return { isSickoMode: true }
    }
    case 'setFalse': {
      return { isSickoMode: false }
    }
    case 'toggle': {
      return { isSickoMode: !state.isSickoMode }
    }
    default: {
      throw new Error(`Unhandles action type: ${action.type}`)
    }
  }
}

function SickoModeProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(SickoModeReducer, {
    isSickoMode: false
  })
  return (
    <SickoModeContext.Provider value={state}>
      <SickoModeDispatchContext.Provider value={dispatch}>
        {children}
      </SickoModeDispatchContext.Provider>
    </SickoModeContext.Provider>
  )
}

function useSickoModeState() {
  const context = useContext(SickoModeContext)
  if (context === undefined) {
    throw new Error('useSickoModeState must be used within a SickoModeProvider')
  }
  return context
}

function useSickoModeDispatch() {
  const context = useContext(SickoModeDispatchContext)
  if (context === undefined) {
    throw new Error('useSickoModeDispatch must be used within a SickoModeProvider')
  }
  return context
}

export { SickoModeProvider, useSickoModeState, useSickoModeDispatch }
