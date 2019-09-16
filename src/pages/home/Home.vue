<template>
  <main>
    <article>
      <div class="container">
        <div class="row">
          <div class="twelve column">
            <WelcomeComponent/>
            <SearchComponent/>
          </div>
        </div>
        <div class="spacer"></div>
        <div class="spacer"></div>
        <ProjectsComponent>
          <ProjectComponent v-on:onProjectChange="onProjectChange" v-for="project of projects" :project="project" :key="project.id"/>
        </ProjectsComponent>
      </div>
    </article>
    <aside>
      <ProjectDetailComponent :project="selectedProject"/>
    </aside>
  </main>
</template>

<script>
  import SearchComponent from '../../components/search/SearchComponent'
  import ProjectsComponent from '../../components/project/ProjectsComponent'
  import WelcomeComponent from '../../components/profile/WelcomeComponent'
  import ProjectDetailComponent from '../../components/project/ProjectDetailComponent'
  import ProjectComponent from '../../components/project/ProjectComponent'

  export default {
    name: 'Home',
    components: {
      ProjectsComponent,
      SearchComponent,
      WelcomeComponent,
      ProjectDetailComponent,
      ProjectComponent
    },
    methods: {
      onProjectChange(project,$event) {
         this.selectedProject = project;
      }
    },
    data: function () {
      return {
        selectedProject: null,
        projects: [
          {
            id: 1,
            title: 'Cyber Punk 1',
            description: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.

`,
            color: '#f95ebe',
            tasks: [
              { id: 1, content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n',done: true},
              { id: 2,content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n', done: false}
            ]
          },
          {
            id: 2,
            title: 'Cyber Punk 2',
            description: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.

`,
            color: '#7343be',
            tasks: [
              { id: 1, content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n',done: true},
              { id: 2,content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n', done: false}
            ]
          },
          {
            id: 3,
            title: 'Cyber Punk 3',
            description: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.

`,
            color: '#3aa1ef',
            tasks: [
              { id: 1, content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n',done: true},
              { id: 2,content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n', done: false}
            ]
          },
          {
            id: 4,
            title: 'Cyber Punk 4',
            description: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.

`,
            color: '#f09e6e',
            tasks: [
              { id: 1, content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n',done: true},
              { id: 2,content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n', done: false}
            ]
          },
          {
            id: 5,
            title: 'Cyber Punk 5',
            description: `Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500.

`,
            color: '#31b5b8',
            tasks: [
              { id: 1, content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n',done: true},
              { id: 2,content: 'Le Lorem Ipsum est le faux texte standard de l\'imprimerie depuis les années 1500.\n' +
                  '\n', done: false}
            ]
          }
        ]
      }
    }
  }
</script>


<style lang="scss" scoped>
  @import "../../styles/base.scss";
</style>
