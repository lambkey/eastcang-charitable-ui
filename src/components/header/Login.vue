<template>
  <div>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: none;" _mstvisible="0" aria-hidden="true">
      <div class="modal-dialog" _mstvisible="1">
        <div class="modal-content" _mstvisible="2">
          <div class="modal-header" _mstvisible="3">
            <h1 class="modal-title fs-5" id="exampleModalLabel" _msttexthash="658957" _msthash="306" _mstvisible="4" _msthidden="1">欢迎登录</h1>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭" _mstaria-label="59709" _msthash="307" _mstvisible="4"></button>
          </div>
          <div class="modal-body" _mstvisible="3">

            <div class="btn-group" role="group" >
              <button class="btn btn-light" :class="{ active: selectedOption === 'phone' }" @click="selectedOption = 'phone'">手机验证</button>
              <button class="btn btn-light" :class="{ active: selectedOption === 'username' }" @click="selectedOption = 'username'">账号密码</button>
              <button class="btn btn-light" :class="{ active: selectedOption === 'other' }" @click="selectedOption = 'other'">其他方式</button>
            </div>


            <!-- 手机验证码登陆验证表单-->
            <form _mstvisible="4">
              <div id="phone-login-fields" v-if="selectedOption === 'phone'">

                <div class="mb-3" _mstvisible="5">
                  <label for="phone" class="col-form-label">手机号：</label>
                  <input type="text" class="form-control input-long" id="phone">
                </div>
                <div class="col-md-6 mb-3">
                  <label for="verification-code" class="col-form-label">验证码：</label>
                  <div class="verify-login">
                    <input type="text" class="form-control" id="verification-code">&nbsp;&nbsp;
                    <div>
                      <button type="button" class="btn btn-info" :disabled="isSending" @click="sendVerificationCode">
                        <span v-if="!isSending">发送验证码</span>
                        <span v-else>正在发送... {{ countdown }}</span>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
                  <button type="button" class="btn btn-primary">登录</button>
                </div>
              </div>
            </form>

            <!-- 账号密码验证登录表单-->
            <form _mstvisible="4">
              <div id="username-login-fields" v-if="selectedOption === 'username'">
                <div class="mb-3" _mstvisible="5">
                  <label for="username" class="col-form-label" _msttexthash="15307864" _msthash="308" _mstvisible="6">账号：</label>
                  <input type="text" class="form-control" id="username" _mstvisible="6">
                </div>
                <div class="mb-3" _mstvisible="5">
                  <label for="password" class="col-form-label" _msttexthash="12759890" _msthash="309" _mstvisible="6">密码：</label>
                  <input type="password" class="form-control" id="password" _mstvisible="6">
                </div>
                <div class="mb-3">
                  <div class="row">
                    <div class="col">
                      <input type="text" id="verification-input" class="form-control" placeholder="请输入验证码" />
                      <!-- 其他验证码输入相关的内容 -->
                    </div>
                    <div class="col">
                      <div class="image-container">
                        <img src="../../static/img/1f1ddc8a59c3dbf0b8ce7d87a1cd3606.jpg" alt="验证码" class="verification-image" />
                        <!-- 其他生成验证码相关的内容 -->
                      </div>
                    </div>
                  </div>
                </div>
                <div class="modal-footer" _mstvisible="3">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" _msttexthash="5889065" _msthash="310" _mstvisible="4">取消</button>
                  <button type="button" class="btn btn-primary" _msttexthash="12276537" _msthash="311" _mstvisible="4">登录</button>
                </div>
              </div>
            </form>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Login',
  data(){
    return{
      selectedOption:'phone',

      isSending: false,
      countdown: 60,
      timer: null
    }
  },
  methods:{
    sendVerificationCode() {
      // 模拟发送验证码的异步操作
      this.isSending = true;
      // 假设发送成功后开始倒计时
      this.startCountdown();

      // 模拟异步请求完成后的操作，例如调用后端发送验证码的接口
      setTimeout(() => {
        // 发送成功后的操作
      }, 2000);
    },
    startCountdown() {
      // 设置倒计时初始值
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown--;
        } else {
          this.stopCountdown();
        }
      }, 1000);
    },
    stopCountdown() {
      clearInterval(this.timer);
      this.timer = null;
      this.isSending = false;
    }
  }
}
</script>
<style scoped>



.modal-content{
  margin-top: 200px;
}
.mb-3{
  margin: 30px 30px 10px 30px;
}
.image-container {
  display: flex;
  justify-content: center;
  align-items: center;
}


.verification-image {
  max-width: 44%;
}
.btn-group {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}

.login-option-buttons button.active {
  background-color: #007bff;
}
.verify-login {
  display: flex;
}

.verify-login input {
  flex: 1;
  margin-right: 10px;
}

.verify-login button {
  flex: 0 0 auto;
}


@media (max-width: 768px) {
  .modal {
    margin-top: 50px;
    width: 90%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .modal-content{
    margin-top: 80px;
  }
  .btn-group {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
    font-size: 2px;
  }
}
</style>
