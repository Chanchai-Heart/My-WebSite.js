<script setup>
import navbar from './components/navbar/navbar.vue';
</script>
<template>
  <main>
    <navbar class="sticky top-0" />
    <div>
      <router-view></router-view>
    </div>
  </main>
    
</template>


