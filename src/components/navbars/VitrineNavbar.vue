<template>
  <Disclosure as="nav" class="z-30" v-slot="{ open }">
    <div
      class="flex items-center justify-between px-8 py-3 md:px-8 md:py-6 lg:px-24 xl:mx-auto xl:w-[1200px] xl:px-0"
    >
    
    <div class="flex items-center justify-between">
        <img src="/img/logo.png" alt="logo Azur Drone" srcset="" class="w-14 h-14 md:w-20 md:h-20 -my-3 md:-my-6 mr-2">
        <PopoverGroup
          as="nav"
          class="mx-auto flex flex-wrap justify-center space-x-2 lg:space-x-6"
        >
          <div v-for="item in navigation">
            <div v-if="item.dataNav === undefined" class="flex">
              <router-link
                :to="item.goto"
                class="my-auto flex w-full items-center rounded-md p-1 text-center text-base font-medium no-underline md:px-3 md:py-2"
                :class="
                  item.goto === router.currentRoute.value.path
                    ? 'pointer-events-none text-Secondary'
                    : 'text-Primary hover:bg-Secondary hover:text-Accent'
                "
              >
                <SvgTarget
                  :target="item.logo"
                  class="h-5 w-5 md:mr-2"
                ></SvgTarget>
                <span class="hidden text-inherit md:block">
                  {{ item.name }}
                </span>
              </router-link>
            </div>
            <Popover v-else class="flex" @mouseleave="opendropdown = false">
              <PopoverButton @mouseover="opendropdown = true">
                <p
                  class="my-auto flex w-full items-center rounded-md p-1 text-center text-base font-medium hover:bg-Secondary hover:text-Accent md:px-3 md:py-2"
                  :class="
                    'Input' === router.currentRoute.value.name ||
                    'Button' === router.currentRoute.value.name
                      ? 'text-Secondary'
                      : 'text-Primary'
                  "
                >
                  <SvgTarget
                    :target="item.logo"
                    class="h-5 w-5 md:mr-2"
                  ></SvgTarget>
                  <span class="hidden text-inherit md:block">
                    {{ item.name }}
                  </span>
                </p>
              </PopoverButton>
              <transition
                enter-active-class="transition ease-out duration-200"
                enter-from-class="translate-y-5 opacity-0"
                enter-to-class="opacity-100 translate-y-0 translate-x-0"
                leave-active-class="transition ease-in duration-150"
                leave-from-class="opacity-100 translate-y-0 translate-x-0"
                leave-to-class="translate-y-5 opacity-0"
              >
                <PopoverPanel
                  v-if="opendropdown"
                  class="absolute z-20 mt-7 -ml-10 md:mt-10 md:-ml-2"
                  :class="opendropdown"
                  static
                >
                  <DropDown
                    class=""
                    :dataNav="item.dataNav"
                    @action="opendropdown = false"
                  ></DropDown>
                </PopoverPanel>
              </transition>
            </Popover>
          </div>
        </PopoverGroup>
        <!-- Mobile menu button -->
      </div>
      <div class="flex justify-center space-x-6 md:order-2">
        <a
          v-for="itemSocial in navigationSocial"
          :key="itemSocial.name"
          :href="itemSocial.href"
          class="text-Primary hover:text-Secondary"
          target="_blank"
        >
          <span class="sr-only">{{ itemSocial.name }}</span>
          <component
            v-if="itemSocial.icon !== undefined"
            :is="itemSocial.icon"
            class="h-6 w-6"
            aria-hidden="true"
          />
          <svg-target
            :target="itemSocial.name"
            height="24"
            width="24"
          ></svg-target>
        </a>
      </div>
    </div>
    <!-- Mobile menu -->
  </Disclosure>
</template>

<script setup>
import { ref } from "vue";
import router from "@router";
import SvgTarget from "../svg/SvgTarget.vue";

import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Disclosure,
} from "@headlessui/vue";

import DropDown from "./vitrineComponents/DropDown.vue";

const props = defineProps(["navigation"]);
const opendropdown = ref(false);

const navigationSocial = [
  {
    name: "Facebook",
    href: "https://www.facebook.com/azur.drone",
  },
];
</script>

<style lang="scss" scoped></style>
