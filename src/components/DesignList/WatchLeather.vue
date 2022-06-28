<template>
  <div class="WatchLeather">
    <span class="text-base font-bold">Da bề mặt</span>
    <v-col class="d-flex px-0 py-0" cols="8" sm="8">
      <v-col class="px-0 py-0" cols="4" sm="4">
        <v-select
          :items="items1"
          placeholder="Bê Epsom"
          dense
          outlined
        ></v-select>
      </v-col>
      <span class="text-sm ml-6 pt-3"
        >Chống xước, chống nước, chống bám bẩn Tốt. Dễ vệ sinh.
      </span>
    </v-col>

    <span class="text-base font-bold">Da lót</span>
    <v-col class="d-flex px-0 py-0" cols="8" sm="8">
      <v-col class="px-0 py-0" cols="4" sm="4">
        <v-select
          :items="items2"
          placeholder="Da Silicon chống thấm"
          dense
          outlined
        ></v-select>
      </v-col>
      <span class="text-sm ml-6 pt-3"
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