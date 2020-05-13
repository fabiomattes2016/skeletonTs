class Main {
  render() {
    let html = `
      <br />
      <div class="text-center mx-auto">
        <p class="text-success">TS Skeleton - Estrutura Básica para projetos Typescript</p>
        <img src="https://media1.giphy.com/media/fzZzoftMBR8is/giphy.gif?cid=ecf05e470714b1fd357e720b95474dfc3b2fa46f4d2e2239&rid=giphy.gif" alt="Skeleton" height="400">
        <br />
        <br />
        <br />
        <a class="btn btn-success" href="https://github.com/fabiomattes2016/skeletonTs" target="_blank">GitHub</a>
      </div>
    `
    let app = document.getElementById("app");
    app.innerHTML = html;
  }
}

export { Main }
