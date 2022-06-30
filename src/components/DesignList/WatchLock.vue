<template>
  <div class="WatchLock py-6">
    <div class="LockType">
      <span class="text-base font-bold">Loại khóa</span>

      <div class="grid grid-cols-4 gap-2 mt-5">
        <div
          v-for="(item, i) in locks"
          :key="i"
          class="flex flex-col text-xs"
        >
          <div :class="item.class" class="border w-40 h-24 bg-picklock border-picklock"></div>
          <v-radio-group v-model="row" row class="mt-1 text-sm text-color" >
            <v-radio
              :label="item.text"
              :value="item.value"
              class="radio font-bold text-dark"
              active-class="checked"
              color="blue"
            ></v-radio>
            <div class="w-full ml-6 text-green text-sm">{{ item.bonus }}</div>
          </v-radio-group>
          
        </div>
      </div>
    </div>

    <div class="LockColor mt-4">
      <span class="text-base font-bold">Màu khóa</span>
      <v-col class="d-flex px-0" cols="4" sm="4">
      <v-select
        :items="items1"
        placeholder="Chọn màu khóa"
        dense
        outlined
      ></v-select>
    </v-col>
    </div>
  </div>
</template>
<script>
export default {
  name: "WatchLock",
  data: () => ({
    row: null,
    locks: [
      {
        text: "Khóa kim",
        bonus: "",
        value: "1",
      },
      {
        text: "Khóa bướm",
        bonus: "+150,000đ",
        value: "2",
      },
    ],
  }),
};
</script>
<style>
.radio {
  font-size: 10px !important;
}
.checked .v-label {
    color: #1790E9 !important;;
}
</style>