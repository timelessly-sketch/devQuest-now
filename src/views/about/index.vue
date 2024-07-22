<script setup lang="ts"></script>

<template>
  <NSpace vertical :size="16">
    <NCard :title="$t('page.about.title')" :bordered="false" size="small" segmented class="card-wrapper">
      <p>{{ $t('page.about.introduction') }}</p>
    </NCard>
  </NSpace>
</template>

<style scoped></style>
