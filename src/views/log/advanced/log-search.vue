<script setup lang="ts">
import { ref } from 'vue';
import { $t } from '@/locales';
import { useNaiveForm } from '@/hooks/common/form';

defineOptions({
  name: 'LogSearch'
});

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const timeRange = ref<[number, number]>([Date.now() - 24 * 60 * 60 * 1000, Date.now()]);

const emit = defineEmits<Emits>();

const model = defineModel<Api.SystemManage.LogSearchParams>('model', { required: true });

const { formRef, validate, restoreValidation } = useNaiveForm();

async function reset() {
  await restoreValidation();
  model.value.model = null;
  timeRange.value = [Date.now() - 24 * 60 * 60 * 1000, Date.now()];
  emit('reset');
}

async function search() {
  await validate();
  if (timeRange.value) {
    model.value.timeRange = timeRange.value.join(',');
  }
  emit('search');
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <NCollapse>
      <NCollapseItem :title="$t('common.search')" name="log-search">
        <NForm ref="formRef" :model="model" label-placement="left" :label-width="80">
          <NGrid responsive="screen" item-responsive>
            <NFormItemGi span="24 s:12 m:6" :label="$t('page.manage.log.model')" class="pr-20px">
              <NInput v-model:value="model.model" :placeholder="$t('page.manage.log.model')" />
            </NFormItemGi>
            <NFormItemGi span="34 s:24 m:10" :label="$t('page.manage.log.searchTime')" class="pr-20px">
              <NDatePicker v-model:value="timeRange" type="datetimerange" clearable />
            </NFormItemGi>
            <NFormItemGi span="24 m:4" class="pr-24px">
              <NSpace class="w-full" justify="end">
                <NButton @click="reset">
                  <template #icon>
                    <icon-ic-round-refresh class="text-icon" />
                  </template>
                  {{ $t('common.reset') }}
                </NButton>
                <NButton type="primary" ghost @click="search">
                  <template #icon>
                    <icon-ic-round-search class="text-icon" />
                  </template>
                  {{ $t('common.search') }}
                </NButton>
              </NSpace>
            </NFormItemGi>
          </NGrid>
        </NForm>
      </NCollapseItem>
    </NCollapse>
  </NCard>
</template>

<style scoped></style>
