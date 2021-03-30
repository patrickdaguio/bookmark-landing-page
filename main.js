// =====================
// | MOBILE NAVIGATION |
// =====================

// SELECTORS
const body = document.querySelector('body')
const header = document.querySelector('.header')
const hamburgerMenu = document.querySelector('.hamburger-menu')

// FUNCTIONS

function disableScroll() {
    body.classList.toggle('disable-scroll')
}

function toggleMobileNav() {
    header.classList.toggle('mobile-nav--active')
}

// EVENT LISTENER

hamburgerMenu.addEventListener('click', () => {
    toggleMobileNav()
    disableScroll()
})

// =====================
// | EMAIL VERIFICATION |
// =====================

const input = document.querySelector('.cta__input')
const form = document.querySelector('.cta__form')
const inputWrapper = document.querySelector('.cta__input-wrapper')

form.addEventListener('submit', validateEmail)

function validateEmail(e) {
    const email = input.value
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(email.toLowerCase())) {
        inputWrapper.classList.remove("warning")
        input.classList.remove("error")
        input.value = ""
    } else {
        inputWrapper.classList.add("warning")
        input.classList.add("error")
        e.preventDefault()
    }
}

// ====================
// | FEATURES SECTION |
// ====================

const features = [
    {
        heading: 'Bookmark in one click',
        text: 'Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites.',
        img: '/images/illustration-features-tab-1.svg',
        imgText: 'Dashboard'
    },
    {
        heading: 'Intelligent search',
        text: 'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
        img: '/images/illustration-features-tab-2.svg',
        imgText: 'Dashboard with magnifying glass'
    },
    {
        heading: 'Share your bookmarks',
        text: 'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
        img: '/images/illustration-features-tab-3.svg',
        imgText: 'Dashboard with people'
    }
]

const tabNumber = document.querySelectorAll('[data-number]')
const heading = document.querySelector('.feature__heading')
const text = document.querySelector('.feature__desc')
const img = document.querySelector('.feature__img')
const tabs = document.querySelector('.tabs')
const featureSection = document.querySelector('.feature')

function switchTabs(e) {
    let index = parseInt(e.target.dataset.number)
    function changeContent() {
        heading.textContent = features[index].heading
        text.textContent = features[index].text
        img.src = features[index].img
        img.alt = features[index].imgText
    }

    featureSection.classList.add('fade-out')

    setTimeout(() => {
        changeContent()
        featureSection.classList.remove('fade-out')
    }, 1000)
}

function changeHighlight(e) {
    for (tab of tabs.children) {
        tab.classList.remove('tabs__tab--active')
    }
    e.target.classList.add('tabs__tab--active')
}

tabNumber.forEach(tab => tab.addEventListener('click', switchTabs))
tabs.addEventListener('click', changeHighlight)
