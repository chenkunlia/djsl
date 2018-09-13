<template>
  <div id="Login" class="login-container">
    <header-top head-title="监控移动应用平台登录" goBack="true"></header-top>
    <group>
      <x-input placeholder="用户名/手机号" v-model="userName"></x-input>
      <x-input placeholder="登录密码" v-model="userPass"></x-input>
      <x-input placeholder="验证码">
        <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
      </x-input>
    </group>
    <group style="padding:5px 20px;">
      <x-button type="primary" class="login-button" action-type="button" @click.native="login">登录</x-button>
    </group>
    <group>   
      <router-link to="/changePassword"  style="align:left">修改密码</router-link>  
      <span>&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;&thinsp;</span> 
      <router-link to="/forgetPassword" style="align:right">忘记密码</router-link>      
    </group>    
  </div>
</template>

<script>
  import HeaderTop from '@/components/Header'
  import { Group, Cell, XInput, XButton } from 'vux'
  export default {
    components: {
      Group,
      Cell,
      XInput,
      XButton,
      HeaderTop
    },
    data () {
      return {
        userName: '',
        userPass: ''
      }
    },
    methods: {
      login(){
        let vue = this
        vue.$router.push({name: 'userInfo', params: {}})
      }
    }
  }
</script>

<style>
  .login-container{
    padding-top: 4.2rem;
  }
  .vux-demo {
    text-align: center;
  }
  .logo {
    width: 100px;
    height: 100px
  }
  .login-button{
      color: rgb(71, 166, 236);
  }
</style>