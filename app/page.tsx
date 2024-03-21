import MovieCardList from "@/components/movie-card-list";

export default function page() {
  return (
    <section className="mt-4 mb-10">
      <h1 className="text-6xl font-bold text-center mb-10">Now showing</h1>

      <MovieCardList />
    </section>
  );
}
