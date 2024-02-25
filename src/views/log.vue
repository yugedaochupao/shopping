<template>
    <div class="shopping-login">
      <div class="login-box">
        <!-- <div class="logo">
          <img src="../assets/shoplogo.png">
        </div> -->
        <div class="user">
          <label for="username" class="label">用户名:</label>
          <input id="username" name="username" v-model="username" class="input" type="text" placeholder="账号名/邮箱/手机号" autocomplete="off">
        </div>
        <div class="password">
          <label for="password" class="label">密码:</label>
          <input id="password" name="password" v-model="password" class="input" type="password" placeholder="请输入登录密码" autocomplete="off">
        </div>
        <div class="login-button">
          <button class="login-btn" @click="login">登录</button>
        </div>
        <div class="additional-info">
            <p class="additional-text">忘记密码</p>
            <p class="additional-text">忘记账号名</p>
            <p class="additional-text">免费注册</p>
          </div>
        <div class="login-result">
          {{ loginresult }}
        </div>
      </div>
    </div>
  </template>
  
  <style>
  .shopping-login {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/shop.png');
    background-size: cover;
  }
  
  .login-box {
    width: 350px;
    background: rgba(255, 255, 255, 0.9);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    text-align: center;
  }
  
  /* .logo img {
    width: 80px;
    height: 80px;
    margin-bottom: 20px;
  }
   */
  .user,
  .password {
    margin-bottom: 20px;

  }
  
  .label {
    font-size: 16px;
    color: #333;
    display: block;
    margin-bottom: 5px;
  }
  
input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
  }
  
  .login-button {
    margin-bottom: 20px;
  }
  
  .login-btn {
    width: 100%;
    height: 40px;
    background: rgb(194, 26, 26);
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
  }

  .additional-info {
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #333;
  }

.additional-text {
  cursor: pointer;
  }

.login-result {
    color: rgb(0, 0, 0);
    font-size: 14px;
    font-weight: bold;
  }
  </style>
  


  <script>
    export default {
      data() {
        return {
            username: '',
            password: '',
            loginresult: '',
    };
  },
      methods: {
        login() {
            if (this.username === '123' && this.password === '123') {
            this.loginresult = '登录成功';
            this.$router.push('/shop'); // 登录成功后重定向到商品页面
          } else {
            this.$data.loginresult = '登录失败';
          }
        },
      },
    };
    </script>