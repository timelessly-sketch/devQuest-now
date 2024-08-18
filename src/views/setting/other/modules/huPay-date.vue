<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { $t } from '@/locales';
import { fetchSetting, fetchSettingEdit } from '@/service/api';

defineOptions({
  name: 'HuPayData'
});

interface huPay {
  appid: string;
  secret: string;
  host: string;
  notify: string;
  ratios: string;
}

const isLoading = ref(false);
const show = ref(true);
const model: huPay = reactive(createDefaultModel());
function createDefaultModel(): huPay {
  return {
    appid: '',
    secret: '',
    host: '',
    ratios: '',
    notify: ''
  };
}

async function handleSubmit() {
  isLoading.value = true;
  const { error } = await fetchSettingEdit({ name: 'hupay', configuration: model });
  if (!error) {
    window.$message?.success($t('common.updateSuccess'));
  }
  isLoading.value = false;
}

onMounted(async () => {
  const { error, data } = await fetchSetting('hupay');
  if (!error) {
    Object.assign(model, data.configuration);
  }
  show.value = false;
});
</script>

<template>
  <NSpin :show="show">
    <NCard :bordered="false" size="small" class="card-wrapper" segmented>
      <template #header>
        {{ $t('page.setting.other.hupay.title') }}
      </template>
      <template #header-extra>
        <span class="small-text">{{ $t('page.setting.other.hupay.info') }}</span>
      </template>
      <NForm :model="model" label-placement="left" :label-width="80">
        <NGrid responsive="screen" item-responsive>
          <NFormItemGi span="24 s:12 m:6" :label="$t('page.setting.other.hupay.appid')" class="pr-20px">
            <NInput v-model:value="model.appid" :placeholder="$t('page.setting.other.hupay.form.appid')" />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:7" :label="$t('page.setting.other.hupay.secret')" class="pr-20px">
            <NInput v-model:value="model.secret" :placeholder="$t('page.setting.other.hupay.form.secret')" />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:8" :label="$t('page.setting.other.hupay.host')" class="pr-20px">
            <NInput v-model:value="model.host" :placeholder="$t('page.setting.other.hupay.form.host')" />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:6" :label="$t('page.setting.other.hupay.notify')" class="pr-20px">
            <NInput v-model:value="model.notify" :placeholder="$t('page.setting.other.hupay.form.notify')" />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:7" :label="$t('page.setting.other.hupay.ratios')" class="pr-20px">
            <NInput v-model:value="model.ratios" :placeholder="$t('page.setting.other.hupay.form.ratios')" />
          </NFormItemGi>
        </NGrid>
      </NForm>
      <NSpace class="w-full pr-20px" justify="end">
        <NButton type="primary" :loading="isLoading" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
      </NSpace>
    </NCard>
  </NSpin>
</template>

<style scoped></style>
