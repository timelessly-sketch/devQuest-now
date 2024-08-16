<script setup lang="ts">
import { h, onMounted, reactive, ref } from 'vue';
import { NTag } from 'naive-ui';
import type { DataTableColumn } from 'naive-ui';
import { $t } from '@/locales';
import { fetchRedemption } from '@/service/api';

const showModal = ref(false);
const modelList = ref<Api.SystemManage.RedemptionResp[]>([]);
const columns: DataTableColumn<Api.SystemManage.RedemptionResp>[] = [
  {
    title: $t('common.index'),
    key: 'id',
    align: 'center',
    width: 58
  },
  {
    title: '名称',
    key: 'name',
    align: 'center',
    width: 80
  },
  {
    title: '兑换码',
    key: 'key',
    align: 'center',
    width: 180,
    render: row => {
      // 创建一个复制到剪贴板的函数
      const copyToClipboard = () => {
        navigator.clipboard
          .writeText(row.key)
          .then(() => {
            // 复制成功后的操作，例如提示用户复制成功
            window.$message?.success?.('复制成功');
          })
          .catch(() => {
            window.$message?.error?.('复制失败');
          });
      };

      // 返回 NTag 组件，并添加点击事件监听器
      return h(
        NTag,
        {
          type: 'success',
          onClick: copyToClipboard // 点击 NTag 时调用 copyToClipboard 函数
        },
        () => row.key
      );
    }
  },
  {
    title: '额度',
    key: 'quota',
    align: 'center',
    width: 40,
    render: row => {
      return h(NTag, { type: 'warning' }, () => {
        // 在额度前面添加 $ 符号
        return `$${row.quota}`;
      });
    }
  },
  {
    title: '创建时间',
    key: 'createAt',
    align: 'center',
    width: 140
  },
  {
    title: '使用时间',
    key: 'updateAt',
    align: 'center',
    width: 140
  },
  {
    title: '兑换人',
    key: 'mail',
    align: 'center',
    width: 140,
    render: row => {
      // 检查 updateAt 是否为空，如果是，则显示 "未使用" 并用 NTag 包裹
      if (!row.mail) {
        return h(NTag, { type: 'error' }, () => '未兑换');
      }
      // 如果 updateAt 不为空，返回原始值
      return h(NTag, { type: 'success' }, () => row.mail);
    }
  }
];
const model: Api.SystemManage.Redemption = reactive(createDefaultModel());
function createDefaultModel(): Api.SystemManage.Redemption {
  return {
    edit: false,
    name: '小丫头',
    number: 1,
    quota: 10
  };
}

function closeDrawer() {
  showModal.value = false;
}

async function handleSubmit() {
  model.edit = true;
  const { error, data } = await fetchRedemption(model);
  if (!error) {
    modelList.value = data?.records;
  }
  closeDrawer();
}

async function initModel() {
  const { error, data } = await fetchRedemption(model);
  if (!error) {
    modelList.value = data?.records;
  }
}

onMounted(() => {
  initModel();
});
</script>

<template>
  <NCard :bordered="false" size="small" segmented class="card-wrapper">
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
    <NDataTable :columns="columns" :data="modelList" remote class="sm:h-full" size="small" :bordered="true" />
  </NCard>
</template>
