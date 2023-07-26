import { useCallback, useEffect, useRef } from 'react'

export default function useIsMounted() {
  const isMounted = useRef(false)

  useEffect(() => {
    if (!isMounted.current) isMounted.current = true

    return () => {
      isMounted.current = false
    }
  }, [])

  return useCallback(() => isMounted.current, [])
}
