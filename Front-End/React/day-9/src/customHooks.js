import { useEffect, useState } from "react"

export function useLocalStorage(key, defaultValue) {

  //have atleast one hook
  const [data, setData] = useState(() => {
    const dataFromLocalStorage = JSON.parse(window.localStorage.getItem(key))
    return dataFromLocalStorage || defaultValue
  })

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(data))
  }, [data])

  return [data, setData]
}

export function useDocumentTitle(customTitle) {
  useEffect(() => {
    document.title = customTitle
  }, [customTitle])
}