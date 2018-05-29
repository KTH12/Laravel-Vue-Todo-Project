<template>
  <div class="l-register">
    <register ></register>
  </div>
</template>

<script>
import Register from '@/components/authentication/Register';

export default {
  components: {
    register: Register,
  },
  created() {
    // 뷰가 생성되고 데이터가 이미 감시 되고 있을 때 데이터를 가져온다.
    // console.error(process.env.API_URL);
  },
};
</script>

<style lang="css" >
  .l-register {
    flex: 1;
  }
</style>
