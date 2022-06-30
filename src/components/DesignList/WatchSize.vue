<template>
  <div class="WatchFiber py-6">
    <div class="Fiber">
      <div class="grid grid-cols-2 gap-2">
        <div class="w-full pr-2 flex flex-col">
          <span class="text-base font-bold mb-1">Size chiều rộng dây</span>
          <v-select
            :items="items1"
            placeholder="Chọn size chiều rộng dây"
            dense
            outlined
            height="41"
          ></v-select>
        </div>
        <div class="w-full pl-2 flex flex-col">
          <span class="text-base font-bold mb-1">Size chiều dài dây</span>
          <v-select
            :items="items1"
            placeholder="Chọn size chiều dài dây"
            dense
            outlined
            height="41"
          ></v-select>
          <button type="button" class="text-left ml-3 mt-3 text-xs text-picklock">
            Tham khảo Bảng Kích thước chiều dài khuyến nghị
          </button>
        </div>
      </div>

      <div class="flex justify-between mt-5">
          <div v-for="(item, i) in options" :key="i" class="flex items-center">
              <div class="border rounded-full h-5 w-5 text-xs align-bottom  text-center mr-4">{{item.number}}</div>
              <div class="text-sm">{{item.text}}</div>
          </div>
      </div>
    </div>

    <div class="Paint mt-10">
      <span class="text-base font-bold">Loại độn</span>
      <div class="flex mt-5">
        <div
          v-for="(item, i) in options2"
          :key="i"
          class="flex flex-col justify-center w-1/6 text-xs"
        >
          <div
            :class="item.class"
            class="border w-44 bg-picklock border-picklock relative h-28"
          ><span class="text-center align-middle top-1/2 absolute mx-auto w-full text-white text-xs"> Ảnh mô phỏng không độn  </span></div>
          <v-radio-group v-model="row" row plain class="mt-2">
            <v-radio
            plain
              :label="item.name"
              :value="item.name"
              class="radio text-center text-sm"
            ></v-radio>
          </v-radio-group>
          <span class="w-44">Dây không độn sẽ phù hợp với mặt đồng thông minh như Apple Watch, Samsung Watch, Garmin.</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WatchFiber",
  data: () => ({
    row: null,
    options: [
      {
        text: "Rộng ĐẦU dây",
        number: '1'
      },
      {
        text: "Rộng ĐUÔI dây",
        number: '2'
      },
      {
        text: "Dài dây bấm lỗ",
        number: '3'
      },
      {
        text: "Dài dây gắn khóa",
        number: '4'
      },
    ],
    options2: [
        {
            name:"Không độn"
        },
        {
            name:"Độn gù"
        },
        {
            name:"Độn Full viền"
        }   
    ]
  }),
};
</script>
<style>
.v-input__control {
  max-height: 41px !important;
}
.text-sm .v-input--selection-controls__input  .v-icon.v-icon {
    font-size: 12px;
    justify-content: left   ;
}
.v-input--selection-controls__input{
    margin-right: 0px !important;
}
</style>