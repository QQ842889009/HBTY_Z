/** 换热站 温度控制*/
<template>
  <div>
    <div class="block">
      <span class="demonstration"></span>
      <el-cascader
        :options="options"
        :props="{ checkStrictly: true }"
        clearable
        @change="handleChange"
      ></el-cascader>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      options: [
        {
          value: "1#站",
          label: "1#站",
          children: [
            {
              value: "世纪1",
              label: "世纪1",
              children: [
                {
                  value: "1#楼",
                  label: "1#楼",
                  children: [
                    {
                      value: "1单元",
                      label: "1单元",
                    },
                    {
                      value: "2单元",
                      label: "2单元",
                    },
                    {
                      value: "3单元",
                      label: "3单元",
                    },
                  ],
                },
              ],
            },

            {
              value: "世界2",
              label: "世界2",
              children: [
                {
                  value: "16#楼",
                  label: "16#楼",
                  children: [
                    {
                      value: "1单元",
                      label: "1单元",
                    },
                    {
                      value: "2单元",
                      label: "2单元",
                    },
                    {
                      value: "3单元",
                      label: "3单元",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    };
  },
  methods: {
    handleChange(value) {
      console.log("***", value);
    },
  },
};
</script>
<style lang="scss">
</style>
