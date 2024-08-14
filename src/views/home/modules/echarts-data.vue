<script setup lang="ts">
import { onUnmounted, ref } from 'vue';
import type { ECOption } from '@/hooks/common/echarts';
import { useEcharts } from '@/hooks/common/echarts';

defineOptions({
  name: 'EchartsData'
});

// 定义颜色数组，用于图表系列的颜色
const colorArray = ['#37a2da', '#9fe6b8', '#fedb5c', '#fb7293', '#e7bcf3'];

// 静态数据定义，包括x轴数据和各系列数据
const staticData = {
  xAxisCategories: ['1', '2', '3', 'Thu', 'Fri', 'Sat', 'Sun'],
  series: [
    {
      name: '模型1',
      data: [120, 132, 101, 134, 90, 230, 210]
    },
    {
      name: 'Union Ads',
      data: [220, 182, 191, 234, 290, 330, 310]
    },
    {
      name: 'Video Ads',
      data: [150, 232, 201, 154, 190, 330, 410]
    },
    {
      name: 'Direct',
      data: [320, 332, 301, 334, 390, 330, 320]
    },
    {
      name: 'Search Engine',
      data: [820, 932, 901, 934, 1290, 1330, 1320]
    }
  ]
};

// 使用 ref 创建响应式变量
const lineOptions = ref<ECOption>({
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      label: {
        backgroundColor: '#6a7985'
      }
    }
  },
  title: {
    text: 'Stacked Line'
  },
  legend: {
    data: staticData.series.map(item => item.name)
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  toolbox: {
    feature: {
      saveAsImage: {}
    }
  },
  xAxis: {
    type: 'category',
    data: staticData.xAxisCategories
  },
  yAxis: {
    type: 'value'
  },
  series: staticData.series.map((series, index) => ({
    name: series.name,
    type: 'line',
    smooth: true,
    stack: 'Total',
    areaStyle: {
      color: {
        type: 'linear',
        x: 0,
        y: 0,
        x2: 0,
        y2: 1,
        colorStops: [
          {
            offset: 0.25,
            color: colorArray[index % colorArray.length]
          },
          {
            offset: 1,
            color: '#fff'
          }
        ]
      }
    },
    emphasis: {
      focus: 'series'
    },
    data: series.data
  }))
});

const { domRef: lineRef } = useEcharts(() => lineOptions.value, { onRender() {} });

let intervalId: NodeJS.Timeout;

function clearGaugeChart() {
  clearInterval(intervalId);
}

onUnmounted(() => {
  clearGaugeChart();
});
</script>

<template>
  <NSpace vertical :size="16">
    <NCard :bordered="false" class="card-wrapper">
      <div ref="lineRef" class="h-400px" />
    </NCard>
  </NSpace>
</template>

<style scoped></style>
