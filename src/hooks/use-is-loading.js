import { useState } from 'react'

/**
 * Devuelve una matriz con el primer elemento como el estado y el segundo elemento es un objeto
 * con tres funciones que se pueden usar para actualizar el estado.
 * @param [initialValue=false] - El valor inicial del estado.
 * @returns Una matriz con dos elementos.El primer elemento es el valor de estado, el segundo elemento es un
 * Objeto con tres funciones.
 */
const useIsLoading = (initialValue = false) => {
  const [isLoading, setIsLoading] = useState(initialValue)
  const handleIsLoading = () => setIsLoading(!isLoading)
  const handleIsLoadingTrue = () => setIsLoading(true)
  const handleIsLoadingFalse = () => setIsLoading(false)
  return [isLoading, { handleIsLoading, handleIsLoadingTrue, handleIsLoadingFalse }]
}

export { useIsLoading }
