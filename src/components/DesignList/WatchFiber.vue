<template>
  <div class="WatchFiber pb-12">
    <div class="Fiber">
      <span class="text-base font-bold">Màu chỉ</span>
      <div class="text-xs mt-2 text-very-dark-gray">
        **Màu sắc thực tế sẽ có thể không chính xác như màu hiển thị trên web.
        Heritela sẽ tìm màu gần nhất cho bạn.
      </div>

      <div class="flex mt-5">
        <div
          v-for="(item, i) in colors"
          :key="i"
          class="flex flex-col justify-center w-1/6 text-xs"
        >
          <div
            :class="item.class"
            class="border pb- rounded-full mx-auto w-16 h-16"
          ></div>
          <v-radio-group v-model="row" row class="mx-auto mt-0">
            <v-radio
              :label="item.text"
              :value="item.value"
              class="radio text-center"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
      <div class="flex items-center mx-auto w-1/3">
        <div class="flex justify-center mx-auto">
          <v-btn
            color="primary"
            text
            @click="redirect(x.link)"
            class="text-sm capitalize"
          >
            <v-icon color="blue darken-2"> mdi-chevron-left</v-icon>
            <span class="capitalize">Pre</span>
          </v-btn>
        </div>
        <div class="flex justify-center mx-auto">
          <v-btn color="primary" text @click="redirect(x.link)" class="text-sm">
            <span class="capitalize">Next</span>
            <v-icon color="blue darken-2"> mdi-chevron-right</v-icon>
          </v-btn>
        </div>
      </div>
    </div>

    <div class="Paint mt-10">
      <span class="text-base font-bold">Màu sơn cạnh</span>
      <div class="text-xs mt-2 text-very-dark-gray">
        **Màu sắc thực tế sẽ có thể không chính xác như màu hiển thị trên web.
        Heritela sẽ tìm màu gần nhất cho bạn.
      </div>

      <div class="flex mt-5">
        <div
          v-for="(item, i) in colors"
          :key="i"
          class="flex flex-col justify-center w-1/6 text-xs"
        >
          <div
            :class="item.class"
            class="border pb- rounded-full mx-auto w-16 h-16"
          ></div>
          <v-radio-group v-model="row" row class="mx-auto mt-0">
            <v-radio
              :label="item.text"
              :value="item.value"
              class="radio text-center"
            ></v-radio>
          </v-radio-group>
        </div>
      </div>
      <div class="flex items-center mx-auto w-1/3">
        <div class="flex justify-center mx-auto">
          <v-btn
            color="primary"
            text
            @click="redirect(x.link)"
            class="text-sm capitalize"
          >
            <v-icon color="blue darken-2"> mdi-chevron-left</v-icon>
            <span class="capitalize">Pre</span>
          </v-btn>
        </div>
        <div class="flex justify-center mx-auto">
          <v-btn color="primary" text @click="redirect(x.link)" class="text-sm">
            <span class="capitalize">Next</span>
            <v-icon color="blue darken-2"> mdi-chevron-right</v-icon>
          </v-btn>
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
    colors: [
      {
        text: "Tiêu chuẩn, cùng màu da",
        class: "bg-white",
        value: "standard",
      },
      {
        text: "Đỏ",
        class: "bg-red",
        value: "red",
      },
      {
        text: "Đen",
        class: "bg-dark",
        value: "dark",
      },
      {
        text: "Be",
        class: "bg-alabaster",
        value: "alabaster",
      },
      {
        text: "Xanh rêu",
        class: "bg-green",
        value: "green",
      },
      {
        text: "Vàng",
        class: "bg-yellow",
        value: "yellow",
      },
    ],
  }),
};
</script>
<style>
.radio {
  font-size: 10px !important;
}
</style>