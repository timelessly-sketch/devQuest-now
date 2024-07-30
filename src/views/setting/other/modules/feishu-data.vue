<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { $t } from '@/locales';
import { fetchSetting, fetchSettingEdit } from '@/service/api';

defineOptions({
  name: 'FeiShuData'
});

interface feishu {
  appid: string;
  secret: string;
}

const isLoading = ref(false);
const show = ref(true);
const model: feishu = reactive(createDefaultModel());
function createDefaultModel(): feishu {
  return {
    appid: '',
    secret: ''
  };
}

async function handleSubmit() {
  isLoading.value = true;
  const { error } = await fetchSettingEdit({ name: 'feishu', configuration: model });
  if (!error) {
    window.$message?.success($t('common.updateSuccess'));
  }
  isLoading.value = false;
}

onMounted(async () => {
  const { error, data } = await fetchSetting('feishu');
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
        {{ $t('page.setting.other.feishu.title') }}
      </template>
      <template #header-extra>
        <span class="small-text">{{ $t('page.setting.other.feishu.info') }}</span>
      </template>
      <NForm :model="model" label-placement="left" :label-width="80">
        <NGrid responsive="screen" item-responsive>
          <NFormItemGi span="24 s:12 m:6" :label="$t('page.setting.other.feishu.appid')" class="pr-20px">
            <NInput v-model:value="model.appid" :placeholder="$t('page.setting.other.feishu.form.appid')" />
          </NFormItemGi>
          <NFormItemGi span="24 s:12 m:8" :label="$t('page.setting.other.feishu.secret')" class="pr-20px">
            <NInput v-model:value="model.secret" :placeholder="$t('page.setting.other.feishu.form.secret')" />
          </NFormItemGi>
        </NGrid>
      </NForm>
      <NSpace class="w-full pr-20px" justify="end">
        <NButton type="primary" :loading="isLoading" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
      </NSpace>
    </NCard>
    <template #description>你都不知道你有多块</template>
  </NSpin>
</template>

<style scoped></style>
