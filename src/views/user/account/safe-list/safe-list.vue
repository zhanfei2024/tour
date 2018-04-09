<template>
  <div class="user-center-page user-safe-list-page">
    <!-- 个人信息 -->
    <div class="custom-card">
        <h1 class="card-title">安全设置</h1>
        <div class="card-box">
            <div class="safe-item">
                <div class="safe-text">
                    <div class="safe-logo"><Icon type="ios-locked"></Icon></div>
                    <section class="safe-introduce">
                        <p class="safe-title">登录密码</p>
                        <p class="safe-info">建议您定期更换密码，设置安全性高的密码可以使帐号更安全</p>
                    </section>
                </div>
                <Button>修改</Button>
            </div>

            <div class="safe-item">
                <div class="safe-text">
                    <div class="safe-logo"><Icon type="iphone"></Icon></div>
                    <section class="safe-introduce">
                        <p class="safe-title">安全手机 186****5678</p>
                        <p class="safe-info">安全手机可以用于登录帐号，重置密码或其他安全验证</p>
                    </section>
                </div>
                <Button><router-link :to="'/user/123/phone-set'">更换</router-link></Button>
            </div>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data() {
    return {

    }
  },
  components: {

  }
}
</script>

<style scoped lang="scss">
</style>
