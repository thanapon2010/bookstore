import React ,{ useState }from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Link,Routes } from 'react-router-dom';
import './App.css';
import CartPage from './CartPage';
import PromotionPage from './PromotionPage';


export function calculateDiscount(){}

function App() {
  const books = [
    {
      title: 'Book 1',
      author: 'Author 1',
      description: 'Description of Book 1',
      price: 100,
      image: 'images/book1.jpg',
    },
    {
      title: 'Book 2',
      author: 'Author 2',
      description: 'Description of Book 2',
      price: 100,
      image: 'images/book2.jpg',
    },
    {
      title: 'Book 3',
      author: 'Author 3',
      description: 'Description of Book 3',
      price: 100,
      image: 'images/book3.jpg',
    },
    {
      title: 'Book 4',
      author: 'Author 4',
      description: 'Description of Book 4',
      price: 100,
      image: 'images/book4.jpg',
    },
    {
      title: 'Book 5',
      author: 'Author 5',
      description: 'Description of Book 5',
      price: 100,
      image: 'images/book5.jpg',
    },
    {
      title: 'Book 6',
      author: 'Author 6',
      description: 'Description of Book 6',
      price: 100,
      image: 'images/book6.jpg',
    },
    {
      title: 'Book 7',
      author: 'Author 7',
      description: 'Description of Book 7',
      price: 100,
      image: 'images/book7.jpg',
    },
  
  ];

  const [cart, setCart] = useState([]);
  
  function addToCart(book) {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(item => item.title === book.title);

    if (existingItem) {
      existingItem.quantity += 1;
    } else {
      updatedCart.push({ ...book, quantity: 1 });
    }

    setCart(updatedCart);
  }

  const removeFromCart = (book) => {
    const updatedCart = cart.filter(item => item !== book);
    setCart(updatedCart);
  };


  function calculateDiscount(index) {
    return 0;
  }

  const [isPromotionModalOpen, setPromotionModalOpen] = useState(false);

  const openPromotionModal = () => {
    setPromotionModalOpen(true);
  };

  const closePromotionModal = () => {
    setPromotionModalOpen(false);
  };


  return (
    <Router>
      <div className="container">
        <div className="top-bar">
          <h1>ร้านหนังสือ บ้านนายดิน</h1>
          <button className='btn'>หนังสือใหม่</button>
          <button className='btn' onClick={openPromotionModal}>โปรโมชั่น</button> 
          <button className='btn'>สอบถามเพิ่มเติม</button>
          <Link to="/cart" className="btn">ตะกร้า</Link>
        </div>
        
        <Routes>
          <Route path="/cart" element={<CartPage cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>

        <div className="books-grid">
          {books.map((book, index) => {
            const discount = calculateDiscount(cart.filter(item => item.title === book.title).length);
            const discountedPrice = book.price * (1 - discount);

            return (
              <div className="book-item" key={index}>
                <div className="book-image">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="book-details">
                  <h3>{book.title}</h3>
                  <p>ผู้เขียน: {book.author}</p>
                  <p>{book.description}</p>
                  <p>ราคา: {discountedPrice.toFixed(2)} บาท</p>
                  <button onClick={() => addToCart(book)}>Add to Cart</button>
                </div>
              </div>
            );
          })}
        </div>
        <PromotionPage isOpen={isPromotionModalOpen} closeModal={closePromotionModal} />
      </div>
    </Router>
  );
}

export default App;