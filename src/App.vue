<template>
  <div class="relative flex min-h-screen flex-col">
    <div class="absolute left-0 right-0 top-0 bottom-0 w-full overflow-hidden lg:w-full cursor-not-allowed">
      <svg
        class="absolute inset-0 h-full w-full stroke-Secondary/80 [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"
        aria-hidden="true">
        <defs>
          <pattern id="54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2" width="200" height="200" x="100%" y="-1"
            patternUnits="userSpaceOnUse">
            <path d="M130 200V.5M.5 .5H200" fill="none" />
          </pattern>
        </defs>
        <svg x="100%" y="-1" class="overflow-visible fill-Secondary/10">
          <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
        </svg>
        <svg x="100%" y="399" class="overflow-visible fill-Secondary/20">
          <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
        </svg>
        <svg x="100%" y="799" class="overflow-visible fill-Secondary/30">
          <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
        </svg>
        <svg x="100%" y="1199" class="overflow-visible fill-Secondary/40">
          <path d="M-470.5 0h201v201h-201Z" stroke-width="0" />
        </svg>

        <rect width="100%" height="100%" stroke-width="0" fill="url(#54f88622-e7f8-4f1d-aaf9-c2f5e46dd1f2)" />
      </svg>
      <div class="absolute top-[5%] right-[5%] transform-gpu blur-3xl" aria-hidden="true">

      </div>
      <div class="absolute bottom-[5%] right-[5%] transform-gpu blur-3xl" aria-hidden="true">

      </div>
      <div class="absolute left-[10%] top-[15%] -rotate-90 transform-gpu blur-3xl" aria-hidden="true">

      </div>
      <div class="absolute left-[10%] bottom-[15%] rotate-90 transform-gpu blur-3xl" aria-hidden="true">

      </div>
    </div>

    <div class="sticky top-0 z-20" :class="[
      isScrolled ? 'shadow-Secondary' : '',
      scrollPosition === 0 || scrollPosition < 10
        ? 'shadow-none'
        : scrollPosition > 10 && scrollPosition < 80
          ? 'shadow-sm '
          : scrollPosition > 81 && scrollPosition < 160
            ? 'shadow'
            : scrollPosition > 161
              ? 'shadow-md'
              : '',
    ]" :style="classOpacity">
      <VitrineNavbar :navigation="navigation"></VitrineNavbar>
    </div>
    <div class="overflow-x-hidden z-10">
      <transition enter-active-class="transition ease-out delay-150 duration-200" enter-from-class="opacity-0"
        enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100"
        leave-to-class="opacity-0">
        <RouterView class="mx-auto"></RouterView>
      </transition>
    </div>


    <Footer class="z-10 mt-auto"></Footer>
  </div>
</template>

<script setup>
import VitrineNavbar from "./components/navbars/VitrineNavbar.vue";
import Footer from "./components/footer/Footer.vue";
import { ref, onMounted, watch } from "vue";

const navigation = ref([
  { name: "Accueil", goto: "/home", logo: "HomeIcon" },
  {
    name: "Services",
    logo: "DocumentTextIcon",
    dataNav: [
      { name: "Valorisation immobilière", goto: "/valo" },
      { name: "Inspection d'infrastrucutre", goto: "/insp" },
      { name: "Suivi de chantier", goto: "/suiv" },
      { name: "Vidéo aérienne", goto: "/vid" },
    ],
  },
  { name: "Contact", goto: "/Contact", logo: "ChatBubbleBottomCenterTextIcon" },
]);

const isScrolled = ref(false);
const scrollPosition = ref(0);
const classOpacity = ref({ "background-color": "rgb(5 5 5 / 0)" });

function handleScroll() {
  isScrolled.value = window.pageYOffset > 0;
  scrollPosition.value = window.pageYOffset;
}

watch(
  () => scrollPosition.value,
  () => {
    if (scrollPosition.value < 100) {
      classOpacity.value = {
        "background-color":
          "rgb(5 5 5 / " + scrollPosition.value / 100 + ")",
      };
    } else if (scrollPosition.value > 100) {
      classOpacity.value = {
        "background-color": "rgb(5 5 5 / 1)",
      };
    }
  },
);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});
</script>
