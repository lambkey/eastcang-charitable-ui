<template>
  <div class="donation-container">
    <div class="parallelogram-container">
      <div class="parallelogram">
        <h2 class="parallelogram-title">捐赠榜</h2>
      </div>
    </div>
    <div class="right-column">
      <el-table :data="donations" border class="es-table"  style="width: 100%" >
        <el-table-column label="捐款人" prop="donor" align="center" v-slot="{ row }">
          <span>{{ row.donor }}</span>
        </el-table-column>
        <el-table-column label="捐款日期" prop="date" align="center"></el-table-column>
        <el-table-column label="捐款金额" prop="amount" align="center" v-slot="{ row }">
          <span :style="{ color: '#FFA500' }">{{ row.amount }}</span>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DonationerLists',
  data() {
    return {
      donations: [
        {
          donor: '张三',
          date: '2023-06-12',
          amount: '100元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        {
          donor: '李四',
          date: '2023-06-11',
          amount: '200元'
        },
        // 其他捐款记录...
      ]
    };
  }
};
</script>

<style scoped>
.parallelogram-container {
  display: flex;
  justify-content: center;
  margin-top: 30px;
}

.parallelogram {
  position: relative;
  width: 200px; /* Adjust the width as needed */
  height: 50px; /* Adjust the height as needed */
  background-color: #FFA500;
  transform: skew(-20deg); /* Adjust the skew angle as needed */
}

.parallelogram:before {
  content: "";
  position: absolute;
  top: 0;
  left: 11px; /* Adjust the negative left value to control the length */
  width: 40px; /* Adjust the width as needed */
  height: 100%;
  background-color: #FFA500;
  transform: skew(20deg); /* Adjust the skew angle to match the parallelogram */
}

.parallelogram-title {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
  color: white;
}
.donation-container {
  align-items: stretch;
}

.right-column {
  flex-grow: 1;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}
/* 移动端样式 */
@media (max-width: 768px) {
  .donation-container {
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  .right-column {
    margin-top: 20px;
  }

}
</style>

