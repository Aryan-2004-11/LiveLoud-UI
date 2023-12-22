import { createContext, useContext, useState } from "react"

const LoadingContext = createContext()

export default function LoadingProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false)

  const toggleLoading = (value) => setIsLoading(value)

  return (
    <LoadingContext.Provider
      value={{
        isLoading,
        setIsLoading,
        toggleLoading,
      }}
    >
      {children}
    </LoadingContext.Provider>
  )
}

export const useLoading = () => useContext(LoadingContext)
