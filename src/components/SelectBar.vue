<template>
  <div>
    <div>
      <a-menu v-model="current" mode="horizontal">
        <a-menu-item key="globe" class="icon" @click="filterCategory('globe')">
          <font-awesome-icon icon="globe" />
          <p>Todos</p>
        </a-menu-item>
        <a-menu-item key="briefcase" class="icon" @click="filterCategory('briefcase')">
          <font-awesome-icon icon="briefcase" />
          <p>Profissional</p>
        </a-menu-item>
        <a-menu-item key="university" class="icon" @click="filterCategory('university')">
          <font-awesome-icon icon="university" />
          <p>Reguladores</p>
        </a-menu-item>
        <a-menu-item key="tree" class="icon" @click="filterCategory('tree')">
          <font-awesome-icon icon="tree" />
          <p>Sócio Ambiental</p>
        </a-menu-item>
        <a-menu-item key="gavel" class="icon" @click="filterCategory('gavel')">
          <font-awesome-icon icon="gavel" />
          <p>Jurídico</p>
        </a-menu-item>
        <a-menu-item key="ban" class="icon" @click="filterCategory('ban')">
          <font-awesome-icon icon="ban" />
          <p>Listas Restritivas</p>
        </a-menu-item>
        <a-menu-item key="globe-americas" class="icon" @click="filterCategory('globe-americas')">
          <font-awesome-icon icon="globe-americas" />
          <p>Mídia / Internet</p>
        </a-menu-item>
        <a-menu-item key="gem" class="icon" @click="filterCategory('gem')">
          <font-awesome-icon icon="gem" />
          <p>Bens e Imóveis</p>
        </a-menu-item>
        <a-menu-item key="male" class="icon" @click="filterCategory('male')">
          <font-awesome-icon icon="male" />
          <p>Cadastro</p>
        </a-menu-item>
        <a-menu-item key="piggy-bank" class="icon" @click="filterCategory('piggy-bank')">
          <font-awesome-icon icon="piggy-bank" />
          <p>Financeiro</p>
        </a-menu-item>
      </a-menu>
    </div>
    <Cards :cardSelected="cardSelected" />
  </div>
</template>
<script>
import Cards from './Cards.vue'
export default {
  name: "SelectBar",
  components:{Cards},
  methods: {
    filterCategory(key) {
      this.cardSelected = key
    },
  },
  data() {
    return {
      current: ["globe"],
      cardSelected:"globe"
    };
  },
};
</script>

<style lang="scss" scope>
.ant-menu-horizontal {
  line-height: 35px !important;
  font-size: 25px !important;
  border-bottom: 1px solid #fff !important;
  p {
    margin: 0;
    padding: 0;
    font-size: 14px;
    font-weight: 500;
  }
  svg {
    margin: 10px;
  }
}
.ant-menu-item-selected {
  border-radius: 5px;
  color: #fff !important;
  border-bottom: 2px solid #fff !important;
  background: #ff7000 !important;
  border-bottom: 2px solid #b30c0c !important;
}
.icon {
  background: #f0f0f0;
  &:hover {
    transition: 650ms;
    border-radius: 5px;
    color: #fff !important;
    border-bottom: 2px solid #b30c0c !important;
    background: #ff7000 !important;
  }
}
</style>
