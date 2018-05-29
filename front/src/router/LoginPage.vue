<template>
  <div class="l-login">
    <login ></login>
  </div>
</template>

<script>
import Login from '@/components/authentication/Login';

export default {
  components: {
    login: Login,
  },
  created() {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    // console.error(process.env.API_URL);
  },
};
</script>

<style lang="css" >
  .l-login {
    flex: 1;
  }
</style>
