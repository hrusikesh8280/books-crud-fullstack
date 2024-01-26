import logo from './logo.svg';
import './App.css';
import BookCard from './components/BookCard';
import BookForm from './components/BookForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
     <BookForm />
     <Footer/>
    </div>
  );
}

export default App;
