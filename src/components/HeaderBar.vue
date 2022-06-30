<template>
  <div class="header border-b border-gray">
    <v-container>
      <v-col cols="12" class="py-4 mx-auto grid grid-cols-9 items-center">
        <div class="h-6 border"></div>
        <div class="col-span-6">
          <router-link
            v-for="(item, i) in headerItem"
            :key="i"
            :to="item.to"
            class="mx-5"
          >
            <span class="text-dark">{{ item.name }}</span>
          </router-link>
        </div>
        <div class="col-span-2 justify-end">
          <v-btn plain text to="/" color="dark"> 
            <div class="font-bold text-center mx-auto normal-case">
              <v-icon class="mr-1 icon-font">mdi-cart</v-icon>Giỏ hàng (2)
            </div>
          </v-btn>
          <v-btn tile height="34" dark> LIÊN HỆ </v-btn>
        </div>
      </v-col>
    </v-container>
  </div>
</template>

<script>
// import StepByStep from "../components/StepByStep";

export default {
  name: "HeaderBar",
  data: () => ({
    headerItem: [
      {
        name: "Dây da đồng hồ",
        to: "/",
      },
      {
        name: "Sản phẩm",
        to: "/",
      },
      {
        name: "Bộ sưu tập",
        to: "/",
      },
      {
        name: "Tự thiết kế",
        to: "/",
      },
      {
        name: "Giới thiệu",
        to: "/",
      },
    ],
  }),
};
</script>
<style>
.icon-font {
  font-size: 18px !important;
}
</style>