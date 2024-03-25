export const generateSeat = (rows: number, columns: number, price: number) => {
  const seats = [];

  for (let i = 0; i < rows; i++) {
    const row = String.fromCharCode(65 + i);
    const columnsArray = Array.from({ length: columns }).fill(0);
    seats.push({ row, columns: columnsArray, price: price });
  }

  return seats;
};

export const getUniqueDate = (dates: Date[]) => {
  const datesUnique = new Set(
    dates.map((d) => d.toLocaleString().split("T")[0])
  );
  return Array.from(datesUnique);
};

export const formatTime = (date: Date) => {
  const hours = date.getHours();
  const mins =
    date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();

  return `${hours}:${mins}`;
};

export const calcPrice = (numberOfSeat: number, price: number) => {
  return numberOfSeat * price;
};

export const formatMoney = (money: number) => {
  return money.toLocaleString("vi-VN", {
    style: "currency",
    currency: "VND",
  });
};

export const formatSeat = (seat: string[]) => {
  return seat
    .sort((seat1, seat2) => {
      const row1 = seat1.charAt(0);
      const row2 = seat2.charAt(0);
      const number1 = parseInt(seat1.slice(1), 10);
      const number2 = parseInt(seat2.slice(1), 10);

      if (row1 !== row2) {
        return row1.localeCompare(row2);
      }
      return number1 - number2;
    })
    .map((seat) => seat)
    .join(", ");
};

export const convertStringToIndexSeat = (seat: string) => {
  const row = seat.charAt(0).charCodeAt(0) - 65;
  const column = parseInt(seat.slice(1), 10) - 1;

  return { row, column };
};
