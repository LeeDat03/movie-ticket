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
