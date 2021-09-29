'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "7969bfe94301530c23d9e16fd658f0ed",
"index.html": "1e450fdf7680f7acdc35ea1387203377",
"/": "1e450fdf7680f7acdc35ea1387203377",
"main.dart.js": "49a30f5e9d52a7676306878f1b9a001a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "15da2002f2d3954bdad06597d2e97aa4",
"assets/AssetManifest.json": "adf26d27069498b7bfb9bfe5c4111f1d",
"assets/NOTICES": "7d7b58d5f9a981303061f3b90135f8aa",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/assets/locales/en_US.json": "b818c50cab09be773233ae922f4b6e64",
"assets/assets/screens/unlocking_screen.png": "b86118637877b7915b017554ecdfc50c",
"assets/assets/screens/shop_detail_screen.png": "52f44daba16d266bf03fb80b36362cb5",
"assets/assets/screens/support_center_screen.png": "781ab8b819155e1c24b9d5b6846716bb",
"assets/assets/screens/home_active_rental_screen.png": "413cbca208349459a7a6718d196d6f28",
"assets/assets/screens/guide2_screen.png": "508210b7f977d189bd827f5992d4a816",
"assets/assets/screens/fault_declaration_screen.png": "7eeb6576a3725a3dc9eb57a12737cfb6",
"assets/assets/screens/rental_history_screen.png": "8409f509ac9cf43b995cfca6da9aed46",
"assets/assets/screens/unlock_success_screen.png": "1cb1134f6f0197c8650b58d8d490e968",
"assets/assets/screens/home_drawer_screen.png": "7192a5bc0d699a31762d603b9952b248",
"assets/assets/screens/add_credit_card_screen2.png": "b1f1d2efc5ecfd2fe530e1301bb0a646",
"assets/assets/screens/how_to_return_screen.png": "c5a4e88dec1cafd5889930f281e39c80",
"assets/assets/screens/account_phone_login_screen.png": "45ac1981c3a06e5ec163f202d3b03cc1",
"assets/assets/screens/payment_methods_screen.png": "2146dae3db21d597a66c687b8356f7dc",
"assets/assets/screens/qr_code_scan_screen.png": "f1a5bdbd0556590a651ddcad11919922",
"assets/assets/screens/credit_card_screen.png": "478c771577d7a22d1a82ae0e44ff66b1",
"assets/assets/screens/find_station_screen.png": "33055521b88d0edd385763db900c8834",
"assets/assets/screens/home_screen.png": "f360e8e5c774e07f889f015900d989ba",
"assets/assets/screens/guide3_screen.png": "b3a509280fe20760ebb7fdcea6e4c009",
"assets/assets/screens/unlock_failed_screen.png": "8292e7291b297e06abaec2a9a5e9bebd",
"assets/assets/screens/home_bottom_sheet.png": "afd11c953652d8588e06377ed7dba74f",
"assets/assets/screens/pre_auth_order_screen.png": "28a7b4f22185f4d31b072772e0b3e7d1",
"assets/assets/screens/login_screen.png": "e163dbb2ae0dc0df2fe3e39f074281f3",
"assets/assets/screens/reantal_order_detail_screen.png": "8e5dc731034bdad101f1242193991d98",
"assets/assets/screens/pre_auth_screen.png": "a3a73de8558af7d3940fb77ab4e4b698",
"assets/assets/screens/lost_power_bank_screen.png": "860f40a4cb49f3b5162914d7694e17f6",
"assets/assets/screens/toast_sign_out.png": "355066580034b879d4c239f3c8f6b8d3",
"assets/assets/screens/account_info_screen.png": "2ac2c186772cdff9411c216766c280cb",
"assets/assets/screens/nearby_shop_screen.png": "5254a38ded88a2811707fe027e40a7a3",
"assets/assets/screens/empty_status.png": "b6ad03dc0be4eca862e5035f621f8006",
"assets/assets/screens/rental_screen.png": "ca8adb9bd8ec1d48b9e8bb269e9f67b9",
"assets/assets/screens/verify_screen.png": "e1e2c4e1e11c64424063fb5de23450a1",
"assets/assets/screens/add_credit_card_screen.png": "48e88ccdf5290cda3e7098979e92f107",
"assets/assets/screens/toast_no_default.png": "743eedbe4b1badcf6a281eb0f85e4b28",
"assets/assets/screens/guide1_screen.png": "bcef674fb4e985966a2375e46a85a897",
"assets/assets/screens/account_email_login_screen.png": "66ed849f3a79206d912db2d55223d1a9",
"assets/assets/screens/abount_us_screen.png": "5314adf5c783a893163ff126c1320b57",
"assets/assets/screens/pre_auth_success_screen.png": "b7c96decbcc8ce43978bf63605a50d33",
"assets/assets/screens/langauge_bottom_sheet.png": "59e5f61c3ce07d4e7bc5aecb1d633d6d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
