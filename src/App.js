import './App.css';
import { Routes, Route } from "react-router-dom";
import BookList from './componentes/BookList';
import BookDetails from './componentes/BookDetails';
import Favourites from './componentes/Favourites';
import NavBar from './componentes/NavBar';
import Footer from './componentes/Footer';


function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookDetails />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
