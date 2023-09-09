//burger menu 

const burgerBtn = document.querySelector('.burger');
const menu = document.querySelector('.nav');

burgerBtn.addEventListener('click', function () {
  this.classList.toggle('active');
  menu.classList.toggle('active');
});


// HEADER HIDE
let prevScrollPos = window.scrollY;


window.addEventListener("scroll", function () {
  const currentScrollPos = window.scrollY;

  if (prevScrollPos > currentScrollPos) {

    document.querySelector('.header').style.top = '0';
  } else {
    document.querySelector('.header').style.top = '-200px';
  }

  prevScrollPos = currentScrollPos;


  let header = document.querySelector(".header");
  let scrolled = window.scrollY || document.documentElement.scrollTop;

  if (scrolled > 0) {
    header.classList.add("show");
  } else {
    header.classList.remove("show");

  }
});



// TABS 

const tabsBtn = document.querySelectorAll('.tab_btn');
const tabsItems = document.querySelectorAll('.tab');


tabsBtn.forEach(item => {
  item.addEventListener('click', () => {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute('data-tab')
    let currentTab = document.querySelector(tabId)

    tabsBtn.forEach((item) => {
      item.classList.remove('active')
    })
    tabsItems.forEach((item) => {
      item.classList.remove('show')
    })
    currentBtn.classList.add('active')
    currentTab.classList.add('show')
  })
})





// slidess  


new Swiper('.learning-tabs-swiper', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  keyboard: {
    enabled: true,
    onlyViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
    eventsTarget: '.swiper-slide',
  },
  simulateTouch: true,
  touchRatio: 1,
  touchAngle: 45,
  grabCursor: true,
  slideToClickedSlide: true,

  spaceBetween: 30,
  slidesPerView: 'auto',
  watchOverflow: true,
  slidesPerGroup: 1,
  centeredSlides: false,
  initialSlide: 1,
  loop: true,
  freeMode: true,

})




// ACCORDION 
function toggleAccordion(item) {
  item.classList.toggle("active");
  let content = item.lastElementChild;
  content.classList.toggle("active");
}



// SEND FORM 

const TOKEN = "6626590357:AAGfTNUpLfZeUYuBQjClER2oHYTNaCE9xQk";
const CHAT_ID = "-1001679445964";
const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;
const success = document.getElementById('success');


document.getElementById('form').addEventListener('submit', function (e) {
  e.preventDefault();


  let error = formValidate(form)

  if (error === 0) {
    let message = `<b>Заявка с сайта</b>\n`;
    message += `<b>Отправитель: </b> ${this.name.value}\n`;
    message += `<b>Почта: </b> ${this.email.value}\n`;
    message += `<b>Номер телефона: </b> ${this.tel.value}\n`;

    axios.post(URI_API, {
      chat_id: CHAT_ID,
      parse_mode: 'html',
      text: message,
    })
      .then((res) => {
        this.name.value = "";
        this.email.value = "";
        this.tel.value = "";
        success.style.display = "flex";

      })
  } else {
    alert('Заполните обязательные поля')
  }

  function formValidate(form) {

    let error = 0;
    let formreq = document.querySelectorAll('._req');

    for (let i = 0; i < formreq.length; i++) {
      const input = formreq[i];

      if (input.classList.contains('_name')) {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }
      if (input.classList.contains('_tel')) {
        if (input.value === '') {
          formAddError(input);
          error++;
        }
      }

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      }
    }

    return error;
  }

  function formAddError(input) {
    input.parentElement.classList.add('_error');
    input.classList.add('_error')
  }

  function formRemoveError(input) {
    input.parentElement.classList.remove('_error');
    input.classList.remove('_error');
  }

  function emailTest(input) {
    return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(input.value);
  }

});








// traiding view


