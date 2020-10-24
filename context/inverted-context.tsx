import { createContext, Dispatch, useReducer, useContext } from 'react'

const InvertedContext = createContext<{ isInverted: boolean } | undefined>(undefined)
const InvertedDispatchContext = createContext<Dispatch<{ type: string }> | undefined>(undefined)

interface InvertedReducerState {
  isInverted: boolean
}

interface InvertedReducerAction {
  type: string
}

function InvertedReducer(state: InvertedReducerState, action: InvertedReducerAction) {
  const { type } = action
  if (type === 'setTrue') return { isInverted: true }
  else if (type === 'setFalse') return { isInverted: false }
  else if (type === 'toggle') return { isInverted: !state.isInverted }
  else throw new Error(`Unhandled action type: ${type}`)
}

function InvertedProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(InvertedReducer, { isInverted: false })

  return (
    <InvertedContext.Provider value={state}>
      <InvertedDispatchContext.Provider value={dispatch}>
        {children}
      </InvertedDispatchContext.Provider>
    </InvertedContext.Provider>
  )
}

function useInvertedState() {
  const context = useContext(InvertedContext)
  if (context === undefined) throw new Error('useInvertedState must be used within a InvertedProvider')
  return context
}

function useInvertedDispatch() {
  const context = useContext(InvertedDispatchContext)
  if (context === undefined) throw new Error('useInvertedDispatch must be used within a InvertedProvider')
  return context
}

export { InvertedProvider, useInvertedState, useInvertedDispatch }
