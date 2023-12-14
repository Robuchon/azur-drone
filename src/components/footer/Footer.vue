<template>
  <footer class="">
    <div
      class="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8"
    >
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="item in navigation"
          :key="item.name"
          :href="item.href"
          class="text-Primary hover:text-Neutral"
          target="_blank"
        >
          <span class="sr-only">{{ item.name }}</span>
          <component v-if="item.icon !== undefined" :is="item.icon" class="h-6 w-6" aria-hidden="true" />
          <svg-target :target="item.name" height="24" width="24"></svg-target>
        </a>
      </div>
      <div class="mt-8 md:order-1 md:mt-0">
        <p class="text-center text-xs leading-5 text-Primary">
          &copy; 2023 Azur Drone. Tout droit reservé.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";
import SvgTarget from "../svg/SvgTarget.vue";

const navigation = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/azur.drone",
  },
];
</script>
