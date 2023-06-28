<template>
  <div>
    <div class="modal fade" id="registerModal" tabindex="-1" aria-labelledby="registerModalLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="registerModalLabel">注册</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="关闭"></button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-row">
                <div class="form-group col">
                  <label for="phone" class="col-form-label text-end">手机号：</label>
                  <input type="text" class="form-control" id="phone">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <label for="verification-code" class="col-form-label text-end">验证码：</label>
                  <div class="input-group">
                    <input type="text" class="form-control" id="verification-code">
                    <button class="btn btn-outline-secondary" type="button" @click="sendVerificationCode"
                            :disabled="isSending">
                      <template v-if="!isSending">
                        发送验证码
                      </template>
                      <template v-else>
                        正在发送... {{ countdown }}
                      </template>
                    </button>
                  </div>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <label for="username" class="col-form-label text-end">账号：</label>
                  <input type="text" class="form-control" id="username">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <label for="password" class="col-form-label text-end">密码：</label>
                  <input type="password" class="form-control" id="password">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col">
                  <label for="confirm-password" class="col-form-label text-end">确认密码：</label>
                  <input type="password" class="form-control" id="confirm-password">
                </div>
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">取消</button>
            <button type="button" class="btn btn-primary">注册</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Registry',
  data() {
    return {
      isSending: false,
      countdown: 60,
      timer: null
    };
  },
  methods: {
    sendVerificationCode() {
      this.isSending = true;
      this.startCountdown();

      setTimeout(() => {
        // 模拟发送验证码成功后的操作
      }, 2000);
    },
    startCountdown() {
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
      this.countdown = 60;
    }
  }
};
</script>

<style scoped>
.modal-content {
  margin-top: 200px;
}

.text-end {
  text-align: end;
}
@media (max-width: 768px) {
  .modal-content {
    margin-top: 20px;
  }
}
</style>
