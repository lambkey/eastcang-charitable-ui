<template>

<!-- 轮播图 -->
    <Carousel/>
<!-- 捐赠总人数、总金额-->
    <Donations :initial-amount="donationAmount" :initial-count="donationCount"/>
    <BoxFloat/>
    <DonationerLists/>

</template>

<script>
import Carousel from "../../components/home/Carousel";
import Donations from "../../components/home/Donations";
import BoxFloat from "../../components/home/BoxFloat";
import DonationerLists from "../../components/home/DonationerLists";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home',
  components: {DonationerLists, BoxFloat, Donations, Carousel},
  data(){
    return{
      donationCount:1000,
      donationAmount:2000
    }
  }
}
</script>
