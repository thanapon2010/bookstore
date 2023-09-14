
import React from 'react';
import ReactModal from 'react-modal';
import './PromotionPage.css'; 

function PromotionPage({ isOpen, closeModal }) {
  return (
    <ReactModal
      isOpen={isOpen}
      contentLabel="โปรโมชั่น"
      onRequestClose={closeModal}
      className="custom-modal" 
      overlayClassName="custom-modal-overlay" >

      <div className='promotion'>
      <h2>โปรโมชั่น</h2>
      <center><h5>
      <p>ซื้อเล่มไม่ซ้ำกัน 2 เล่ม ลด 10% ของ 2 เล่มนั้น</p>
      <p>ซื้อเล่มไม่ซ้ำกัน 3 เล่ม ลด 20% ของ 3 เล่มนั้น</p>
      <p>ซื้อเล่มไม่ซ้ำกัน 4 เล่ม ลด 30% ของ 4 เล่มนั้น</p>
      <p>ซื้อเล่มไม่ซ้ำกัน 5 เล่ม ลด 40% ของ 5 เล่มนั้น</p>
      <p>ซื้อเล่มไม่ซ้ำกัน 6 เล่ม ลด 50% ของ 6 เล่มนั้น</p>
      <p>ซื้อเล่มไม่ซ้ำกัน 7 เล่ม ลด 60% ของ 7 เล่มนั้น</p>
      </h5>
      <button onClick={closeModal} className='btnclose'>ปิด</button>
      </center>
      </div>

    </ReactModal>
  );
}

export default PromotionPage;

