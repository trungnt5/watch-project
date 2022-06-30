<template>
  <div class="WatchLeather py-6">
    <span class="text-base font-bold">Da bề mặt</span>
    <v-col class="d-flex px-0 py-0 mt-1" cols="12">
      <v-col class="px-0 py-0" cols="4" sm="4">
        <v-select
          :items="items1"
          placeholder="Bê Epsom"
          dense
          outlined
        ></v-select>
      </v-col>
      <span class="text-sm ml-6 pt-2"
        >Chống xước, chống nước, chống bám bẩn Tốt. Dễ vệ sinh.
      </span>
    </v-col>

    <div class="my-7"></div>

    <span class="text-base font-bold">Da lót</span>
    <v-col class="d-flex px-0 py-0 mt-1" cols="12">
      <v-col class="px-0 py-0" cols="4" sm="4">
        <v-select
          :items="items2"
          placeholder="Da Silicon chống thấm"
          dense
          outlined
        ></v-select>
      </v-col>
      <span class="text-sm ml-6 pt-2"
        >Tiêu chuẩn Y Tế. Chống mồ hồi 100%, an toàn cho da tay, dễ dàng vệ
        sinh.
      </span>
    </v-col>
  </div>
</template>
<script>
export default {
  name: "WatchLeather",
};
</script>