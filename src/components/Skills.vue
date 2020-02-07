<template>
  <div class="skills">
    <b-card header="Skills">
      <div>
        <b-card-group deck>
          <b-card footer="HTML5" no-body>
            <div>
              <i class="fab fa-html5 html5" v-b-tooltip.hover title="HTML5"></i>
            </div>
          </b-card>
          <b-card footer="CSS3" no-body>
            <div>
              <i class="fab fa-css3-alt css3" v-b-tooltip.hover title="CSS3"></i>
            </div>
          </b-card>
          <b-card footer="JavaScript" no-body>
            <div>
              <i class="fab fa-js-square js" v-b-tooltip.hover title="JavaScript"></i>
            </div>
          </b-card>
          <b-card footer="Vue.js" no-body>
            <div>
              <i class="fab fa-vuejs vue" v-b-tooltip.hover title="Vue.js"></i>
            </div>
          </b-card>
          <b-card footer="Python" no-body>
            <div>
              <i class="fab fa-python python" v-b-tooltip.hover title="Python"></i>
            </div>
          </b-card>
          <b-card no-body>
            <div>
              <i
                class="fas fa-chart-pie"
                v-b-tooltip.hover
                title="pandas, Matplotlib, D3.js, bokehJS"
              ></i>
            </div>
            <template v-slot:footer>
              <span
                class="hover-me"
                v-b-tooltip.hover
                placement="rightbottom"
                title="pandas, Matplotlib, D3.js, bokehJS"
              >Data Analysis</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
      <div class="py-4">
        <b-card-group deck>
          <b-card footer="npm" no-body>
            <div>
              <i class="fab fa-npm npm" v-b-tooltip.hover title="npm"></i>
            </div>
          </b-card>
          <b-card footer="Node.js" no-body>
            <div>
              <i class="fab fa-node-js node" v-b-tooltip.hover title="Node.js"></i>
            </div>
          </b-card>
          <b-card footer="Bootstrap 4" no-body>
            <div>
              <i class="fab fa-bootstrap bootstrap" v-b-tooltip.hover title="Bootstrap 4"></i>
            </div>
          </b-card>
          <b-card no-body>
            <div>
              <i
                class="fab fa-windows msft"
                v-b-tooltip.hover
                title="Word, Excel, Powerpoint, Teams, Sharepoint, Project"
              ></i>
            </div>
            <template v-slot:footer>
              <span
                class="hover-me"
                v-b-tooltip.hover
                placement="rightbottom"
                title="Word, Excel, Powerpoint, Teams, Sharepoint, Project"
              >Microsoft Office</span>
            </template>
          </b-card>
          <b-card no-body>
            <div>
              <i class="fab fa-google-drive gdrive" v-b-tooltip.hover title="Docs, Sheets, Slides"></i>
            </div>
            <template v-slot:footer>
              <span
                class="hover-me"
                v-b-tooltip.hover
                placement="rightbottom"
                title="Docs, Sheets, Slides"
              >Google Drive</span>
            </template>
          </b-card>
          <b-card no-body>
            <div>
              <i class="fas fa-database color-1" v-b-tooltip.hover title="mongoDB, SQLite, MySQL"></i>
            </div>
            <template v-slot:footer>
              <span
                class="hover-me"
                v-b-tooltip.hover
                placement="rightbottom"
                title="mongoDB, SQLite, MySQL"
              >SQL/NoSQL</span>
            </template>
          </b-card>
        </b-card-group>
      </div>
    </b-card>
  </div>
</template>
<script>
export default {
  name: "Skills"
};
</script>

<style scoped>
.skills {
  padding-top: 2rem;
  width: 75%;
  margin: auto;
  color: rgba(0, 0, 0, 0.4);
  font-size: 64px;
}
.fab,
.fas {
  padding: 0.5rem;
  cursor: pointer;
}

.card-header {
  text-align: center;
  font-size: 24px;
  color: #949494;
}
.card-subtitle,
.card-title {
  text-align: center;
  color: #949494;
  font-size: 16px;
}
.text,
.card-footer {
  font-size: 16px;
}

.hover-me {
  cursor: pointer;
  /* color:steelblue; */
}
</style>