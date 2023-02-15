export const convertPLNToUSD = (PLN) => {

  const PLNtoUSD = PLN / 3.50;
  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
  });

  return formatter.format(PLNtoUSD).replace(/\u00a0/g, ' ');
}