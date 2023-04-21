<template>
  <div class="customizer-header">
    <i class="icofont-close icon-close" @click="closecustomizer()"></i>
    <h5>Customizer</h5>
    <p class="mb-0">
      Try It Real Time <i class="fa fa-thumbs-o-up txt-primary"></i>
    </p>
    <button v-b-modal.modal-customizer class="btn btn-primary plus-popup mt-2">
      Configuration
    </button>
    <b-modal id="modal-customizer" title="Modal Title" class="theme-modal">
      <div class="modal-header modal-copy-header">
        <h5 class="headerTitle mb-0">Customizer configuration</h5>
      </div>
      <div class="modal-body">
        <div class="config-popup">
          <p>
            To replace our design with your desired theme. Please do
            configuration as mention
          </p>
          <p>
            <b>Path : src > data > layout.json</b>
          </p>
          <div>
            <pre>
										<code>
											<b-form-textarea :value="data" ref="layout" rows="1" v-bind:style="styleObject"></b-form-textarea>
											{{layout}}
										</code>
									</pre>
          </div>
          <button class="btn btn-primary mt-2" @click="copyText()">
            Copy Json
          </button>
        </div>
      </div>
    </b-modal>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  export default {
    name: 'CustomizerConfiguration',
    data() {
      return {
        styleObject: {
          position: 'fixed',
          left: '0',
          top: '0',
          opacity: '0',
        },
      };
    },
    computed: {
      ...mapState({
        customizer: (state) => state.menu.customizer,
        data: (state) => JSON.stringify(state.layout.layout),
        layout: (state) => state.layout.layout,
      }),
    },
    methods: {
      closecustomizer() {
        this.$store.state.menu.customizer = '';
      },
      copyText() {
        this.$refs.layout.select();
        document.execCommand('copy');
        this.$toasted.show('Code Copied to clipboard', {
          theme: 'outline',
          position: 'top-right',
          type: 'default',
          duration: 2000,
        });
      },
    },
  };
</script>
