<template>
  <div class="w-full">
    <div class="flex w-full aspect-3 max-h-[400px] bg-baner bg-center bg-cover justify-center pt-4 px-6">
      <div class="mx-auto mb-auto rounded-full bg-black absolute blur-sm opacity-80 border-2 border-Secondary">
        <h2 class="md:text-6xl text-Neutral mx-6 my-4 font-serif">AZUR DRONE</h2>
      </div>
      <h1 class="text-3xl md:text-6xl text-Secondary mx-4 my-4 z-10 font-serif">AZUR DRONE</h1>
    </div>
    <div class="max-w-[80%] 2xl:max-w-[90%] mx-auto justify-center px-6">
      <div name="services" class="flex flex-wrap justify-center mx-auto">
        <router-link :to="'/valo'" class="no-underline">
          <div class="flex flex-col items-center m-4"><img src="/img/drone.jpg"
              alt="Service de drone pour valorisation immobilière dans le 06, France" width="320" height="213.3" srcset=""
              class=" max-w-[200px] xl:max-w-xs">
            <p>Valorisation immobilière</p>
          </div>
        </router-link>
        <router-link :to="'/insp'" class="no-underline">
          <div class="flex flex-col items-center m-4"> <img src="/img/drone2.jpg"
              alt="Service de drone pour Inspection d'infrastrucutre dans le 06, France" width="320" height="213.3"
              srcset="" class=" max-w-[200px] xl:max-w-xs">
            <p>Inspection d'infrastrucutre</p>
          </div>
        </router-link>
        <router-link :to="'/suiv'" class="no-underline">
          <div class="flex flex-col items-center m-4"> <img src="/img/vue.jpg"
              alt="Service de drone pour Suivi de chantier dans le 06, France" width="320" height="213.3" srcset=""
              class=" max-w-[200px] xl:max-w-xs">
            <p>Suivi de chantier</p>
          </div>
        </router-link>
        <router-link :to="'/vid'" class="no-underline">
          <div class="flex flex-col items-center m-4"> <img src="/img/photogrammetrie.jpg"
              alt="Service de drone pour Photogrammetrie dans le 06, France" width="320" height="213.3" srcset=""
              class=" max-w-[200px] xl:max-w-xs">
            <p>Photogrammetrie</p>
          </div>
        </router-link>
      </div>
    </div>
    <div class="max-w-2xl mx-auto px-6">
      <h2 class="text-Secondary">Bienvenue chez Azur Drone</h2>
      <p>Élevez vos projets avec l'excellence aérienne</p>
      <p>Bienvenue chez Azur Drone, votre partenaire de confiance pour des solutions de drone innovantes. Nous combinons
        la technologie de pointe avec une expertise inégalée pour offrir des services exceptionnels dans quatre domaines
        clés : la valorisation immobilière, l'inspection d'infrastructure, le suivi de chantier, et la vidéo aérienne.</p>
      <h3 class="text-Secondary">Nos Services</h3>
      <p><span class="text-white font-extrabold">Valorisation Immobilière :</span> Transformez la présentation de vos
        biens avec des images aériennes époustouflantes qui mettent en valeur chaque détail, attirant l'attention des
        clients potentiels.</p>
      <p><span class="text-white font-extrabold">Inspection d'Infrastructure :</span> Gagnez en efficacité avec nos
        services d'inspection par drone, assurant une évaluation précise et détaillée de vos infrastructures.</p>
      <p><span class="text-white font-extrabold">Suivi de Chantier :</span> Optimisez la gestion de vos projets de
        construction grâce à un suivi aérien en temps réel, offrant des mises à jour détaillées et des modèles 3D.</p>
      <p><span class="text-white font-extrabold">Vidéo Aérienne :</span> Créez des vidéos captivantes qui donnent vie à
        vos projets, offrant une perspective unique et engageante.</p>
      <h3 class="text-Secondary">Pourquoi Choisir Azur Drone ?</h3>
      <p><span class="text-white font-extrabold">Expertise :</span> Notre équipe possède une expertise approfondie dans
        l'utilisation des drones pour des applications variées, garantissant des résultats exceptionnels.</p>
      <p><span class="text-white font-extrabold">Technologie de Pointe :</span> Nous utilisons des drones équipés des
        dernières technologies pour fournir des images de haute qualité et des données précises.</p>
      <p><span class="text-white font-extrabold">Personnalisation :</span> Chaque projet est unique, et nos services sont
        adaptés à vos besoins spécifiques pour assurer une satisfaction maximale.</p>
      <h3 class="text-Secondary">Demandez Votre Devis Personnalisé</h3>
      <p>Prêt à élever vos projets vers de nouveaux sommets ? Demandez dès aujourd'hui un devis personnalisé pour
        découvrir comment Azur Drone peut faire la différence pour votre entreprise.</p>
    </div>
    <Contact></Contact>
  </div>
</template>

<script setup>
import Contact from "./Contact.vue";

</script>

<style scoped></style>
