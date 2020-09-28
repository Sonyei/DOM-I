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


const nav = document.querySelector("nav")
nav.children[0].textContent = siteContent["nav"]["nav-item-1"]
nav.children[1].textContent = siteContent["nav"]["nav-item-2"]
nav.children[2].textContent = siteContent["nav"]["nav-item-3"]
nav.children[3].textContent = siteContent["nav"]["nav-item-4"]
nav.children[4].textContent = siteContent["nav"]["nav-item-5"]
nav.children[5].textContent = siteContent["nav"]["nav-item-6"]

const cta = document.querySelector(".cta-text")
const header = siteContent["cta"]["h1"].split(' ')
const headerComp = header[0] + "<br>" + header[1] + "<br>" + header[2]
cta.children[0].innerHTML = headerComp
cta.children[1].innerHTML = siteContent["cta"]["button"]

let ctaimg = document.getElementById("cta-img");
ctaimg.setAttribute('src', 'img/header-img.png')

const titleFeatures = document.querySelector(".text-content h4:nth-of-type(1)")
titleFeatures.textContent = siteContent["main-content"]["features-h4"]
const pgFeatures = document.querySelector(".text-content p:nth-of-type(1)")
pgFeatures.textContent = siteContent["main-content"]["features-content"]

// const titleAbout = document.querySelector(".text-content h4:nth-of-type(2)")
// titleAbout.textContent = siteContent["main-content"]["about-h4"]
// const pgAbout = document.querySelector(".text-content p:nth-of-type(2)")
// pgAbout.textContent = siteContent["main-content"]["about-content"]

let midimg = document.getElementById("middle-img")
midimg.setAttribute('src', 'img/mid-page-accent.jpg')

// const titleServices = document.querySelector(".text-content h4:nth-of-type(3))")
// titleServices.textContent = siteContent["main-content"]["services-h4"]
// const pgServices = document.querySelector(".text-content p:nth-of-type(3)")
// pgServices.textContent = siteContent["main-content"]["services-content"]

// const titleProduct = document.querySelector(".text-content h4:nth-of-type(4)")
// titleProduct.textContent = siteContent["main-content"]["product-h4"]
// const pgProduct = document.querySelector(".text-content p:nth-of-type(4)")
// pgProduct.textContent = siteContent["main-content"]["product-content"]

// const titleVision = document.querySelector(".text-content h4:nth-of-type(5)")
// titleVision.textContent = siteContent["main-content"]["vision-h4"]
// const pgVision = document.querySelector(".text-content p:nth-of-type(5)")
// pgVision.textContent = siteContent["main-content"]["vision-content"]

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