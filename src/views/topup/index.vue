<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/locales';
import { fetchPay, fetchPayRecognize, fetchRedeem } from '@/service/api';
import { useAuthStore } from '@/store/modules/auth';
// Tailwind CSS
// 充值
const recharge = ref(5);
const code = ref<string>('');
const show = ref(false);
const authStore = useAuthStore();
const showModal = ref(false);
const qrCode = ref<Api.SystemManage.QrCodePay>({ order: '', payNumber: '', payQuota: '', url: '' });

async function handleSubmit() {
  show.value = true;
  const { error } = await fetchRedeem({ code: code.value });
  if (!error) {
    window.$message?.success?.($t('page.toup.recharge.success'));
    await authStore.initUserInfo();
  }
  code.value = '';
  show.value = false;
}

async function handlePaySubmit() {
  show.value = true;
  const { error, data } = await fetchPay({ number: recharge.value });
  if (!error) {
    show.value = false;
    showModal.value = true;
    qrCode.value = data;
  }
  recharge.value = 5;
}
function handlePayCancel() {
  showModal.value = false;
}

async function handlePayRecognize() {
  const { error } = await fetchPayRecognize({ order: qrCode.value?.order });
  if (!error) {
    show.value = false;
    window.$message?.success?.($t('page.toup.qrCode.recognize'));
    await authStore.initUserInfo();
    showModal.value = false;
  }
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
          <NButton type="primary" @click="handlePaySubmit">
            {{ $t('page.toup.recharge.desc') }}
          </NButton>
        </NSpace>
      </NCard>
    </NSpin>
    <NModal v-model:show="showModal">
      <NCard class="w-500px" :bordered="false" size="huge" role="dialog" aria-modal="true">
        <NDescriptions :title="$t('page.toup.qrCode.title')" label-placement="left" :column="1">
          <NDescriptionsItem :label="$t('page.toup.qrCode.payQuota')">{{ '$' + qrCode?.payQuota }}</NDescriptionsItem>
          <NDescriptionsItem :label="$t('page.toup.qrCode.payNumber')">
            {{ qrCode?.payNumber + '元' }}
          </NDescriptionsItem>
        </NDescriptions>
        <NSpace justify="center" :size="8">
          <NImage width="200" :src="qrCode?.url" />
        </NSpace>
        <NSpace justify="center" :size="8" class="mt-10px">
          <NButton type="success" @click="handlePayRecognize">{{ $t('page.toup.qrCode.success') }}</NButton>
          <NButton type="info" @click="handlePayCancel">{{ $t('common.cancel') }}</NButton>
        </NSpace>
      </NCard>
    </NModal>
  </NSpace>
</template>

<style scoped></style>
