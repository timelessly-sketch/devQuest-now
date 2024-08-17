<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/locales';
import { fetchRedeem } from '@/service/api';
import { useAuthStore } from '@/store/modules/auth';
// Tailwind CSS
// 充值
const recharge = ref(5);
const code = ref<string>('');
const show = ref(false);
const authStore = useAuthStore();

async function handleSubmit() {
  show.value = true;
  const { error } = await fetchRedeem({ code: code.value });
  if (!error) {
    window.$message?.success?.('兑换成功');
    await authStore.initUserInfo();
  }
  code.value = '';
  show.value = false;
}
</script>

<template>
  <NSpace vertical :size="16">
    <NSpin :show="show">
      <NCard :title="$t('page.toup.title')" :bordered="false" size="small" segmented class="card-wrapper">
        <NDivider title-placement="left">{{ $t('page.toup.quotaTitle') }}</NDivider>
        <NGradientText :size="18" type="success">
          {{ $t('page.toup.utilizedQuota', { utilizedQuota: authStore.userInfo.utilizedQuota }) }}
        </NGradientText>
        <br />
        <NGradientText :size="18" type="warning">
          {{ $t('page.toup.remainingQuota', { utilizedQuota: authStore.userInfo.remainingQuota }) }}
        </NGradientText>
        <NDivider title-placement="left">{{ $t('page.toup.code.title') }}</NDivider>
        <NInputGroup class="max-w-300px">
          <NInput v-model:value="code" type="text" :placeholder="$t('page.toup.code.desc')" />
        </NInputGroup>
        <NButton class="ml-3" type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
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
    </NSpin>
  </NSpace>
</template>

<style scoped></style>
