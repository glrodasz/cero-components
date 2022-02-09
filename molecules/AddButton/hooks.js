import { useEffect } from 'react'
import keyboardCodes from '../../utils/keyboardCodes'

const createKeydownEvent = (callback) => (event) => {
  event.key === keyboardCodes.ENTER && callback()
}

export const useKeydownEnterKey = (callback) => {
  useEffect(() => {
    window.addEventListener('keydown', createKeydownEvent(callback))
    return () =>
      window.removeEventListener('keydown', createKeydownEvent(callback))
  }, [])
}
