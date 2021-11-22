<template>
  <div>
    <div>
      <a-input-group compact class="select">
        <strong>ORDENAR:</strong>
        <a-select style="width: 20%" default-value="Preco">
          <a-select-option value="Preco"> Preço </a-select-option>
          <a-select-option value="Lancamento"> Lançamento </a-select-option>
        </a-select>
      </a-input-group>
    </div>
    <div class="cardRow">
      <div
        class="divCard"
        v-for="(cards, index) in listCards"
        v-bind:key="index"
        v-show="cardSelected==='globe'|| cardSelected===cards.icon"
      >
        <a-card style="width: 250px" >
          <div>
            <font-awesome-icon v-show="cards.icon==='briefcase'" icon="briefcase" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='university'" icon="university" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='tree'" icon="tree" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='gavel'" icon="gavel" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='ban'" icon="ban" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='globe-americas'" icon="globe-americas" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='gem'" icon="gem" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='male'" icon="male" class="iconCard" />
            <font-awesome-icon v-show="cards.icon==='piggy-bank'" icon="piggy-bank" class="iconCard" />
            <p>{{ cards.name }}</p>
          </div>
          <a-button class="btnCard" type="primary" block> Saiba Mais </a-button>
        </a-card>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
  props:{
    cardSelected:String
  },

  data() {
    return {
      listCards: [
        {
          icon: "briefcase",
          name: "Profissional",
        },
        {
          icon: "university",
          name: "Reguladores",
        },
        {
          icon: "tree",
          name: "Sócio Ambiental",
        },
        {
          icon: "gavel",
          name: "Jurídico",
        },
        {
          icon: "gavel",
          name: "Jurídico",
        },
        {
          icon: "ban",
          name: "Listas Restritivas",
        },
        {
          icon: "globe-americas",
          name: "Mídia / Internet",
        },
        {
          icon: "globe-americas",
          name: "Mídia / Internet",
        },
        {
          icon: "globe-americas",
          name: "Mídia / Internet",
        },
        {
          icon: "gem",
          name: "Bens e Imóveis",
        },
        {
          icon: "gem",
          name: "Bens e Imóveis",
        },
        {
          icon: "male",
          name: "Cadastro",
        },
        {
          icon: "piggy-bank",
          name: "Financeiro",
        },
        {
          icon: "piggy-bank",
          name: "Financeiro",
        },
        {
          icon: "tree",
          name: "Sócio Ambiental",
        },
        {
          icon: "gavel",
          name: "Jurídico",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
.select {
  padding-top: 20px !important;
  display: flex !important;
  flex-direction: row;
  align-items: center;
  strong {
    padding-right: 10px;
    padding-left: 4%;
  }
}
.cardRow {
  display: flex;
  flex-direction: row;
  /* width: 60%; */
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding-bottom: 100px ;
}
.divCard {
  margin-top: 50px;
  /* margin-left: 4%;
  margin-right: 4%; */
}
.ant-card-body{
  padding: 0 !important;
}
.ant-card-body > div {
  margin: 50px;
  p {
    font-size: 16px;
    font-weight: bold;
  }
}
.iconCard {
  font-size: 40px;
  color: #ff7000;
}
.btnCard {
  background-color: #ff7000 !important;
  border-color: #ff7000 !important;

  &:hover {
    transition: 650ms;
    background-color: #ff6f00c9 !important;
    border-color: #ff6f00c9 !important;
  }
}
</style>
