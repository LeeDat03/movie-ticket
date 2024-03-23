export interface MovieProps {
  _id?: string;
  title: string;
  description: string;
  poster: string;
  director: string;
  duration: number;
}

export interface ScreenProps {
  _id?: string;
  movie: MovieProps;
  name: string;
  timeStarts: Date[];
  seats: {
    row: string;
    columns: number[];
    price: number;
  }[];
}
