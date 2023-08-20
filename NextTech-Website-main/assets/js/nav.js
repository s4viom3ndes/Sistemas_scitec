class MobileNavbar {
    constructor(mobileMenu, navList, navLinks, main) {
      this.mobileMenu = document.querySelector(mobileMenu);
      this.navList = document.querySelector(navList);
      this.navLinks = document.querySelectorAll(navLinks);
      this.main = document.getElementsByTagName(main);
      this.activeClass = "active";
  
      this.handleClick = this.handleClick.bind(this);
    }
  
    animateLinks() {
      this.navLinks.forEach((link, index) => {
        link.style.animation ?
          (link.style.animation = "") :
          (link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`);
      });
    }
  
    handleClick() {
      this.navList.classList.toggle(this.activeClass);
      this.mobileMenu.classList.toggle(this.activeClass);
      this.animateLinks();
    }
  
    addClickEvent() {
      this.mobileMenu.addEventListener("click", this.handleClick);
    }
  
    mainClick() {
      if (this.main && this.main[0]) {
        this.main[0].addEventListener("click", this.handleClick);
      }
    }
  
    // Função para fechar a navbar ao clicar em um link de navegação
    closeNavbar() {
      this.navLinks.forEach(link => {
        link.addEventListener("click", () => {
          this.navList.classList.remove(this.activeClass);
          this.mobileMenu.classList.remove(this.activeClass);
          this.animateLinks();
        });
      });
    }
  
    init() {
      if (this.mobileMenu) {
        this.addClickEvent();
        this.closeNavbar(); // Chama a função closeNavbar() para fechar a navbar ao clicar em um link de navegação
      }
    }
  }
  
  const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    ".nav-list",
    ".nav-list li",
    "main"
  );
  
  mobileNavbar.init();
  mobileNavbar.mainClick();
  