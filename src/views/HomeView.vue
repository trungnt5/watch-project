<template>
  <div class="bg-background">
    <v-container>
      <v-breadcrumbs :items="items" divider=">" class="text-black px-0">
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
      <step-by-step class="w-3/5" />
      <v-card max-width="728" class="py-7">
        <div class="flex flex-col justify-center text-center">
          <span clas="m">Chọn sản phẩm mà bạn muốn tự thiết kế</span>
          <v-col class="d-flex mx-auto" cols="4" sm="4">
            <v-select
              v-model="disabled"
              :items="items1"
              item-text="name"
              placeholder="Chọn sản phẩm"
              dense
              outlined
            ></v-select>
          </v-col>
          <v-divider></v-divider>
          <v-col col="4" class="pt-8">
            <v-btn tile :disabled="disabled" class="text-white bg-black" to="/design">
              BẮT ĐẦU THIẾT KẾ
            </v-btn>
          </v-col>
        </div>
      </v-card>
    </v-container>
  </div>
</template>

<script>
import StepByStep from "../components/StepByStep";

export default {
  name: "HomeView",

  components: {
    StepByStep,
  },
  data: () => ({
    disabled:true,
    complete:false,
    step: 0,
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
    items1: [{name:"Dây da đồng hồ",value:false}],
  }),
};
</script>
