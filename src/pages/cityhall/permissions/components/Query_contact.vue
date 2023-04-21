<template>
  <div>
    <a v-b-modal="'modal-QueryContact' + id" href="#">编辑</a>

    <b-modal
      :id="'modal-QueryContact' + id"
      title="編輯權限"
      ok-title="Send message"
      class="theme-modal"
      @ok="handleOk"
    >
      <form @submit.stop.prevent="handleSubmit">
        <div class="row col-sm-12">
          <div class="col-sm-3 mb-3">功能模块</div>
          <div class="col-sm-9 mb-3">
            <b-form-input
              type="text"
              v-model="item.model"
              disabled
            ></b-form-input>
          </div>
          <div class="col-sm-3 mb-3">管理者 SBT</div>
          <div class="col-sm-9 mb-3">
            <b-form-select
              v-model="levelSelected"
              :options="levelOptions"
            ></b-form-select>
          </div>
          <div class="col-sm-3 mb-3">拥有权限</div>
          <div class="col-sm-9 mb-3">
            <div class="row">
              <div class="col">
                <div class="checkbox-animated">
                  <label class="d-block" for="edo-ani">
                    <input
                      class="radio_animated"
                      id="edo-ani"
                      type="radio"
                      name="rdo-ani"
                      checked="true"
                    />
                    全部选中
                  </label>
                  <label class="d-block" for="edo-ani1">
                    <input
                      class="radio_animated"
                      id="edo-ani1"
                      type="radio"
                      name="rdo-ani"
                      checked=""
                    />
                    发布任务
                  </label>
                  <label class="d-block" for="edo-ani2">
                    <input
                      class="radio_animated"
                      id="edo-ani2"
                      type="radio"
                      name="rdo-ani"
                      checked=""
                    />
                    编辑任务
                  </label>
                  <label class="d-block" for="edo-ani3">
                    <input
                      class="radio_animated"
                      id="edo-ani3"
                      type="radio"
                      name="rdo-ani"
                      checked=""
                    />
                    删除任务
                  </label>
                  <label class="d-block" for="edo-ani4">
                    <input
                      class="radio_animated"
                      id="edo-ani4"
                      type="radio"
                      name="rdo-ani"
                      checked=""
                    />
                    验收任务
                  </label>
                  <label class="d-block mb-0" for="edo-ani5">
                    <input
                      class="radio_animated"
                      id="edo-ani5"
                      type="radio"
                      name="rdo-ani"
                      checked=""
                    />
                    设置子管理员
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
export default {
  props: ["id", "item"],
  name: "QueryContact",
  data: (vm) => {
    return {
      levelSelected: 1,
      levelOptions: [{ value: 1, text: "OS 最高管理员" }],
    };
  },
  methods: {
    handleOk(bvModalEvent) {
      // Prevent modal from closing
      bvModalEvent.preventDefault();
      // Trigger submit handler
      this.handleSubmit();
    },
    handleSubmit() {},
  },
};
</script>
