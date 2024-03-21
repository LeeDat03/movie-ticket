"use client";

import MovieCardList from "@/components/movie-card-list";

import CreateMovieForm from "@/components/create-movie-form";

export default function page() {
  const onSubmit = async () => {
    try {
      const res = await fetch("api/movie/new", {
        method: "POST",
        body: JSON.stringify({
          title: "Elemental",
          description:
            "Follows Ember and Wade, in a city where fire-, water-, earth- and air-residents live together.",
          poster:
            "https://www.imdb.com/title/tt15789038/mediaviewer/rm1414736897/?ref_=tt_ov_i",
          director: "Peter Sohn",
        }),
      });
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <section className="mt-4">
      <h1 className="text-6xl font-bold text-center mb-10">Now showing</h1>

      {/* <MovieCardList /> */}

      <CreateMovieForm />
    </section>
  );
}
