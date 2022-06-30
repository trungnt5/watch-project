<template>
  <div class="WatchSignature py-6">
    <span class="text-base font-bold">Khắc chữ Laser</span>
    <div class="grid grid-cols-10 mt-5">
      <div class="grid col-span-6 gap-1">
        <span>Giới hạn 20 kí tự.</span>
        <span>Chữ sẽ được khắc vào mặt dưới của Dây Gắn Khóa</span>
        <v-col cols="6" class="px-0">
           <v-text-field
            height="20"
            v-model="first"
            outlined
            class="text-field"
          ></v-text-field>
        </v-col>

        <span>Kiểu font</span>
        <v-col cols="6" class="px-0">
          <v-select
            :items="items1"
            placeholder="Arial"
            dense
            outlined
          ></v-select>
        </v-col>
      </div>
      <div class="col-span-4">
        <div class="w-32 h-20 border"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "WatchSignature",
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
  color: #1790e9 !important;
}
.text-field .v-input__control .v-input__slot {
  min-height: 43px;
}
</style>