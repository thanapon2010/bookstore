
import React from 'react';
import { Link } from 'react-router-dom';
import './CartPage.css';

function CartPage({ cart, removeFromCart }) {

  
  return (
    <div className="cart">
      <h2>ตะกร้าสินค้า</h2>
      <ul>
        {cart.map((item, index) => (
          <li key={index}>
            {item.title} ราคา {item.price} - จำนวน: {item.quantity} เล่ม
            <button onClick={() => removeFromCart(item)} className='btnremove'>ลบ</button>
          </li>
        ))}
      </ul>
      
      <p>ราคารวมทั้งหมด: {calculateTotalPriceInCart(cart)} บาท</p>
      <Link to="/" className='btn'>ปิด</Link>
    </div>
  );

  function calculateDiscountForUniqueBooks(uniqueBookCounts) {
    const count = Object.values(uniqueBookCounts).reduce((total, count) => total + count, 0);
  
    if (count === 2) {
      return 0.2; 
    } else if (count === 3) {
      return 0.4; 
    } else if (count === 4) {
      return 0.6; 
    } else if (count === 5) {
      return 0.8; 
    } else if (count === 6) {
      return 1; 
    } else if (count === 7) {
      return 1.2; 
    } else {
      return 0; 
    }
  }


  function calculateTotalPriceInCart(cart) {
    let totalPrice = 0;
    const uniqueBookCounts = {}; 
  
    cart.forEach(item => {
      
      if (!uniqueBookCounts[item.title]) {
        uniqueBookCounts[item.title] = 1;
      } else {
        uniqueBookCounts[item.title]++;
      }
  
      const discount = calculateDiscountForUniqueBooks(uniqueBookCounts); 
      const discountedPrice = item.price * (1 - discount);
      totalPrice += discountedPrice * item.quantity;
    });
  
    return totalPrice.toFixed(2);
  }
  
  
  
}

export default CartPage;
