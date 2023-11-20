<template>
  <div :class="['relative h-full', commonClass]" :style="cssVars">
    <div
      :id="isWrapperScroll ? scrollElId : undefined"
      :class="['flex flex-col h-full', commonClass, scrollWrapperClass, { 'overflow-y-auto': isWrapperScroll }]"
    >
      <!-- Header -->
      <template v-if="showHeader">
        <header
          v-show="!fullContent"
          :class="[
            style['layout-header'],
            'flex-shrink-0',
            commonClass,
            headerClass,
            headerLeftGapClass,
            { 'absolute top-0 left-0 w-full': fixedHeaderAndTab }
          ]"
        >
          <slot name="header"></slot>
        </header>
        <div
          v-show="!fullContent && fixedHeaderAndTab"
          :class="[style['layout-header-placement'], 'flex-shrink-0 overflow-hidden']"
        ></div>
      </template>

      <!-- Tab -->
      <template v-if="showTab">
        <div
          :class="[
            style['layout-tab'],
            'flex-shrink-0',
            commonClass,
            tabClass,
            { 'top-0!': fullContent || !showHeader },
            leftGapClass,
            { 'absolute left-0 w-full': fixedHeaderAndTab }
          ]"
        >
          <slot name="tab"></slot>
        </div>
        <div
          v-show="fullContent || fixedHeaderAndTab"
          :class="[style['layout-tab-placement'], 'flex-shrink-0 overflow-hidden']"
        ></div>
      </template>

      <!-- Sider -->
      <template v-if="showSider">
        <aside
          v-show="!fullContent"
          :class="[
            'absolute left-0 top-0 h-full',
            commonClass,
            siderClass,
            siderPaddingClass,
            siderCollapse ? style['layout-sider_collapsed'] : style['layout-sider']
          ]"
        >
          <slot name="sider"></slot>
        </aside>
      </template>

      <!-- Mobile Sider -->
      <template v-if="showMobileSider">
        <aside
          :class="[
            'absolute left-0 top-0 w-0 h-full bg-white',
            commonClass,
            mobileSiderClass,
            style['layout-mobile-sider'],
            siderCollapse ? 'overflow-hidden' : style['layout-sider']
          ]"
        >
          <slot name="sider"></slot>
        </aside>
        <div
          v-show="!siderCollapse"
          :class="['absolute left-0 top-0 w-full h-full bg-[rgba(0,0,0,0.2)]', style['layout-mobile-sider-mask']]"
          @click="handleClickMask"
        ></div>
      </template>

      <!-- Main Content -->
      <main
        :id="isContentScroll ? scrollElId : undefined"
        :class="[
          'flex flex-col flex-grow',
          commonClass,
          contentClass,
          leftGapClass,
          { 'overflow-y-auto': isContentScroll }
        ]"
      >
        <slot></slot>
      </main>

      <!-- Footer -->
      <template v-if="showFooter">
        <footer
          v-show="!fullContent"
          :class="[
            style['layout-footer'],
            'flex-shrink-0',
            commonClass,
            footerClass,
            footerLeftGapClass,
            { 'absolute left-0 bottom-0 w-full': fixedFooter }
          ]"
        >
          <slot name="footer"></slot>
        </footer>
        <div
          v-show="!fullContent && fixedFooter"
          :class="[style['layout-footer-placement'], 'flex-shrink-0 overflow-hidden']"
        ></div>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type { AdminLayoutProps } from '../../types';
import { LAYOUT_SCROLL_EL_ID, LAYOUT_MAX_Z_INDEX, createLayoutCssVars } from './shared';
import style from './index.module.css';

defineOptions({
  name: 'AdminLayout'
});

const props = withDefaults(defineProps<AdminLayoutProps>(), {
  mode: 'vertical',
  scrollMode: 'content',
  scrollElId: LAYOUT_SCROLL_EL_ID,
  commonClass: 'transition-all-300',
  fixedTop: true,
  maxZIndex: LAYOUT_MAX_Z_INDEX,
  headerVisible: true,
  headerHeight: 56,
  tabVisible: true,
  tabHeight: 48,
  siderVisible: true,
  siderCollapse: false,
  siderWidth: 220,
  siderCollapsedWidth: 64,
  footerVisible: true,
  footerHeight: 48,
  rightFooter: false
});

interface Emits {
  /**
   * update siderCollapse
   */
  (e: 'update:siderCollapse', collapse: boolean): void;
}

const emit = defineEmits<Emits>();

type SlotFn = (props?: Record<string, unknown>) => any;

type Slots = {
  /** main */
  default?: SlotFn;
  /** header */
  header?: SlotFn;
  /** tab */
  tab?: SlotFn;
  /** sider */
  sider?: SlotFn;
  /** footer */
  footer?: SlotFn;
};
const slots = defineSlots<Slots>();

const cssVars = computed(() => createLayoutCssVars(props));

// config visible
const showHeader = computed(() => Boolean(slots.header) && props.headerVisible);
const showTab = computed(() => Boolean(slots.tab) && props.tabVisible);
const showSider = computed(() => !props.isMobile && Boolean(slots.sider) && props.siderVisible);
const showMobileSider = computed(() => props.isMobile && Boolean(slots.sider) && props.siderVisible);
const showFooter = computed(() => Boolean(slots.footer) && props.footerVisible);

// scroll mode
const isWrapperScroll = computed(() => props.scrollMode === 'wrapper');
const isContentScroll = computed(() => props.scrollMode === 'content');

// layout direction
const isVertical = computed(() => props.mode === 'vertical');
const isHorizontal = computed(() => props.mode === 'horizontal');

const fixedHeaderAndTab = computed(() => props.fixedTop || (isHorizontal.value && isWrapperScroll.value));

// css
const leftGapClass = computed(() => {
  if (!props.fullContent && showSider.value) {
    return props.siderCollapse ? style['left-gap_collapsed'] : style['left-gap'];
  }

  return '';
});

const headerLeftGapClass = computed(() => (isVertical.value ? leftGapClass.value : ''));

const footerLeftGapClass = computed(() => {
  const condition1 = isVertical.value;
  const condition2 = isHorizontal.value && isWrapperScroll.value && !props.fixedFooter;
  const condition3 = Boolean(isHorizontal.value && props.rightFooter);

  if (condition1 || condition2 || condition3) {
    return leftGapClass.value;
  }

  return '';
});

const siderPaddingClass = computed(() => {
  let cls = '';

  if (showHeader.value && !headerLeftGapClass.value) {
    cls += style['sider-padding-top'];
  }
  if (showFooter.value && !footerLeftGapClass.value) {
    cls += ` ${style['sider-padding-bottom']}`;
  }

  return cls;
});

function handleClickMask() {
  emit('update:siderCollapse', true);
}
</script>

<style scoped></style>