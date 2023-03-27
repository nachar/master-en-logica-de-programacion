const movies = [
  { title: "Jurassic Park", seen: true },
  { title: "Lord of the Rings", seen: true },
  { title: "Star Wars", seen: true },
  { title: "Titanic", seen: false },
  { title: "The Matrix", seen: false },
  { title: "Avatar", seen: true },
  { title: "The Avengers", seen: true },
  { title: "Harry Potter and the Philosopher's Stone", seen: false },
  { title: "The Lion King", seen: true },
  { title: "Forrest Gump", seen: false }
];


const moviesSeen = () => {
  return movies.filter((movie) => movie.seen);
}

console.log(moviesSeen());
