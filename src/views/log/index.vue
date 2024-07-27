<script setup lang="tsx">
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { fetchLogList } from '@/service/api';
import LogHeaderOperation from '@/views/log/advanced/log-header-operation.vue';

const appStore = useAppStore();

const {
  columns,
  columnChecks,
  data,
  getData,
  loading,
  mobilePagination
  // searchParams,
  // resetSearchParams
} = useTable({
  apiFn: fetchLogList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 20,
    createAt: ''
  },
  columns: () => [
    {
      key: 'index',
      title: $t('common.index'),
      align: 'center',
      width: 58
    },
    {
      key: 'createAt',
      title: $t('page.manage.log.createAt'),
      align: 'center',
      width: 160
    },
    {
      key: 'name',
      title: $t('page.manage.log.name'),
      align: 'center',
      width: 160
    },
    {
      key: 'model',
      title: $t('page.manage.log.model'),
      align: 'center',
      width: 80
    },
    {
      key: 'time',
      title: $t('page.manage.log.time'),
      align: 'center',
      width: 60
    },
    {
      key: 'input',
      title: $t('page.manage.log.input'),
      align: 'center',
      width: 80
    },
    {
      key: 'output',
      title: $t('page.manage.log.output'),
      align: 'center',
      width: 80
    },
    {
      key: 'total',
      title: $t('page.manage.log.total'),
      align: 'center',
      width: 100,
      render: row => {
        return `$${row.total}`;
      }
    },
    {
      key: 'info',
      title: $t('page.manage.log.info'),
      align: 'center',
      width: 200
    }
  ]
});

const { checkedRowKeys } = useTableOperate(data, getData);
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('page.manage.log.title')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <LogHeaderOperation
          v-model:columns="columnChecks"
          :disabled-delete="checkedRowKeys.length === 0"
          :loading="loading"
          @refresh="getData"
        />
      </template>
      <NDataTable
        v-model:checked-row-keys="checkedRowKeys"
        :columns="columns"
        :data="data"
        size="small"
        :flex-height="!appStore.isMobile"
        :scroll-x="962"
        :loading="loading"
        remote
        :row-key="row => row.id"
        :pagination="mobilePagination"
        class="sm:h-full"
      />
    </NCard>
  </div>
</template>

<style scoped></style>
