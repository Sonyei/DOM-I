const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', './img/logo.png')

//nav links

const nav = document.querySelector("nav")
nav.children[0].textContent = siteContent["nav"]["nav-item-1"]
nav.children[1].textContent = siteContent["nav"]["nav-item-2"]
nav.children[2].textContent = siteContent["nav"]["nav-item-3"]
nav.children[3].textContent = siteContent["nav"]["nav-item-4"]
nav.children[4].textContent = siteContent["nav"]["nav-item-5"]
nav.children[5].textContent = siteContent["nav"]["nav-item-6"]


//header image and title

const cta = document.querySelector(".cta-text")
const header = siteContent["cta"]["h1"].split(' ')
cta.children[0].innerHTML = header[0] + "<br>" + header[1] + "<br />" + header[2]
cta.children[1].innerHTML = siteContent["cta"]["button"]
ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', siteContent.cta["img-src"])

//top content

const hTitle = document.querySelectorAll(".text-content h4")
const hPara = document.querySelectorAll(".text-content p")

hTitle[0].textContent = siteContent["main-content"]["features-h4"]
hTitle[1].textContent = siteContent["main-content"]["about-h4"]
hTitle[2].textContent = siteContent["main-content"]["services-h4"]
hTitle[3].textContent = siteContent["main-content"]["product-h4"]
hTitle[4].textContent = siteContent["main-content"]["vision-h4"]

hPara[0].textContent = siteContent["main-content"]["features-content"]
hPara[1].textContent = siteContent["main-content"]["features-content"]
hPara[2].textContent = siteContent["main-content"]["features-content"]
hPara[3].textContent = siteContent["main-content"]["features-content"]
hPara[4].textContent = siteContent["main-content"]["features-content"]

//middle image

const midimg = document.getElementById("middle-img")
midimg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//bottom content

const contactTitle = document.querySelector(".contact h4")
const contactPara = document.querySelectorAll(".contact p")

contactTitle.textContent = siteContent["contact"]["contact-h4"]
const midContent = siteContent["contact"]["address"].split(' ')
contactPara[0].innerHTML = midContent[0] + ' ' + midContent[1] + ' '  + midContent[2] + ' '  + midContent[3] + "<br />" + midContent[4] + ' ' + midContent[5]
contactPara[1].textContent = siteContent["contact"]["phone"]
contactPara[2].textContent = siteContent["contact"]["email"]

//footer

const foot = document.querySelector("footer p")
foot.textContent = siteContent["footer"]["copyright"]

//  <div class="top-content">
//                 <div class="text-content">
//                     <h4>Features</h4>
//                     <p>Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio,
//                         in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
//                         scelerisque quis.</p>
//                 </div>
//                 <div class="text-content">
//                     <h4>About</h4>
//                     <p>About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in
//                         interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus
//                         scelerisque quis.</p>
//                 </div>