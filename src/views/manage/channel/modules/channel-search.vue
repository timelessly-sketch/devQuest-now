<script setup lang="ts">
import { $t } from '@/locales';
import { channelNormalOptions, enableStatusOptions } from '@/constants/business';
import { translateOptions } from '@/utils/common';

defineOptions({
  name: 'ChannelSearch'
});

interface Emits {
  (e: 'reset'): void;
  (e: 'search'): void;
}

const emit = defineEmits<Emits>();

const model = defineModel<Api.SystemManage.ChannelSearchParams>('model', { required: true });

async function reset() {
  emit('reset');
}

async function search() {
  emit('search');
}
</script>

<template>
  <NCard :bordered="false" size="small" class="card-wrapper">
    <NCollapse>
      <NCollapseItem :title="$t('common.search')" name="user-search">
        <NForm :model="model" label-placement="left" :label-width="80">
          <NGrid responsive="screen" item-responsive>
            <NFormItemGi span="24 s:12 m:6" :label="$t('page.manage.channel.models')" path="models" class="pr-24px">
              <NInput v-model:value="model.models" :placeholder="$t('page.manage.channel.form.models')" />
            </NFormItemGi>
            <NFormItemGi
              span="24 s:12 m:6"
              :label="$t('page.manage.channel.channelStatus')"
              path="userStatus"
              class="pr-24px"
            >
              <NSelect
                v-model:value="model.status"
                :placeholder="$t('page.manage.channel.form.channelStatus')"
                :options="translateOptions(enableStatusOptions)"
                clearable
              />
            </NFormItemGi>
            <NFormItemGi span="24 s:12 m:6" :label="$t('page.manage.channel.normal')" path="userStatus" class="pr-24px">
              <NSelect
                v-model:value="model.normal"
                :placeholder="$t('page.manage.channel.form.normal')"
                :options="translateOptions(channelNormalOptions)"
                clearable
              />
            </NFormItemGi>
            <NFormItemGi span="24 m:12" class="pr-24px">
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
