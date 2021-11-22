<template>
  <div>
      <SelectBar/>
  </div>
</template>

<script>
import Cards from '../components/Cards.vue';
import SelectBar from "../components/SelectBar.vue";
export default {
  components: { SelectBar, Cards },
  name: "Home",
};
</script>
