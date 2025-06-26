import { useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import "../css/Home.css"
import { getPopularMovies, searchMovies } from "../services/api";

function Home() {
    const [searchQuery, setsearchQuery] = useState('');
    const [movies,setmovies] = useState([]);
    const [err,seterr] = useState(null)
    const [loading,setloading] = useState(true);

    useEffect(()=>{
        const loadPopularMovies = async () =>{
            try{
                const popularMovies = await getPopularMovies();
                setmovies(popularMovies);
            }catch (err) {
                console.log(err)
                seterr("Failed to Load movies..")
            }
            finally{
                setloading(false)
            }
        }

        loadPopularMovies();
    },[])

    const handleSearch = async (e) => {
        e.preventDefault();

        if (!searchQuery.trim()){
            return;
        } 
        if (loading){
            return;
        }
        setloading(true)
        try{

            const searchResults = await searchMovies(searchQuery); 
            setmovies(searchResults)
            seterr(null)

        }catch(err){
            console.log(err)
            seterr('Failed to search movies .. ')

        }finally{
            setloading(false)
        }

        setsearchQuery("");
        

    }
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for movies..." 
                className="search-input"
                value={searchQuery}
                onChange={(e)=>setsearchQuery(e.target.value)}>
                    
                </input>
                <button type="Submit" className="search-button">Search</button>
            </form>
             {err && <div className="error-message">{err}</div>}

      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="movies-grid">
          {movies.map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Home;