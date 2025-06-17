const mobileNav = document.querySelector('#mobile-nav')//max-h-0/100&&opacity-100;
const btnNav = document.querySelector('#nav-btn');
const megaMenubtn = document.querySelector('#mega-btn-dsk');
const megaMenuCtn = document.querySelector('#mega-menu-dskt');
const smallMegaMenubtn = document.querySelector('#small-mega-btn');
const smallMegaMenuCtn = document.querySelector('#small-mega-ctn');
const cookiesCtn = document.querySelector('aside#cookies')
const acceptButton = document.querySelector('#accept-cookies')
const declineButton = document.querySelector('#refuse-cookies')
btnNav.addEventListener('click', () => {
  const state = mobileNav.classList.contains('max-h-0')
  if (state) {
    mobileNav.classList.remove("max-h-0", "opacity-0")
    mobileNav.classList.add("max-h-auto", "opacity-100")
  } else {
    mobileNav.classList.add("max-h-0", "opacity-0")
    mobileNav.classList.remove("max-h-auto", "opacity-100")
  }
});
// desktop mega menu
let state = true
megaMenubtn.addEventListener('click', () => {
  if (state) {
    megaMenuCtn.style.height = "auto"
    megaMenuCtn.style.opacity = "100"
    megaMenuCtn.style.display = "initial"

    state = false
  } else {
    megaMenuCtn.style.opacity = "0"
    megaMenuCtn.style.height = "0px"
    megaMenuCtn.style.display = "none"

    state = true;
  }
});
// small screen mega menu
smallMegaMenubtn.addEventListener('click', () => {
  const state = smallMegaMenuCtn.classList.contains('max-h-0')
  if (state) {
    smallMegaMenuCtn.classList.remove("max-h-0")
    smallMegaMenuCtn.classList.add("max-h-auto")
  } else {
    smallMegaMenuCtn.classList.add("max-h-0")
    smallMegaMenuCtn.classList.remove("max-h-auto")
  }
});
function CookieConsentBanner() {
  // Check existing consent
  const storedConsent = localStorage.getItem('cookie_consent');
  if (storedConsent === null) {
    cookiesCtn.style.display = 'flex';
  } else {
    cookiesCtn.style.display = 'none';
  }

  // Event handlers
  acceptButton.addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'true');
    cookiesCtn.style.display = 'none';
  });

  declineButton.addEventListener('click', () => {
    localStorage.setItem('cookie_consent', 'false');
    cookiesCtn.style.display = 'none';
  });
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', CookieConsentBanner);

document.querySelector('#formSubmit').addEventListener('click', (e) => {
  e.preventDefault()
  const formName = document.querySelector('#name')
  const formEmail = document.querySelector('#email')
  const formMessage = document.querySelector('#message')
  const formConsent = document.querySelector('#consent')
  console.log(formName.value, formEmail.value, formConsent.checked, formMessage.value)
  if (formConsent.value !== '' && formName.value !== '' && formEmail.value !== '', formConsent.checked !== false) {
    window.location.href = './404.html'
  }
});
// // 
// function formFunction(e) {
//   e.preventDefault();

//   const nameForm = document.querySelector('#name')
//   console.log(`merci de nos contact${nameForm.value}`)
// }