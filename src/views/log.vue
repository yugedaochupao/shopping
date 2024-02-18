<template>
    <div class="log">
        <div class="abox">
            <div class="box">
                <div class="text">
                    <div >
                        <img src="../assets/12639c5fad8a7a884f47ed84aa8f11f.png">
                    </div>


                </div>
                <div class="user">
                    <div class="text1">Username(Teacher No./Student No.):</div>
                    <input id="username" name="username" v-model="username" class="input-1" type="text" style=" padding-left: 10px; width: 90%; height: 49%;border-radius: 4px; border: none; ">

                </div>
                <div class="password">
                    <div class="text2">Password(Same as URP platform):</div>
                    <input id="password" name="password" v-model="password" class="i2" type="password" style="padding-left: 10px; width: 90%; height: 49%;border-radius: 4px;border: none;background: rgb(240, 240, 240);">
                </div>

                <div class="bu">
                    <button class="butt" style="font-size: 14px; font-weight: bold;" @click="login">LOGIN</button>
                    

                </div>
                {{loginresult}}

            </div>

        </div>

    </div>



    
</template>

<style>
.abox{
    width: 100%;
    height: 1200px;
    border: 2px solid #000;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url('../assets/1d995a32f9727f8c24d730bb51d4611.png') ;
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
.box{
    width: 350px;
    height: 380px;
    /* border: 1px solid #000; */
    background: rgb(255, 255, 255);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    border: none;
}
.text{
    width: 100%;
    height: 95px;
    /* border: 1px solid #000; */
    margin: 0px 0px 12px 0px;
    display: flex;

    align-items: center;
    justify-content: center;

}
.user{
    width: 90%;
    height: 80px;
    /* border: 1px solid #000; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2px 2px 8px 0;
}
.password{
    width: 90%;
    height: 80px;
    /* border: 1px solid #000; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 2px 2px 8px 0;
}
.butt{
    width: 98%;
    height: 40px;
    background: rgb(2, 192, 192);
    color: aliceblue;
    border: darkblue;
    border-radius: 4px 4px 4px 4px;
    cursor: pointer;

}
.bu{
    width: 90%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
}
.text1{
    width: 95%;
    height: 30%;
    font-size: 15px;
    color: gray;
    text-align: left;
    margin: 3px 3px 3px 9px;

}
.text2{
    width: 95%;
    height: 30%;
    font-size: 15px;
    color: gray;
    text-align: left;
    margin: 3px 3px 3px 9px;

}
.input-1{
    transition:0.3s;
    background: rgb(240, 240, 240);
    border:none;



}
.input-1:hover{
    background: rgb(255, 255, 255);
    border: 2px solid rgb(2, 192, 192);

}
.i2:hover{
    background: rgb(255, 255, 255);

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
      if (this.username === '123' && this.password === '123' ||
       this.username === '1234' && this.password === '12345' ||
       this.username === 'D21090103670' && this.password === '123' ) {
        this.loginresult = '登录成功';
      } else {
        this.loginresult = '登录失败';
      }
    },
  },
};

    </script>