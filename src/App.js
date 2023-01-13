import './App.css';
import Rows from './components/Rows';
import requests from './request';
import Banner from './components/Banner';
import Nav from './components/Nav';







function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <Nav/>
     
      <Banner/>
      <Rows title="Trending Movies" fetchUrl={requests.fetchTrending} /> 
      <Rows title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isNetflix={true} />  {/* adding extra style for netflix orgin*/}
      <Rows title="Top Rated Movies" fetchUrl={requests.fetchTopRated} /> 
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} /> 
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} /> 
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} /> 
      <Rows title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies} /> 
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} /> 
    </div>
  );
}

export default App;
