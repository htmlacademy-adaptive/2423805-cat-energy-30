const siteList = document.querySelector('.main-nav__list');
const navBurger = document.querySelector('.main-nav__burger');

siteList.classList.add('main-nav__list--closed');
navBurger.classList.remove('main-nav__burger--active');

navBurger.addEventListener('click', () => {
  if (siteList.classList.contains('main-nav__list--closed')) {
    siteList.classList.remove('main-nav__list--closed');
    navBurger.classList.add('main-nav__burger--active');
  } else {
    siteList.classList.add('main-nav__list--closed');
    navBurger.classList.remove('main-nav__burger--active');
  }
});
