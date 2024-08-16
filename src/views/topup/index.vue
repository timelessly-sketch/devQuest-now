<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/locales';

// Tailwind CSS

// 充值
const recharge = ref(5);
</script>

<template>
  <NSpace vertical :size="16">
    <NCard :title="$t('page.toup.title')" :bordered="false" size="small" segmented class="card-wrapper">
      <NDivider title-placement="left">{{ $t('page.toup.code.title') }}</NDivider>
      <NInputGroup class="max-w-600px">
        <NInput type="text" :placeholder="$t('page.toup.code.desc')" />
        <NButton type="primary">{{ $t('page.login.common.confirm') }}</NButton>
      </NInputGroup>
      <p class="text-#999 leading-30px">{{ $t('page.toup.code.info') }}</p>
      <NDivider title-placement="left">{{ $t('page.toup.recharge.title') }}</NDivider>
      <NInputGroup class="max-w-600px">
        <NInputNumber v-model:value="recharge" class="min-w-300px" :min="5" clearable>
          <template #prefix>$</template>
        </NInputNumber>
      </NInputGroup>
      <NSpace class="mt-3">
        <NButton type="primary">
          {{ $t('page.toup.recharge.desc') }}
        </NButton>
      </NSpace>
    </NCard>
  </NSpace>
</template>

<style scoped></style>
