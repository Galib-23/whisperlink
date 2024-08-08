export function extractTime(dateString) {
	const date = new Date(dateString);
  
	const year = date.getFullYear();
	const month = date.getMonth() + 1;
	const day = date.getDate();
  
	const hours = padZero(date.getHours());
	const minutes = padZero(date.getMinutes());
	return `${day}.${month}.${year} - ${hours}:${minutes}`;
  }
  
  // Helper function to pad single-digit numbers with a leading zero
  function padZero(number) {
	return number.toString().padStart(2, "0");
  }
  