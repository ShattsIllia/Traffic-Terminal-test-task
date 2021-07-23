function showMenu() {
    const menuBtn = document.querySelector('.header__menu-icon');
    const menuWrapper = document.querySelector('.header__menu-items');
    menuBtn.addEventListener('click', () => {
        if (menuWrapper.classList.contains('header__menu-items_active')) {
            menuWrapper.classList.remove('header__menu-items_active');
        } else {
            menuWrapper.classList.add('header__menu-items_active');
        }
    })
}
showMenu()


function closeMenu() {
    const menuItems = document.querySelectorAll('.header__menu-item');
    const menuWrapper = document.querySelector('.header__menu-items');
    for (let i = 0; i < menuItems.length; i++) {
        const item = menuItems[i];
        item.addEventListener('click', () => {
            menuWrapper.classList.remove('header__menu-items_active');
        })
    }
}
closeMenu()


function showRegisterPopup() {
    const registerBtn = document.querySelector('.header__register-btn');
    const registerPopupWrapper = document.querySelector('.register-popup-wrapper');
    registerBtn.addEventListener('click', () => {
        registerPopupWrapper.style.display = 'block';
    })
}
showRegisterPopup()

function showSubscribePopup() {
    const subscribeBtn = document.querySelector('.header__btn-login');
    const subscribePopupWrapper = document.querySelector('.subscribe-popup-wrapper');
    subscribeBtn.addEventListener('click', () => {
        subscribePopupWrapper.style.display = 'block';
    })

}
showSubscribePopup()


function closeRegisterPopup() {
    const registerPopupWrapper = document.querySelector('.register-popup-wrapper');
    const closeBtn = document.querySelector('.register-popup__closeBtn');
    const registerBtn = document.querySelector('.register-popup__btn');
    console.log(registerBtn)
    registerBtn.addEventListener('click', () => {
        registerPopupWrapper.style.display = 'none';
    })
    closeBtn.addEventListener('click', () => {
        registerPopupWrapper.style.display = 'none';
    })
}
closeRegisterPopup()

function closeSubscribePopup() {
    const subscribePopupWrapper = document.querySelector('.subscribe-popup-wrapper');
    const closeBtn = document.querySelector('.subscribe-popup__closeBtn');
    const subscribeBtn = document.querySelector('.subscribe-popup__btn');
    subscribeBtn.addEventListener('click', () => {
        subscribePopupWrapper.style.display = 'none';
    })
    closeBtn.addEventListener('click', () => {
        subscribePopupWrapper.style.display = 'none';
    })
}
closeSubscribePopup();


function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date());
    let seconds = Math.floor((t / 1000) % 60);
    let minutes = Math.floor((t / 1000 / 60) % 60);
    let hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    let days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(endtime) {
    let daysSpan = document.querySelector('.days');
    let hoursSpan = document.querySelector('.hours');
    let minutesSpan = document.querySelector('.minutes');
    let secondsSpan = document.querySelector('.seconds');

    function updateClock() {
        let t = getTimeRemaining(endtime);
        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    let timeinterval = setInterval(updateClock, 1000);
}

const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
initializeClock(deadline);