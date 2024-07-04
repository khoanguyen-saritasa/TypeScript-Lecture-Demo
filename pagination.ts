type Movie = {
  episode: number;
  name: string;
};

type Anime = {
  episode: number;
  name: string;
  time: string;
};

type Pagination<T> = {
  total: number;
  currentPage: number;
  items: T[];
};

type PaginationMovie = Pagination<Movie>;
type PaginationAnime = Pagination<Anime>;

const movies: PaginationMovie = {
  total: 1,
  currentPage: 2,
  items: [{ episode: 1, name: "12312" }],
};

const anime: PaginationAnime = {
  total: 1,
  currentPage: 2,
  items: [{ episode: 1, name: "12312", time: "" }],
};
