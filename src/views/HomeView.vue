<template>
  <v-container>
    <v-breadcrumbs :items="items" divider=">" class="text-black">
      <template v-slot:item="{ item }">
        <v-breadcrumbs-item :disabled="item.disabled">
          <router-link
            :to="item.to"
            :style="`color: ${item.color}`"
            class="no-underline"
          >
            {{ item.text }}
          </router-link>
        </v-breadcrumbs-item>
      </template>
    </v-breadcrumbs>
    <step-by-step class="w-3/5"/>
    <v-card max-width="728" class="py-7">
      <div class="flex flex-col justify-center text-center">
        <span clas="m">Chọn sản phẩm mà bạn muốn tự thiết kế</span>
        <v-col class="d-flex mx-auto" cols="4" sm="4">
          <v-select
            :items="items1"
            :placeholder="items1[0]"
            dense
            outlined
          ></v-select>
        </v-col>
        <v-divider></v-divider>
        <v-col col="4" class="pt-8">
          <v-btn tile dark class="text-white bg-black" to="/design">
            BẮT ĐẦU THIẾT KẾ
          </v-btn>
        </v-col>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import StepByStep from "../components/StepByStep";

export default {
  name: "HomeView",

  components: {
    StepByStep,
  },
  data: () => ({
    items: [
      {
        text: "Trang chủ",
        disabled: false,
        to: "/",
        color: "black",
      },
      {
        text: "Đặt hàng tự thiết kế",
        disabled: false,
        to: "/about",
        color: "black",
      },
    ],
    items1: ["Dây da đồng hồ", "Bar", "Fizz", "Buzz"],
  }),
};
</script>
