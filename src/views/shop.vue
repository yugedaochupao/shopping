<template>
    <div class="page">
      <div class="header">

        <div class="logo">
          <img src="../assets/shoplog.png">
        </div>
        <div class="search-bar">
          <input type="text" placeholder="搜索宝贝..">
          <button class="search-btn">搜索</button>
        </div>
        <div class="user-actions">
          <p>联系客服</p>
          <p>购物车</p>
          <p>收藏夹</p>
        </div>
      </div>
  
      <div class="main-content">
        <div class="product-list">
          <div class="product">
            <img src="../assets/NyusnocrZUdhZL0yIb0C9w.jpg">
            <div class="product-details">
              <h2 class="product-name">风味牛肉干</h2>
              <p class="product-description">好吃的一</p>
              <p class="product-price">¥180</p>
              <button class="add-to-cart">加入购物车</button>
            </div>
          </div>
          <div class="product">
            <img src="../assets/mike.png">
            <div class="product-details">
              <h2 class="product-name">戀職人鲜牛奶</h2>
              <p class="product-description">不是所有牛奶都叫戀職人</p>
              <p class="product-price">¥9800</p>
              <button class="add-to-cart">加入购物车</button>
            </div>
          </div>
          <div class="product">
            <img src="../assets/2018111173358696.jpg">
            <div class="product-details">
              <h2 class="product-name">大胆爱</h2>
              <p class="product-description">xxxxxx</p>
              <p class="product-price">¥20</p>
              <button class="add-to-cart">加入购物车</button>
            </div>
          </div>
  

        </div>
      </div>
  
      <div class="footer">
        <p>李叶皓</p>
      </div>
    </div>
  </template>
  
  <style>
  .page {
    font-family: 'Arial', sans-serif;
  }
  
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: gray;
    color: white;
  }
  
  .logo img {
    width: 80px;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
  }

  .search-bar {
  display: flex;
  justify-content: center; 
  margin-top: 20px;
}
.search-container {
  position: relative;
  display: flex;
}
  
.input {
  padding: 12px;
  border: none;
  border-radius: 25px;
  outline: none;
  width: 250px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
.input:focus {
  box-shadow: 0 0 8px rgba(255, 69, 0, 0.6);
}
  
.search-btn {
  background-color: #ff4500;
  border: none;
  border-radius: 25px;
  padding: 10px;
  margin-left: -40px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}
.search-btn:hover {
  background-color: #ff5722;
}
  
  .user-actions {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 20px;
  }
  
  .main-content {
    padding: 20px;
  }
  
  .product-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 20px;
  }
  
  .product {
    border: 1px solid #ccc;
    border-radius: 8px;
    overflow: hidden;
  }
  
  .product img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .product-details {
    padding: 16px;
  }
  
  .product-name {
    font-size: 16px;
    margin-bottom: 8px;
  }
  
  .product-description {
    font-size: 14px;
    margin-bottom: 8px;
  }
  
  .product-price {
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 8px;
    color: #ff4500;
  }
  
  .add-to-cart {
    width: 100%;
    padding: 8px;
    background-color: #ff4500;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .footer {
    padding: 20px;
    background-color: #f5f5f5;
    text-align: center;
    position: fixed;
    bottom: 0;
    width: 100%;
  }

  </style>
  

  