"use client";

import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { movieFormSchema } from "@/utils/movie-form";

const CreateMovieForm = () => {
  const form = useForm<z.infer<typeof movieFormSchema>>({
    resolver: zodResolver(movieFormSchema),
    defaultValues: {
      title: "",
      description: "",
      poster: "",
      director: "",
      duration: 0,
    },
  });

  const onSubmit = async (data: z.infer<typeof movieFormSchema>) => {
    console.log(data);
    try {
      const res = await fetch("api/movie/new", {
        method: "POST",
        body: JSON.stringify({
          title: data.title,
          description: data.description,
          poster: data.poster,
          director: data.director,
          duration: Number(data.duration),
        }),
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onError = (err: any) => {
    console.log(err);
  };

  return (
    <div className="form__container mb-20">
      <h2 className="text-2xl mb-4 text-white font-bold">Create new movie</h2>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, onError)}
          className="space-y-4"
        >
          {/* TITLE */}
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DESC */}
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="Movie about..." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* POSTER */}
          <FormField
            control={form.control}
            name="poster"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Poster Url</FormLabel>
                <FormControl>
                  <Input placeholder="https://example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DIRECTOR */}
          <FormField
            control={form.control}
            name="director"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Director</FormLabel>
                <FormControl>
                  <Input placeholder="Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* DURATION */}
          <FormField
            control={form.control}
            name="duration"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Duration</FormLabel>
                <FormControl>
                  <Input
                    placeholder="120"
                    type="number"
                    {...field}
                    onChange={(e) => {
                      const value = Number(e.target.value);
                      field.onChange(value);
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="text-end space-x-4">
            <Button>Cancel</Button>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default CreateMovieForm;
