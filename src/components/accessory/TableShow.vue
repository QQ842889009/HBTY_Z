<template>
  <div class="tsBox">
    <div class="firBox">
      <ul>
        <li>
          <span>一次供温：</span><span>{{ stationData.TE11 }}</span>
        </li>
        <li>
          <span>一次回温：</span><span>{{ stationData.TE12 }}</span>
        </li>
        <li>
          <span>一次供压：</span><span>{{ stationData.PT11 }}</span>
        </li>
        <li>
          <span>一次回压：</span><span>{{ stationData.PT12 }}</span>
        </li>
        <li>
          <span>一网流量：</span><span>{{ stationData.FT11 }}</span>
        </li>
        <li>
          <span>调节阀门：</span><span>{{ stationData.FV1FB }}</span>
        </li>
        <li>
          <span>一网热量：</span><span>{{ stationData.Q1 }}</span>
        </li>
      </ul>
    </div>
    <div class="secBox">
      <ul>
        <li>
          <span>二次供温：</span><span>{{ stationData.TE21 }}</span>
        </li>
        <li>
          <span>二次回温：</span><span>{{ stationData.TE22 }}</span>
        </li>
        <li>
          <span>二次供压：</span><span>{{ stationData.PT21 }}</span>
        </li>
        <li>
          <span>二次回压：</span><span>{{ stationData.PT22 }}</span>
        </li>
        <li>
          <span>二网流量：</span><span>{{ stationData.FT21 }}</span>
        </li>
        <li>
          <span>调节阀门：</span><span>{{ stationData.FV2FB }}</span>
        </li>
        <li>
          <span>循环水泵：</span><span>{{ stationData.Q2 }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    stationData: Object,
  },
};
</script>

<style lang="scss" scoped>
.tsBox {
  // background-color: #061028;
  // background-color: red;
  width: 96%;
  height: 100%;
  // border-top: 2px solid #1bb9e1;
  // padding: 10px;
  margin-top: 20px;
  margin-left: 10px;
  // font-weight: 700;
  // font-size: 0.31rem;
  // color: aliceblue;
  display: flex;
  justify-content: space-between;
  //  overflow: hidden;
  .firBox {
    // border: 1px solid red;
    width: 49%;
  }
  .secBox {
    // border: 1px solid blue;
    width: 49%;
  }
  ul {
    height: 97.5%; //填项调节此处高度
    display: flex;
    flex-direction: column;
    // justify-content: space-between;
    li:hover {
      // color: #5aa6d4;
      box-shadow: inset 0 0px 6px 2px #00bae4;
      // font-weight: 700;
      // font-size: 0.31rem;
      /* 强制修改背景颜色 */
      background-color: #0c5505 !important;
    }
    li {
      height: 12%; //填项调节此处高度
      width: 100%;
      display: flex;
      // justify-content: space-around;

      align-items: center;
      span {
        position: relative;
        left: 0.41rem;
      }
    }

    li:nth-of-type(odd) {
      background-color: #14375c;
      background-color: #22e975;
      //  background-color: transparent;
    }
    li:nth-of-type(even) {
      background-color: #060f29;
      background-color: #37383f;
    }
  }
}
</style>
