export const generateSeat = (rows: number, columns: number, price: number) => {
  const seats = [];

  for (let i = 0; i < rows; i++) {
    const row = String.fromCharCode(65 + i);
    const columnsArray = Array.from({ length: columns }).fill(0);
    seats.push({ row, columns: columnsArray, price: price });
  }

  return seats;
};
