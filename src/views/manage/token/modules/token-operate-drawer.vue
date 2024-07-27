<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';
import { enableStatusOptions } from '@/constants/business';
import { fetchTokenEdit } from '@/service/api';

defineOptions({
  name: 'TokenOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.SystemManage.Token | null;
}

const props = defineProps<Props>();

interface Emits {
  (e: 'submitted'): void;
}

const emit = defineEmits<Emits>();

const visible = defineModel<boolean>('visible', {
  default: false
});

const { formRef, validate, restoreValidation } = useNaiveForm();

const title = computed(() => {
  const titles: Record<NaiveUI.TableOperateType, string> = {
    add: $t('page.manage.token.addToken'),
    edit: $t('page.manage.token.editToken')
  };
  return titles[props.operateType];
});

type Model = Pick<
  Api.SystemManage.TokenEditParams,
  'name' | 'key' | 'status' | 'utilizedQuota' | 'remainingQuota' | 'id'
>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    id: 0,
    name: '',
    key: '',
    status: '1',
    utilizedQuota: 0,
    remainingQuota: 0
  };
}

function handleInitModel() {
  Object.assign(model, createDefaultModel());

  if (props.operateType === 'edit' && props.rowData) {
    Object.assign(model, props.rowData);
  }
}

function closeDrawer() {
  visible.value = false;
}

async function handleSubmit() {
  await validate();
  const { error } = await fetchTokenEdit(model);
  if (!error) {
    window.$message?.success($t('common.updateSuccess'));
    closeDrawer();
    emit('submitted');
  }
}

watch(visible, () => {
  if (visible.value) {
    handleInitModel();
    restoreValidation();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model">
        <NFormItem :label="$t('page.manage.token.name')" path="name">
          <NInput v-model:value="model.name" :disabled="true" :placeholder="$t('page.manage.token.form.name')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.token.key')" path="key">
          <NInput v-model:value="model.key" :disabled="true" :placeholder="$t('page.manage.token.form.key')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.token.utilizedQuota')" path="utilizedQuota">
          <NInputNumber v-model:value="model.utilizedQuota">
            <template #prefix>$</template>
          </NInputNumber>
        </NFormItem>
        <NFormItem :label="$t('page.manage.token.remainingQuota')" path="remainingQuota">
          <NInputNumber v-model:value="model.remainingQuota">
            <template #prefix>$</template>
          </NInputNumber>
        </NFormItem>
        <NFormItem :label="$t('page.manage.token.tokenStatus')" path="status">
          <NRadioGroup v-model:value="model.status">
            <NRadio v-for="item in enableStatusOptions" :key="item.value" :value="item.value" :label="$t(item.label)" />
          </NRadioGroup>
        </NFormItem>
      </NForm>
      <template #footer>
        <NSpace :size="16">
          <NButton @click="closeDrawer">{{ $t('common.cancel') }}</NButton>
          <NButton type="primary" @click="handleSubmit">{{ $t('common.confirm') }}</NButton>
        </NSpace>
      </template>
    </NDrawerContent>
  </NDrawer>
</template>

<style scoped></style>
