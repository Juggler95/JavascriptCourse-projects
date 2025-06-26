// The .map() method creates a new array by applying the formatDate function to each element in the dates array.

const dates = ['2024-1-10', '2025-2-20', '2026-3-30'];
const formattedDates = dates.map(formatDate);
console.log(formattedDates);

function formatDate(element) {
  const parts = element.split('-');
  return `${parts[1]}/${parts[2]}/${parts[0]}`;
}
