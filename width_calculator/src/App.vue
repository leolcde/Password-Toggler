<script setup>
import { useWindowSize } from '../utils/resize.js';

const { width, height } = useWindowSize();
</script>

<template>
  <h1 class="text">Width Calculator</h1>
  <p class="text"><span>{{ width }} px</span></p>
  <p class="text"><span>{{ height }} px</span></p>
</template>

<style>

body
{
  background: #EEAECA;
  background: radial-gradient(circle, rgba(238, 174, 202, 1) 0%, rgba(148, 187, 233, 1) 100%);
}

.text {
  color: #69a4e7;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 700;
  font-size: 2.5rem;
  text-transform: uppercase;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);
  letter-spacing: 2px;
}

</style>
