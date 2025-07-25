<script setup lang="ts">
import { computed, ref } from 'vue';
import type { Tab, TabKey } from './types';
import TabLink from '@/components/TabLink.vue';

import NotificationSettings from '@/components/NotificationSettings.vue';
import PrivacySettings from '@/components/PrivacySettings.vue';
import GeneralSettings from '@/components/GeneralSettings.vue';
import FadeTransition from './components/FadeTransition.vue';
const currentTabComponent  =computed(()=>tabs.find(tab=>tab.key === currentTab.value)?.component)

const tabs: Tab[] = [
  { key: 'General', label: 'General', component: GeneralSettings },
  { key: 'Notification', label: 'Notification', component: NotificationSettings},
  { key: 'Privacy', label: 'Privacy', component: PrivacySettings }
];

const currentTab = ref<TabKey>('General');
</script>

<template>
  <main class="max-w-2xl max-auto px-4">
    <nav class="font-medium text-center text-gray-500 border-gray-200 mb-4">
      <ul class="flex flex-wrap -mb-px">
        <li v-for="tab in tabs" :key="tab.key">
          <TabLink :tab="tab" :currentTab="currentTab" @click="currentTab = tab.key as TabKey"/>
        </li>
      </ul>
    </nav>
  <FadeTransition ><component :is="currentTabComponent "/></FadeTransition>
  </main>
</template>
<style scoped>

</style>
