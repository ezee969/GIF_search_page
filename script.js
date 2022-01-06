class MainPage {
  init() {
    this.domCache();
    this.gifGenerator('cat');
    this.domBind();
  }

  domCache() {
    this.searchBut = document.querySelector('#button');
    this.inputField = document.querySelector('#input');
    this.mainCont = document.querySelector('.main-cont');
    this.errorMesagge = document.querySelector('#error-mesagge');
  }

  domBind() {
    this.searchBut.addEventListener('click', () => {
      this.gifGenerator(this.inputField.value);
    });
  }

  gifGenerator(searchTerm) {
    fetch(`https://api.giphy.com/v1/gifs/translate?api_key=bxej8jvrToGlsgtSGGfWF4RDDp8eqW11&s=${searchTerm}`, { mode: 'cors' })
      .then((response) => (response.json()))
      .then((response) => {
        this.errorMesagge.style.display = 'none';
        this.gifDomRemove();
        this.img = document.createElement('img');
        this.img.src = response.data.images.original.url;
        this.mainCont.appendChild(this.img);
      })
      .catch(() => {
        this.gifDomRemove();
        this.errorMesagge.style.display = 'block';
      });
  }

  gifDomRemove() {
    if (this.img != null) {
      this.img.remove();
    }
  }
}

const gifPage = new MainPage();
gifPage.init();
