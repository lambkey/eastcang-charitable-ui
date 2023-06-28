<template>
  <div class="donation-counter">

    <div class="donation-counter-item">
      <div><h1 class="donation-counter-label">捐赠总人数</h1></div>
      <span class="donation-counter-value">{{ donationCount }}</span>
      &nbsp;
      <span class="donation-counter-unit">人</span>
    </div>
    <div class="donation-counter-item">
      <div><h1 class="donation-counter-label">捐赠总金额</h1></div>
      <span class="donation-counter-value">{{ donationAmount }}</span>
      &nbsp;
      <span class="donation-counter-unit">元</span>
    </div>
  </div>
  <div class="separator"></div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Donations',
  data() {
    return {
      donationCount: 0,
      donationAmount: 0
    };
  },
  props: {
    initialCount: {
      type: Number,
      default: 0
    },
    initialAmount: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.animateCounter();
  },
  methods: {
    animateCounter() {
      const targetCount = this.initialCount;
      const targetAmount = this.initialAmount;
      const duration = 2000; // Animation duration in milliseconds
      const frameDuration = 16; // Frame duration in milliseconds

      const countIncrement = (targetCount - this.donationCount) / (duration / frameDuration);
      const amountIncrement = (targetAmount - this.donationAmount) / (duration / frameDuration);

      let currentCount = 0;
      let currentAmount = 0;

      const interval = setInterval(() => {
        currentCount += countIncrement;
        currentAmount += amountIncrement;

        this.donationCount = Math.round(currentCount);
        this.donationAmount = Math.round(currentAmount);

        if (currentCount >= targetCount && currentAmount >= targetAmount) {
          clearInterval(interval);
        }
      }, frameDuration);
    }
  }
};
</script>

<style scoped>
.donation-counter {
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: Arial, sans-serif;
  font-size: 28px;
  color: #2196F3;
  border: none;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 30px rgba(33, 150, 243, 0.8);
  height: 200px;
  width: 50%;
  margin: 80px auto 0;
}


.donation-counter-item {
  flex: 1;
  text-align: center;
}

.donation-counter-value {
  font-weight: bold;
  font-size: 30px;
}

.donation-counter-label {
  font-size: 25px;
  font-weight: bolder;
  color: gray;
}

.donation-counter-unit {
  color: #FFA500;
  text-shadow: 0 0 10px #FFA500, 0 0 80px #FFA500, 0 0 30px #FFA500;
}

.separator {
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, red, blue);
  margin: 80px 0 80px 0;
}
@media (max-width: 768px) {
  .donation-counter {
    font-size: 18px;
    width: 60%;
    margin: 20px auto;
    padding: -1px;
    height: 50%;
  }

  .donation-counter-item {
    flex: none;
    margin-bottom: 10px;
    padding: 10px;
  }

  .donation-counter-value {
    font-size: 18px;
  }

  .donation-counter-label {
    font-size: 16px;
  }

  .donation-counter-unit {
    font-size: 16px;
  }

  .separator {
    margin: 20px 0;
  }

}
</style>








