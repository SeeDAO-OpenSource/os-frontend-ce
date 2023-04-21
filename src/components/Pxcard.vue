<!-- 
    =================== Component detail ====================
    File Name: PxCard.vue
    Description: Glovbal Card Component
    =================== Component detail ====================
-->

<template>
  <div>
    <b-card no-body :class="{ 'full-card' : fullCard}">
      <template v-slot:header v-if="showHeader || this.$slots.headerCustom">
        <h5 v-if="title">{{ title }}</h5>
        
        <!-- header actions slot -->
        <div v-if="showAction">
          <slot name="headerAction">
            <div class="card-header-right">
              <ul class="list-unstyled card-option" :class="{ openaction : openActions}">
                <li>
                  <!-- <i @click="openCardActions()" :class="openActions ? 'icofont icofont-double-right' : 'fa fa-spin fa-cog'"></i> -->
                  <i class='fa fa-spin fa-cog'></i>
                </li>
                <li @click="openFullCard()">
                  <i
                    class="icofont full-card"
                    :class="fullCard ? 'icofont-resize' : 'icofont-maximize'"
                  ></i>
                </li>
                <li @click="toggleCard()">
                  <i
                    class="icofont minimize-card"
                    :class="cardToggle ? 'icofont-minus' : 'icofont-plus'"
                  ></i>
                </li>
              </ul>
            </div>
          </slot>
        </div>

        <!-- header custom content -->
        <slot name="headerCustom"></slot>
      </template>

      <!-- card body with no-padding -->
      <b-card-body
        v-if="this.$slots.default"
        class="p-0"
        :style="cardToggle ? {'display': 'block'} : {'display': 'none'} "
      >
        <slot></slot>
      </b-card-body>
      <!-- card body with padding -->
      <b-card-body v-else :style="cardToggle ? {'display': 'block'} : {'display': 'none'} ">
        <slot name="with-padding"></slot>
      </b-card-body>

      <!-- footer -->
      <template v-slot:footer v-if="this.$slots.footer">
        <slot name="footer"></slot>
      </template>

      <!-- card custom content -->
      <slot name="custom-content"></slot>
    </b-card>
    
  </div>
</template>

<script>
  export default {
    name: 'px-card',
    props: {
      title: String,
      actions: {
        type: Boolean,
        default: true,
      }
    },
    data() {
      return {
        openActions: false,
        fullCard: false,
        cardToggle: true
      };
    },
    computed: {
      showHeader() {
        return this.title;
      },
      showAction() {
        return this.$slots.headerAction || this.actions;
      }
    },
    methods: {
      openCardActions() {
        this.openActions = !this.openActions;
      },
      openFullCard() {
        this.fullCard = !this.fullCard;
      },
      toggleCard() {
        this.cardToggle = !this.cardToggle;
      }
    }
  };
</script>