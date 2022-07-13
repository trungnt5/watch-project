<template>
  <v-container class="px-0" :v-model="disabled">
    <div class="flex flex-col justify-center text-center">
      <span clas="m">Chọn sản phẩm mà bạn muốn tự thiết kế</span>
      <v-col class="d-flex mx-auto" cols="4" sm="4">
        <v-select
          :v-model="disabled"
          :items="items1"
          item-text="name"
          placeholder="Chọn sản phẩm"
          dense
          outlined
        ></v-select>
      </v-col>
      <v-divider class="my-5"></v-divider>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "HomeView",
  data: () => ({
    disabled: true,
    complete: false,
    step: 0,
    items1: [{ name: "Dây da đồng hồ", value: false }],
  }),
};
</script>
