export * from './use-dark-mode'
export * from './use-local-storage'
export * from './use-media'

/**
 * Toma un número y devuelve una cadena con el número formateado como un peso colombiano
 * @param [number] - El número a formatearse.
 * @returns Una función que toma un número y devuelve una cadena con el número formateado como una
 * divisa.
 */
export const useCurrency = (number = Number()) => {
  return number.toLocaleString('en-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 })
}
