<script setup lang="ts">
import { h, onMounted, ref } from 'vue';
import type { DataTableColumn } from 'naive-ui';
import { NTag } from 'naive-ui';
import { $t } from '@/locales';
import { fetchTariffsList } from '@/service/api';

defineOptions({
  name: 'ChatTariffs'
});

interface Model {
  id: number;
  name: string;
  modelRatio: string;
  completionRatio: string;
  groupRatio: string;
  modelType: string;
  info: string;
}
// 使用常量定义列，确保类型安全
const columns: DataTableColumn<Model>[] = [
  {
    title: '模型名称',
    key: 'name',
    align: 'center',
    width: 280,
    render: row => h(NTag, { type: 'success' }, () => row.name)
  },
  {
    title: '计费类型',
    key: 'modelType',
    align: 'center',
    render: row => h(NTag, { type: 'warning' }, () => row.modelType)
  },
  {
    title: '模型倍率',
    key: 'modelRatio',
    align: 'center'
  },
  {
    title: '补全倍率',
    key: 'completionRatio',
    align: 'center'
  },
  {
    title: '分组倍率',
    key: 'groupRatio',
    align: 'center'
  },
  {
    title: '说明',
    key: 'info',
    align: 'center'
  }
];

const modelList = ref<Model[]>([]);

const show = ref(false);
onMounted(async () => {
  const { error, data } = await fetchTariffsList();
  if (!error) {
    modelList.value = data?.records;
  }
  show.value = false;
});
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper" segmented>
      <template #header>
        {{ $t('page.tariffs.title') }}
      </template>
      <template #header-extra>
        <span class="small-text">{{ $t('page.tariffs.chatInfo') }}</span>
      </template>
      <NDataTable :columns="columns" :data="modelList" remote class="sm:h-full" size="small" :bordered="true" />
    </NCard>
  </div>
</template>
