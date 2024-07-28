<script setup lang="ts">
import { onMounted, reactive, ref } from 'vue';
import { $t } from '@/locales';
import { fetchMemberSendMsg, fetchSetting, fetchSettingEdit } from '@/service/api';

defineOptions({
  name: 'EmailData'
});

interface email {
  host: string;
  port: string;
  enableSsl: string;
  username: string;
  password: string;
}

const isLoading = ref(false);
const show = ref(true);
const model: email = reactive(createDefaultModel());
function createDefaultModel(): email {
  return {
    host: 'smtp.qq.com',
    port: '587',
    enableSsl: '',
    username: 'test@qq.com',
    password: '1234578'
  };
}

async function handleSubmit() {
  isLoading.value = true;
  const { error } = await fetchSettingEdit({ name: 'email', configuration: model });
  if (!error) {
    window.$message?.success($t('common.updateSuccess'));
  }
  isLoading.value = false;
}
async function handleTest() {
  const { error } = await fetchMemberSendMsg({ email: model.username });
  if (!error) {
    window.$message?.success?.($t('page.login.codeLogin.sendCodeSuccess'));
  }
}

onMounted(async () => {
  const { error, data } = await fetchSetting('email');
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
        <NButton type="warning" @click="handleTest">{{ $t('page.setting.other.email.button') }}</NButton>
        <NButton type="primary" :loading="isLoading" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
      </NSpace>
    </NCard>
    <template #description>你不知道你有多块</template>
  </NSpin>
</template>

<style scoped></style>
