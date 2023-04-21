<template>
	<div>
		<Breadcrumbs main="Form Widgets" title="clipboard"/>
		<!-- Container-fluid starts-->
		<div class="container-fluid">
			<div class="row">

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Clipboard On Text Input</h5>
						</div>
						<div class="card-body">
							<div class="clipboaard-container">
								<p class="card-description">Cut/copy from text input</p>
								
								<b-form-input v-model="text_input" placeholder="type some text to copy / cut" ref="text"></b-form-input>

								<div class="mt-3">
									<b-button variant="primary" @click="copy_text_input" class="mr-1"><i class="fa fa-copy"></i> Copy</b-button>
									<b-button variant="secondary" @click="cut_text_input"><i class="fa fa-cut"></i> Cut</b-button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Clipboard On Textarea</h5>
						</div>
						<div class="card-body">
							<div class="clipboaard-container height-clipboard">
								<p class="card-description">Cut/copy from textarea</p>

								<b-form-textarea v-model="textarea" ref="textarea" rows="1"></b-form-textarea>

								<div class="mt-3">
									<b-button variant="primary" @click="copy_textarea_input" class="mr-1"><i class="fa fa-copy"></i> Copy</b-button>
									<b-button variant="secondary" @click="cut_textarea_input"><i class="fa fa-cut"></i> Cut</b-button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Clipboard On Paragraph</h5>
						</div>
						<div class="card-body">
							<div class="clipboaard-container">
								<p class="card-description">Copy from Paragraph</p>
								<h6 class="border rounded card-body" v-text="paragraph" id="paragraph"></h6>
								<div class="mt-3">
									<b-button variant="primary" @click="copy_paragraph_input('paragraph')"><i class="fa fa-copy"></i> Copy</b-button>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div class="col-sm-12 col-xl-6">
					<div class="card">
						<div class="card-header">
							<h5>Copy Portion From Paragraph</h5>
						</div>
						<div class="card-body">
							<div class="clipboaard-container">
								<p class="card-description">Copy Portion From Paragraph</p>
								<h6 class="border rounded card-body">Lorem ipsum <span class="bg-primary text-white p-1" id="highlighted_paragraph">dolor sit amet</span>, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</h6>
								<div class="mt-3">
									<b-button variant="primary" @click="copy_highlighted_paragraph_input('highlighted_paragraph')"><i class="fa fa-copy"></i> Copy highlighted text</b-button>
								</div>
							</div>
						</div>
					</div>
				</div>

			</div>
		</div>
		<!-- Container-fluid Ends-->
	</div>
</template>

<script>
  export default {
    data(){
      return{
        text_input:'',
        textarea:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has',
        paragraph:'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
      };
    },
    methods:{
      copy_text_input(){
        this.$refs.text.select();
        document.execCommand('copy');
        alert('copied');
      },
      cut_text_input(){
        this.$refs.text.select();
        document.execCommand('cut');
        this.text_input = '';
        alert('cut');
      },
      copy_textarea_input(){
        this.$refs.textarea.select();
        document.execCommand('copy');
        alert('copied');
      },
      cut_textarea_input(){
        this.$refs.textarea.select();
        document.execCommand('cut');
        this.textarea = '';
        alert('cut');
      },
      copy_paragraph_input(elementId){
			
        var aux = document.createElement('input');
        aux.setAttribute('value', document.getElementById(elementId).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);
        alert('copied');
      },
      copy_highlighted_paragraph_input(elementId){
			
        var aux = document.createElement('input');
        aux.setAttribute('value', document.getElementById(elementId).innerHTML);
        document.body.appendChild(aux);
        aux.select();
        document.execCommand('copy');
        document.body.removeChild(aux);
        alert('copied');

      },
    }
  };
</script>