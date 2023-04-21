<template>
  <div>
    <div class="container-fluid" style="padding-top: 40px">
      <div class="row">
        <div
          class="col-xl-12"
          v-for="(course, index) in specialcourses"
          :key="'special' + index"
        >
          <div class="card">
            <div class="blog-box blog-list row">
              <div class="col-sm-5">
                <img
                  class="img-fluid sm-100-w"
                  :src="getImgUrl(course.image)"
                  alt=""
                />
              </div>
              <div class="col-sm-7">
                <div class="blog-details">
                  <div class="blog-date digits">
                    <span v-text="course.dd"></span>
                  </div>
                  <h2 v-text="course.title"></h2>
                  <div class="blog-bottom-content">
                    <ul class="blog-social">
                      <li
                        v-text="'预计花费时间： ' + course.author + ' 小时'"
                      ></li>
                      <li
                        class="digits"
                        v-text="'预计取得积分： ' + course.hits + ' $SCR'"
                      ></li>
                    </ul>
                    <p class="mt-2">{{ course.mm }} {{ course.yy }}</p>
                    <hr />
                    <p class="mt-2" v-text="course.descr"></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex"

export default {
  name: "Learninglist",
  computed: {
    ...mapGetters({
      normalcourses: "courses/normalcourses"
    })
  },
  data() {
    return {
      specialcourses: [
        {
          id: 1,
          image: "stage1.png",
          dd: "第一篇章",
          mm: "建议等级：",
          yy: "SeeDAO 新人",
          author: "30",
          hits: 3000,
          title: "开启你的 Web3 冒险旅途",
          descr:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          descr_count: 1,
          category: 0,
          price: 0,
          status: 0,
          comments: [
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Molina Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
          ],
          special: 1
        },
        {
          id: 2,
          image: "stage2.png",
          dd: "第二篇章",
          mm: "建议等级：",
          yy: "L1 贡献者",
          author: "30",
          hits: 3000,
          title: "在 SeeDAO 中做有趣又好玩的事",
          descr:
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
          descr_count: 1,
          category: 0,
          price: 0,
          status: 0,
          comments: [
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Molina Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
          ],
          special: 1
        },
        {
          id: 3,
          image: "stage3.png",
          dd: "第三篇章",
          mm: "建议等级：",
          yy: "L2 贡献者",
          author: "30",
          hits: 3000,
          title: "组建自己的项目小队，创造价值",
          descr:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          descr_count: 2,
          category: 0,
          price: 0,
          status: 0,
          comments: [
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Molina Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
          ],
          special: 0
        },
        {
          id: 4,
          image: "stage4.png",
          dd: "第四篇章",
          mm: "建议等级：",
          yy: "L3 贡献者",
          author: "30",
          hits: 3000,
          title: "在社区中建立与发挥你的影响力",
          descr:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          descr_count: 2,
          category: 0,
          price: 0,
          status: 0,
          comments: [
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Molina Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
          ],
          special: 0
        },
        {
          id: 5,
          image: "stage5.png",
          dd: "第五篇章",
          mm: "建议等级：",
          yy: "L4 贡献者",
          author: "30",
          hits: 3000,
          title: "参与治理，帮助社区成员实现理想",
          descr:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          descr_count: 2,
          category: 0,
          price: 0,
          status: 0,
          comments: [
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Molina Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
          ],
          special: 0
        },
        {
          id: 6,
          image: "stage6.png",
          dd: "第六篇章",
          mm: "建议等级：",
          yy: "L5 贡献者",
          author: "30",
          hits: 3000,
          title: "推动实现数字城邦愿景的蓝图",
          descr:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
          descr_count: 2,
          category: 0,
          price: 0,
          status: 0,
          comments: [
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Molina Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            },
            {
              username: "Jolio Mark",
              role: "Designer",
              descr:
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which dont look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isnt anything embarrassing hidden in the middle of text."
            }
          ],
          special: 0
        },
      ]
    }
  },
  methods: {
    getImgUrl(filename) {
      var images = require.context("../../assets/images/stages/", false, /\.png$/)
      return images("./" + filename)
    }
  }
}
</script>
