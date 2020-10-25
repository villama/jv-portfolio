import { createContext, Dispatch, SetStateAction, useState } from 'react'

const InvertedContext = createContext<boolean | undefined>(undefined)
const SetInvertedContext = createContext<Dispatch<SetStateAction<boolean>> | undefined>(undefined)

function InvertedProvider({ children }: { children: React.ReactNode }) {
  const [inverted, setInverted] = useState(false)

  return (
    <InvertedContext.Provider value={inverted}>
      <SetInvertedContext.Provider value={setInverted}>
        {children}
      </SetInvertedContext.Provider>
    </InvertedContext.Provider>
  )
}

export { InvertedContext, SetInvertedContext, InvertedProvider }
