<template>
  <div class="WatchFace py-6">
    <span class="text-base font-bold">Hãng đồng hồ</span>
    <v-col class="d-flex px-0" cols="4" sm="4">
      <v-select
        :items="items1"
        placeholder="Tiêu chuẩn"
        dense
        outlined
      ></v-select>
    </v-col>
    <div class="flex items-center mx-auto w-1/3">
      <div class="flex justify-center mx-auto">
        <v-btn color="primary" text @click="redirect(x.link)" class="text-sm capitalize">
          <v-icon color="blue darken-2"> mdi-chevron-left</v-icon>
          <span class="capitalize">Pre</span>
        </v-btn>
      </div>
      <div class="flex justify-center mx-auto">
        <v-btn color="primary" text @click="redirect(x.link)" class="text-sm ">
          <span class="capitalize">Next</span>
          <v-icon color="blue darken-2"> mdi-chevron-right</v-icon>
        </v-btn>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WatchFace",
};
</script>