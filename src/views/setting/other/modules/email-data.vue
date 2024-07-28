<script setup lang="ts">
import { onMounted, reactive } from 'vue';
import { $t } from '@/locales';
import { fetchSetting, fetchSettingEdit } from '@/service/api';

defineOptions({
  name: 'EmailData'
});

interface email {
  host: string;
  port: string;
  username: string;
  password: string;
}

const model: email = reactive(createDefaultModel());
function createDefaultModel(): email {
  return {
    host: 'smtp.qq.com',
    port: '587',
    username: 'test@qq.com',
    password: '1234578'
  };
}

async function handleSubmit() {
  const { error } = await fetchSettingEdit({ name: 'email', configuration: model });
  if (!error) {
    window.$message?.success($t('common.updateSuccess'));
  }
}

onMounted(async () => {
  const { error, data } = await fetchSetting('email');
  if (!error) {
    Object.assign(model, data.configuration);
  }
});
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper" segmented>
    <template #header>
      {{ $t('page.setting.other.email.title') }}
    </template>
    <template #header-extra>
      <span class="small-text">{{ $t('page.setting.other.email.info') }}</span>
    </template>
    <NForm :model="model" label-placement="left" :label-width="80">
      <NGrid responsive="screen" item-responsive>
        <NFormItemGi span="24 s:12 m:6" :label="$t('page.setting.other.email.host')" class="pr-20px">
          <NInput v-model:value="model.host" :placeholder="$t('page.setting.other.email.form.host')" />
        </NFormItemGi>
        <NFormItemGi span="24 s:12 m:6" :label="$t('page.setting.other.email.port')" class="pr-20px">
          <NInput v-model:value="model.port" :placeholder="$t('page.setting.other.email.form.port')" />
        </NFormItemGi>
        <NFormItemGi span="24 s:12 m:6" :label="$t('page.setting.other.email.name')" class="pr-20px">
          <NInput v-model:value="model.username" :placeholder="$t('page.setting.other.email.form.name')" />
        </NFormItemGi>
        <NFormItemGi span="24 s:12 m:6" :label="$t('page.setting.other.email.password')" class="pr-20px">
          <NInput v-model:value="model.password" :placeholder="$t('page.setting.other.email.form.password')" />
        </NFormItemGi>
      </NGrid>
    </NForm>
    <NSpace class="w-full pr-20px" justify="end">
      <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
    </NSpace>
  </NCard>
</template>

<style scoped></style>
