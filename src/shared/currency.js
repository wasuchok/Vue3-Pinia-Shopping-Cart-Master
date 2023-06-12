
export const currencyTHB = (baht) => {
  return  Intl.NumberFormat('th-TH', {
        style: 'currency',
        currency: 'THB',
      }).format(baht)
}