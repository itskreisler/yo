export * from './use-dark-mode'
export * from './use-local-storage'
export * from './use-media'

export const useCurrency = (number = Number()) => {
  return number.toLocaleString('en-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 2 })
}
