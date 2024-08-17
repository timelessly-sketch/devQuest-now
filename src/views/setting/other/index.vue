<script setup lang="ts">
import EmailData from '@/views/setting/other/modules/email-data.vue';
import FeiShuData from '@/views/setting/other/modules/feishu-data.vue';
import HuPayData from '@/views/setting/other/modules/huPay-date.vue';
</script>

<template>
  <NSpace vertical :size="16">
    <EmailData />
    <FeiShuData />
    <HuPayData />
  </NSpace>
</template>

<style scoped></style>
