import { GenreResponseProps } from '../@types/GenreReponseProps';
import { MovieProps } from '../@types/MovieProps';
import { Header } from './Header';
import { MovieCard } from './MovieCard';

interface ContentProps {
  selectedGenre: GenreResponseProps;
  movies: MovieProps[];
}
export const Content: React.FC<ContentProps> = ({ selectedGenre, movies }) => {
  return (
    <div className="container">
      <Header>
        <span className="category">
          Categoria:<span> {selectedGenre.title}</span>
        </span>
      </Header>

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value}
            />
          ))}
        </div>
      </main>
    </div>
  );
};
