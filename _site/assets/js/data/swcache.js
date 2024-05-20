const resource = [

  /* --- CSS --- */
  '/xiara125/assets/css/style.css',

  /* --- JavaScripts --- */
  
  '/xiara125/assets/js/dist/home.min.js',
  '/xiara125/assets/js/dist/page.min.js',
  '/xiara125/assets/js/dist/post.min.js',
  '/xiara125/assets/js/dist/categories.min.js',
  '/xiara125/assets/js/data/search.json',
  '/xiara125/app.js',
  '/xiara125/sw.js',

  /* --- HTML --- */
  '/xiara125/index.html',
  '/xiara125/404.html',
  
    '/xiara125/categories/',
  
    '/xiara125/tags/',
  
    '/xiara125/archives/',
  
    '/xiara125/about/',
  

  /* --- Favicons --- */
  

  '/xiara125/assets/img/favicons/android-chrome-192x192.png',
  '/xiara125/assets/img/favicons/android-chrome-512x512.png',
  '/xiara125/assets/img/favicons/apple-touch-icon.png',
  '/xiara125/assets/img/favicons/favicon-16x16.png',
  '/xiara125/assets/img/favicons/favicon-32x32.png',
  '/xiara125/assets/img/favicons/favicon.ico',
  '/xiara125/assets/img/favicons/mstile-150x150.png',
  '/xiara125/assets/img/favicons/site.webmanifest',
  '/xiara125/assets/img/favicons/browserconfig.xml'

];

/* The request url with below domain will be cached */
const allowedDomains = [
  
    'www.googletagmanager.com',
    'www.google-analytics.com',
  

  'localhost:4000',

  'fonts.gstatic.com',
  'fonts.googleapis.com',
  'cdn.jsdelivr.net',
  'polyfill.io'
];

/* Requests that include the following path will be banned */
const denyUrls = [
  
];

