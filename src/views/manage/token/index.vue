<script setup lang="tsx">
import { NButton, NTag } from 'naive-ui';
import { $t } from '@/locales';
import { useAppStore } from '@/store/modules/app';
import { enableStatusRecord } from '@/constants/business';
import { useTable, useTableOperate } from '@/hooks/common/table';
import { fetchTokenList } from '@/service/api';
import TokenOperateDrawer from '@/views/manage/token/modules/token-operate-drawer.vue';

const appStore = useAppStore();

const {
  columns,
  columnChecks,
  data,
  getData,
  loading,
  mobilePagination,
  getDataByPage
  // searchParams,
  // resetSearchParams
} = useTable({
  apiFn: fetchTokenList,
  showTotal: true,
  apiParams: {
    current: 1,
    size: 10,
    name: null,
    status: null
  },
  columns: () => [
    {
      type: 'selection',
      align: 'center',
      width: 48
    },
    {
      key: 'index',
      title: $t('common.index'),
      align: 'center',
      width: 64
    },
    {
      key: 'name',
      title: $t('page.manage.token.name'),
      align: 'center',
      width: 200
    },
    {
      key: 'key',
      title: $t('page.manage.token.key'),
      align: 'center',
      minWidth: 400
    },
    {
      key: 'utilizedQuota',
      title: $t('page.manage.token.utilizedQuota'),
      align: 'center',
      width: 100
    },
    {
      key: 'remainingQuota',
      title: $t('page.manage.token.remainingQuota'),
      align: 'center',
      width: 100
    },
    {
      key: 'updateAt',
      title: $t('page.manage.token.updateAt'),
      align: 'center',
      width: 200
    },
    {
      key: 'status',
      title: $t('page.manage.token.tokenStatus'),
      align: 'center',
      width: 100,
      render: row => {
        if (row.status === null) {
          return null;
        }

        const tagMap: Record<Api.Common.EnableStatus, NaiveUI.ThemeColor> = {
          1: 'success',
          2: 'warning'
        };

        const label = $t(enableStatusRecord[row.status]);

        return <NTag type={tagMap[row.status]}>{label}</NTag>;
      }
    },
    {
      key: 'operate',
      title: $t('common.operate'),
      align: 'center',
      width: 130,
      render: row => (
        <div class="flex-center gap-8px">
          <NButton type="primary" ghost size="small" onClick={() => edit(row.id)}>
            {$t('common.edit')}
          </NButton>
        </div>
      )
    }
  ]
});

const { handleEdit, checkedRowKeys, onBatchDeleted, drawerVisible, operateType, editingData } = useTableOperate(
  data,
  getData
);

async function handleBatchDelete() {
  // request
  console.log(checkedRowKeys.value);

  onBatchDeleted();
}

function edit(id: number) {
  handleEdit(id);
}
</script>

<template>
  <div class="min-h-500px flex-col-stretch gap-16px overflow-hidden lt-sm:overflow-auto">
    <NCard :title="$t('page.manage.token.title')" :bordered="false" size="small" class="sm:flex-1-hidden card-wrapper">
      <template #header-extra>
        <TableHeaderOperation
          v-model:columns="columnChecks"
          :disabled-delete="checkedRowKeys.length === 0"
          :loading="loading"
          @delete="handleBatchDelete"
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
      <TokenOperateDrawer
        v-model:visible="drawerVisible"
        :operate-type="operateType"
        :row-data="editingData"
        @submitted="getDataByPage"
      />
    </NCard>
  </div>
</template>

<style scoped></style>
