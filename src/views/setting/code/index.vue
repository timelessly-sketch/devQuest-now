<script setup lang="ts">
import { reactive, ref } from 'vue';
import { $t } from '@/locales';

const showModal = ref(false);

interface code {
  name: string;
  number: number;
  quota: number;
}

const model: code = reactive(createDefaultModel());
function createDefaultModel(): code {
  return {
    name: '小丫头',
    number: 1,
    quota: 10
  };
}

function closeDrawer() {
  showModal.value = false;
}
function handleSubmit() {
  console.log(model);
  closeDrawer();
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper" segmented>
    <template #header>
      {{ $t('page.setting.code.title') }}
    </template>
    <template #header-extra>
      <NButton type="info" @click="showModal = true">
        {{ $t('page.setting.code.button') }}
      </NButton>
    </template>
    <NModal v-model:show="showModal" preset="card" :title="$t('page.setting.code.add.title')" class="w-600px">
      <NForm :model="model" label-placement="left" :label-width="50">
        <NGrid responsive="screen">
          <NFormItemGi span="24 m:12" :label="$t('page.setting.code.add.name')" path="name">
            <NInput v-model:value="model.name" :placeholder="$t('page.setting.code.add.name')" />
          </NFormItemGi>
          <NFormItemGi span="24 m:12" :label="$t('page.setting.code.add.quota')" path="quota">
            <NInputNumber v-model:value="model.quota" :placeholder="$t('page.setting.code.add.quota')">
              <template #prefix>$</template>
            </NInputNumber>
          </NFormItemGi>
          <NFormItemGi span="24 m:12" :label="$t('page.setting.code.add.number')" path="number">
            <NInputNumber v-model:value="model.number" :placeholder="$t('page.setting.code.add.number')" />
          </NFormItemGi>
        </NGrid>
      </NForm>
      <NSpace justify="end" :size="16">
        <NButton @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
        <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
      </NSpace>
    </NModal>
  </NCard>
</template>
