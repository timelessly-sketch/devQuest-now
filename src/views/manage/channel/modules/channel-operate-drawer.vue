<script setup lang="ts">
import { computed, reactive, watch } from 'vue';
import { useNaiveForm } from '@/hooks/common/form';
import { $t } from '@/locales';
import { channelNormalOptions, enableStatusOptions } from '@/constants/business';
import { fetchInsertChannel } from '@/service/api';

defineOptions({
  name: 'ChannelOperateDrawer'
});

interface Props {
  /** the type of operation */
  operateType: NaiveUI.TableOperateType;
  /** the edit row data */
  rowData?: Api.SystemManage.Channel | null;
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
    add: $t('page.manage.channel.addChannel'),
    edit: $t('page.manage.channel.editChannel')
  };
  return titles[props.operateType];
});

type Model = Pick<Api.SystemManage.Channel, 'name' | 'baseUrl' | 'key' | 'models' | 'status' | 'normal' | 'id'>;

const model: Model = reactive(createDefaultModel());

function createDefaultModel(): Model {
  return {
    name: '',
    baseUrl: '',
    key: '',
    models: '',
    status: '1',
    normal: '1',
    id: 0
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
  const { error } = await fetchInsertChannel(model);
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
    // getRoleOptions();
  }
});
</script>

<template>
  <NDrawer v-model:show="visible" display-directive="show" :width="360">
    <NDrawerContent :title="title" :native-scrollbar="false" closable>
      <NForm ref="formRef" :model="model">
        <NFormItem :label="$t('page.manage.channel.name')" path="name">
          <NInput v-model:value="model.name" :placeholder="$t('page.manage.channel.form.name')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.channel.baseUrl')" path="baseUrl">
          <NInput v-model:value="model.baseUrl" :placeholder="$t('page.manage.channel.form.baseUrl')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.channel.key')" path="key">
          <NInput v-model:value="model.key" :placeholder="$t('page.manage.channel.form.key')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.channel.models')" path="models">
          <NInput v-model:value="model.models" :placeholder="$t('page.manage.channel.form.models')" />
        </NFormItem>
        <NFormItem :label="$t('page.manage.channel.channelStatus')" path="channelStatus">
          <NRadioGroup v-model:value="model.status">
            <NRadio v-for="item in enableStatusOptions" :key="item.value" :value="item.value" :label="$t(item.label)" />
          </NRadioGroup>
        </NFormItem>
        <NFormItem :label="$t('page.manage.channel.normal')" path="normal">
          <NRadioGroup v-model:value="model.normal">
            <NRadio
              v-for="item in channelNormalOptions"
              :key="item.value"
              :value="item.value"
              :label="$t(item.label)"
            />
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
