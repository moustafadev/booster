'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "6425f786afde4623f79edb1fbc61bd4d",
"version.json": "0a9f32771746a93dd7fb28fc7370e15c",
"splash/img/light-2x.png": "63d675ed76bc26a00613781a9adc411c",
"splash/img/dark-4x.png": "ff81932e5169229538a3724b95f8cb58",
"splash/img/light-3x.png": "30bcaf3025433ba004d95295b653a13a",
"splash/img/dark-3x.png": "30bcaf3025433ba004d95295b653a13a",
"splash/img/light-4x.png": "ff81932e5169229538a3724b95f8cb58",
"splash/img/dark-2x.png": "63d675ed76bc26a00613781a9adc411c",
"splash/img/dark-1x.png": "7e33449c2de279363126c7b77637f692",
"splash/img/light-1x.png": "7e33449c2de279363126c7b77637f692",
"index.html": "c2bb0cd105b5167289e94d2923f8bb10",
"/": "c2bb0cd105b5167289e94d2923f8bb10",
"main.dart.js": "f8dab2a1cc10f034d218cd566132bf66",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"favicon.png": "421b581311205b7e38ec28e3d1b938cd",
"icons/favicon.ico": "62232161fa2cfcb35243c846fb44ebd6",
"icons/apple-touch-icon.png": "0626a412958e3121657825033b7ccd32",
"icons/Icon-192.png": "eeabd19be1ea9082d98272024822dbb5",
"icons/icon-192-maskable.png": "063b48ab5c7e609eda12e04b08e0abfe",
"icons/icon-512-maskable.png": "1a3edf877d7afb92b7c5957d1183d4bb",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/Icon-512.png": "087a204d874d0921ae322e5ca7366976",
"manifest.json": "bfa06656b57a81f58e52a339d7cd9083",
"assets/AssetManifest.json": "a6c6f3932b17207da6500a29ac34e190",
"assets/NOTICES": "7062a8869018f502fac153c58fa7e593",
"assets/FontManifest.json": "ba4a4421ca8111d07c2ab6f5c101ad6d",
"assets/AssetManifest.bin.json": "839b3cc34f8746029516c1b60bffb937",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "62e61461e3cec4d46556478a39cf1405",
"assets/fonts/MaterialIcons-Regular.otf": "a36c2502001259dc17c0d88468c07def",
"assets/assets/images/ic_docs_orange.png": "5d36a2e4d264608492d4d2e860f0532f",
"assets/assets/images/finance_doctor.png": "ae42e49002ada4758156bb13eaafbb7f",
"assets/assets/images/ic_right.png": "6781589ded2d75489bde6e7ea64d9ca9",
"assets/assets/images/concierge_service.png": "8022035f792baca399cdc6464f08fdac",
"assets/assets/images/credit_doctor.png": "ff1cf2389112de06011016a5ca9acbe2",
"assets/assets/images/card_success.png": "3209c2a67c61cfbb856f9ab23bc84f92",
"assets/assets/images/cloaca/card.png": "df04aeb7eb7e7793039d8e6c89a31d1f",
"assets/assets/images/cloaca/faq_question.png": "38cd6590aec3b0f84d53517f68830352",
"assets/assets/images/cloaca/girl_advantages_first.png": "6c10239fa22cfd8cda5e86faff97ccec",
"assets/assets/images/cloaca/girl_advantages_second.png": "21d5f1c167cb87b82166d703857041cb",
"assets/assets/images/cloaca/ic_right.png": "6781589ded2d75489bde6e7ea64d9ca9",
"assets/assets/images/cloaca/add_card.png": "cbf3300fdccddd801b6b9952be6e21e8",
"assets/assets/images/cloaca/arrow_back.png": "02e15b150eaf9430a4844950a744dcf2",
"assets/assets/images/cloaca/person.png": "6f117853ca500a112df07d6c03327e26",
"assets/assets/images/cloaca/entrance.png": "5f86bb3610faf068f70ca07bdeba07d1",
"assets/assets/images/cloaca/review_girl.png": "3855ef742a1cea282780792f07658898",
"assets/assets/images/cloaca/passport.png": "b7da702122110f962aa790bc59fab7c5",
"assets/assets/images/cloaca/about_us_ellipse.png": "1af18bb425cae920a31b4050d64dd149",
"assets/assets/images/cloaca/logo.png": "244fde14598c253cd85fab51e2522455",
"assets/assets/images/cloaca/faq_ellipse.png": "96399b2e0a9a6f44a87ebc7dcb73c32d",
"assets/assets/images/cloaca/phone.png": "5da41a3000d995ba4c4b9000b0715bb4",
"assets/assets/images/cloaca/review_ellipse.png": "295667784f693748fc315781318d5c85",
"assets/assets/images/cloaca/clock.png": "babed44c140598f781a568e5d66715bc",
"assets/assets/images/cloaca/FAQ.png": "fb866c12f75c96fd6a5ac18728a5119f",
"assets/assets/images/cloaca/add_passport.png": "8d3efdc7e8f273d030ea8ca21a4e6f8f",
"assets/assets/images/cloaca/bid_girl.png": "4e62c2d836c843298fabea3e0b9a0a38",
"assets/assets/images/cloaca/main_page_girl.png": "39c692192e81e4efd224b6e6ca69d415",
"assets/assets/images/arrow_back.png": "02e15b150eaf9430a4844950a744dcf2",
"assets/assets/images/master.png": "440a272a16e32303d97c50f65952563b",
"assets/assets/images/card_error.png": "dfaa053377bafd3631a6d80d0bd33dc9",
"assets/assets/images/calc.png": "89537abe3471fa2e2b38926b4fdf0597",
"assets/assets/images/ic_contacts.png": "71c7253fcfc8d88673944bb66be6208c",
"assets/assets/images/visa.png": "34bd376adaf3942ece26dcaabf530e83",
"assets/assets/images/ic_chat_black.png": "8f00dc7c8c763caa286209e602f9911e",
"assets/assets/images/face.png": "497df17f340ab9be8aa21f39708199b4",
"assets/assets/images/entrance.png": "5f86bb3610faf068f70ca07bdeba07d1",
"assets/assets/images/ic_b_black.png": "b400f0f0a36dc9cb9bd7b6c847fb3b90",
"assets/assets/images/card_ic_visa.png": "db0655a1c0503bb1f5580a420d21841c",
"assets/assets/images/vita_med.png": "6b7425ca61e443d5593cfdbbb4e23015",
"assets/assets/images/ic_chat_orange.png": "44a02a1a55f07665cdc713548bdd3a56",
"assets/assets/images/silver.png": "f02e318d69fc861309f2ed1ded6fa344",
"assets/assets/images/error.png": "c33b07b1d9b42c79520a0faba7c7c093",
"assets/assets/images/logo.png": "244fde14598c253cd85fab51e2522455",
"assets/assets/images/ic_b_orange.png": "099ddc373ed7a8e8ea332020af70401b",
"assets/assets/images/ic_docs_black.png": "ed4ed13314cf28473aed8a124346e025",
"assets/assets/images/addCard.png": "013b61f1a0c3b1caec328ff9a5d065b3",
"assets/assets/images/waiting.png": "babed44c140598f781a568e5d66715bc",
"assets/assets/images/onboarding_page4.png": "ab182b080c64b113177a11eceb47a726",
"assets/assets/images/card_ic_master.png": "97f6dc7ef7f16396d6ebf2ec71df4418",
"assets/assets/images/foreground.png": "eb68a81ed860e769d601cc080d089b59",
"assets/assets/images/mir.png": "508ad60d44739d40c895bf62dba84130",
"assets/assets/images/onboarding_page3.png": "1a2dd322a54c51a415197daf6c0cf493",
"assets/assets/images/main_page_girl.png": "8990ee2d20872ab218fdd3fc81028639",
"assets/assets/images/onboarding_page2.png": "2ecc5b30c207ca7961eb2416eeb2bbfd",
"assets/assets/images/done_rounded.png": "a7f3d9c05a7346cc704ae699c7afa675",
"assets/assets/images/card_ic_mir.png": "15491dde7eca12ac64ce1defebc6636e",
"assets/assets/images/gold.png": "53757515278a95e4d151e5c12e49a941",
"assets/assets/images/ic_docs2.png": "c2f230f8b9120b159e45b9cc47bda425",
"assets/assets/images/platinum.png": "856500b1c0bcec37035ec69a051a09b4",
"assets/assets/images/onboarding_page1.png": "24748ff831c744913161fe44e25a524e",
"assets/assets/svgs/ic_b_black.svg": "6d60584c3c02a7cd02ac28fc2b17faa1",
"assets/assets/svgs/ic_chat_black.svg": "3c5d37ad40d139e7f6bc2a594aefff51",
"assets/assets/svgs/back_arrow.svg": "b5683fcb52fcd798b79b74fcfbc8f193",
"assets/assets/svgs/cloaca/back_arrow.svg": "b5683fcb52fcd798b79b74fcfbc8f193",
"assets/assets/svgs/decline.svg": "1a08ba1e4cecbd85d069297c873f8fe6",
"assets/assets/svgs/ic_docs_black.svg": "96ca563c664b832659ae7de223e462f6",
"assets/assets/svgs/done.svg": "f075cf7e7a3acab417458cb82e7cd124",
"assets/assets/icons/android_icon.png": "22ab71d98faba628a597403243a67611",
"assets/assets/icons/foreground.png": "eb68a81ed860e769d601cc080d089b59",
"assets/assets/fonts/SFPRODISPLAYSEMIBOLDITALIC.OTF": "fce0a93d0980a16d75a2f71173c80838",
"assets/assets/fonts/SFPRODISPLAYHEAVYITALIC.OTF": "d70a8b7adbe065dd69b16459ffab4231",
"assets/assets/fonts/SFPRODISPLAYLIGHTITALIC.OTF": "bee8986f3bf3e269e81e7b64996e423c",
"assets/assets/fonts/SFPRODISPLAYBLACKITALIC.OTF": "647ad7b734271f858d61a94283fd0502",
"assets/assets/fonts/SFPRODISPLAYREGULAR.OTF": "aaeac71d99a345145a126a8c9dd2615f",
"assets/assets/fonts/SFPRODISPLAYTHINITALIC.OTF": "9d5ed420ac3a432eb716c670ce00b662",
"assets/assets/fonts/SFPRODISPLAYBOLD.OTF": "644563f48ab5fe8e9082b64b2729b068",
"assets/assets/fonts/SFPRODISPLAYMEDIUM.OTF": "51fd7406327f2b1dbc8e708e6a9da9a5",
"assets/assets/fonts/SFPRODISPLAYULTRALIGHTITALIC.OTF": "fa570fc4ded697c72608eae4e3675959",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
