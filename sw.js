importScripts('https://storage.googleapis.com/workbox-cdn/releases/6.2.0/workbox-sw.js');

workbox.precaching.precacheAndRoute([{"revision":"7cc40c199d128af6b01e74a28c5900b0","url":"assets/css/bootstrap.min.css"},{"revision":"b1e92a5593c58e6832c7f6dce30a06ce","url":"assets/css/common-styles-responsive.css"},{"revision":"77f3d6639e02a6b774981b1ad75806f5","url":"assets/css/common-styles.css"},{"revision":"22d85286c513f3d4038c42b486ea1bf6","url":"assets/css/fontawesome.min.css"},{"revision":"613745964e452941615d4e3d1a387ab7","url":"assets/css/github-markdown.min.css"},{"revision":"a394012067cf46c79ab70d75f9caf500","url":"assets/css/katex.min.css"},{"revision":"53b8e50f782f63519dc05b76bd1d9c49","url":"assets/css/toast.css"},{"revision":"6d9501ec2a9a6e52b90a8d27340202b6","url":"assets/css/vlabs-style.css"},{"revision":"269550530cc127b6aa5a35925a7de6ce","url":"assets/fonts/font-awesome-4.7.0/css/font-awesome.min.css"},{"revision":"912ec66d7572ff821749319396470bde","url":"assets/fonts/font-awesome-4.7.0/fonts/fontawesome-webfont.svg"},{"revision":"ff2be0cf35ad764cfcc9779f148aa8ac","url":"assets/images/favicon.png"},{"revision":"59cbb9b31115938b15a1786dcedd7796","url":"assets/images/logo-new.png"},{"revision":"97524ffa51690acdcb0e54a4f5b8502a","url":"assets/images/logo.png"},{"revision":"7d45f6653f4b7219600292be2d83f1b4","url":"assets/images/popout.png"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"assets/images/vlabs-color-small-moe.jpg"},{"revision":"1eb55c09b5d84050d497a664520d2255","url":"assets/js/assessment_v2.js"},{"revision":"31ecd36dd9f2e26b04f3795097445547","url":"assets/js/assessment.js"},{"revision":"5000362f34eee7667adb9dbd883f2217","url":"assets/js/event-handler.js"},{"revision":"0f6278fc4d074348edaba4042b4dd1f8","url":"assets/js/iframeResize.js"},{"revision":"4ae9cbf2f402c4a1dde3d8f0e3e8cf1b","url":"assets/js/instruction-box.js"},{"revision":"d9b11ca4d877c327889805b73bb79edd","url":"assets/js/jquery-3.4.1.slim.min.js"},{"revision":"bc2456c37c311bbdd25f4f54e0e8d1b9","url":"assets/js/toggleSidebar.js"},{"revision":"30ef592489ce0ac84ab367ce9eb0d597","url":"assets/js/webcomponents-loader.min.js"},{"revision":"0f2e317d41fb69dfb0270dbdf749e380","url":"assets/js/zero-md.min.js"},{"revision":"caf1062309e21ed583d00d24cac20912","url":"assets/katex_assets/katex.min.css"},{"revision":"6b65e85a24cd52d6f3949c7d8140c733","url":"contributors.html"},{"revision":"62c304317c08c99c61b2aac5c8cb76c6","url":"feedback.html"},{"revision":"dc45391a10bf3b9b4951d581ffb65b0c","url":"index.html"},{"revision":"8e4674985c64efedb9184e09fdbb094e","url":"performance-report.html"},{"revision":"914e243a5d6373b22585e9bdd0c25eef","url":"plugins/svc-rating/checkEventSubmission.js"},{"revision":"e99077e253b07129d0b9755e6a06f93f","url":"plugins/svc-rating/config.js"},{"revision":"40bc0d089f560247a1bfb0cd151232ad","url":"plugins/svc-rating/imageData.js"},{"revision":"a47af25e8d8500c59a6c26bac42a0cd9","url":"plugins/svc-rating/images/empty-star.svg"},{"revision":"6ad37561267a21d6bcb558f9c7c3fe8a","url":"plugins/svc-rating/images/half-star.svg"},{"revision":"7924fe35ba7c22ce467efd504cce93d7","url":"plugins/svc-rating/images/logo.jpg"},{"revision":"f2be5f1d57e0a2c690e34cf9095bed16","url":"plugins/svc-rating/images/mobile_rating_icon.png"},{"revision":"17c8ce8f2faa7937f7978a4dfb69df3a","url":"plugins/svc-rating/images/mobile-icon.svg"},{"revision":"96102a862f070a61a20193b621188ef3","url":"plugins/svc-rating/images/star.svg"},{"revision":"e083f28aa9e5a670a2e5de02197c261f","url":"plugins/svc-rating/index.html"},{"revision":"db18c05646b11f1fa66ef3ebb87116ca","url":"plugins/svc-rating/index.js"},{"revision":"fdc8b6772fb88081e86497fd2f75e20b","url":"plugins/svc-rating/package-lock.json"},{"revision":"7039ff00a75fd32443048e6ed0020a91","url":"plugins/svc-rating/package.json"},{"revision":"1ed592c19b20d396536ebd3611f3ef40","url":"plugins/svc-rating/rating-display.js"},{"revision":"0267f54f7993bcd47793dd7f7be56c92","url":"plugins/svc-rating/rating-submit.js"},{"revision":"57e53998ce85ab911eea27fdc421480d","url":"plugins/svc-rating/rating.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-performance/config.json"},{"revision":"3062d3749c84c5dc3fc7013e11376fce","url":"plugins/tool-performance/css/main.css"},{"revision":"8ec7b430663c34b8e9882c923e34e86e","url":"plugins/tool-performance/index.html"},{"revision":"6fc8455688b00e5dd6d392b61743473a","url":"plugins/tool-performance/js/api/gsc.js"},{"revision":"d62937417a11fee561c78bf3b145d85d","url":"plugins/tool-performance/js/api/lighthouse.js"},{"revision":"d42b124fa3c85371ea563f49f38e5a3d","url":"plugins/tool-performance/js/commonData.js"},{"revision":"11e328184e68c05f60030c19aa4efca9","url":"plugins/tool-performance/js/main.js"},{"revision":"66d4aa241bb986851066c1684270d236","url":"plugins/tool-performance/js/parse.js"},{"revision":"3f82067c934ff332a430c76f9e37b260","url":"plugins/tool-performance/js/populate/gsc.js"},{"revision":"9e183c67dc9157cd26b8a076ccf04d69","url":"plugins/tool-performance/js/populate/lighthouse.js"},{"revision":"1709dc5f9149e869449dcb2b7a8b3a20","url":"plugins/tool-performance/js/util.js"},{"revision":"1bb81f97b0723bfdd89184d485a0ecad","url":"plugins/tool-validation/config.json"},{"revision":"95c086500b7a5941bd950f22c888cc41","url":"plugins/tool-validation/css/main.css"},{"revision":"8c8a8e5422cc687a53deffd1326e5556","url":"plugins/tool-validation/index.html"},{"revision":"a35ebe17ce73daf38433381fbe0071de","url":"plugins/tool-validation/js/link_validation.js"},{"revision":"acc595e531160409a0194bf7190696d0","url":"plugins/tool-validation/js/main.js"},{"revision":"49049daf46cd95b6d8754b4df6cd57b2","url":"plugins/tool-validation/package-lock.json"},{"revision":"3e614b98b80bb07eef3338b563d697af","url":"plugins/tool-validation/package.json"},{"revision":"7d8f8b115734932914b69e83b8a56f18","url":"posttest.html"},{"revision":"35cbed2b280917cc1356077fa2cee0a3","url":"posttest.json"},{"revision":"c882c4781a92734c99ab0416fa73c64a","url":"pretest.html"},{"revision":"057748e8f2be5fd1c2343719a74ad83d","url":"pretest.json"},{"revision":"f22f3006709208b297815d202298d1f6","url":"procedure.html"},{"revision":"7497cc837b1456b8db67ac15e5f0d1c1","url":"references.html"},{"revision":"46eafe32e38a35a0e146f4ce5c7e7474","url":"simulation.html"},{"revision":"7377c02a0f93426c3bb620511ad8e6c4","url":"simulation/compressionStrengthTest.html"},{"revision":"32c98a7488a20909017a578b74087c85","url":"simulation/css/main.css"},{"revision":"79a3ef3c54ac0ad515fbec2eb08b54d3","url":"simulation/css/style.css"},{"revision":"41f18b104ee4bd04e406695993f45a21","url":"simulation/images/compressionTestSpecimen.jpg"},{"revision":"525f02c8ec75a539209e87a34c227537","url":"simulation/images/dialIndicator.jpg"},{"revision":"53630e6d7aa12600379b784f46864eee","url":"simulation/images/next.jpg"},{"revision":"c8405d5f26638d8d30934568f37fc8eb","url":"simulation/images/ok.png"},{"revision":"9cf2c5faaafe987973c0d1e322f6b31b","url":"simulation/images/reset.jpg"},{"revision":"d62efec2aa82e936d4e74e38c2a655c3","url":"simulation/images/result.jpg"},{"revision":"302b0db63f27f2deab373f3a576e7bc0","url":"simulation/images/sand.jpg"},{"revision":"137f183d6a5abc0e9ba8f01f3936b942","url":"simulation/images/shearStrength.jpg"},{"revision":"09607e4ca6b3ae00a231a5068e22470f","url":"simulation/images/specimen1.jpg"},{"revision":"42689b0f705136883b2697e98dd81db0","url":"simulation/images/specimen2.jpg"},{"revision":"d55ac9cc4bc0993ad411ed55c6f4c337","url":"simulation/images/specimen3.jpg"},{"revision":"6680e9251a1c83eb29044d09d2d720c2","url":"simulation/images/spindle.jpg"},{"revision":"a2394e2f1e792a89e137b53fb8bfaded","url":"simulation/images/tensileTester.jpg"},{"revision":"e8a2a9ba1e1dfdf11404849fb0e73a42","url":"simulation/images/usm.jpg"},{"revision":"ff74ca7b55a939a3fb4075957ddd21b8","url":"simulation/images/USMachine.jpg"},{"revision":"48c131e65f2581729dfd7bcfc9e32695","url":"simulation/images/usmShear.jpg"},{"revision":"c91713fb05021c935b388f554516ba68","url":"simulation/images/usmTensile.jpg"},{"revision":"3fad2958aefac378ccca4a6d567bef0f","url":"simulation/index.html"},{"revision":"59ebf0ea4aa9f072819076569b22ac9a","url":"simulation/js/main.js"},{"revision":"61acc4e236fce13378890c287f7c9c9b","url":"simulation/shearStrengthTest.html"},{"revision":"53849e97fd8309cd6dace31c6467e8a2","url":"simulation/tensileStrengthTest.html"},{"revision":"a4a842e724b84d9da1254f7a51d77304","url":"theory.html"},{"revision":"e2ef005a22f2d3097d722d74a9679b26","url":"validator-report.html"}]);

// Add runtime caching for images, fonts, js, css.
workbox.routing.registerRoute(
    ({request}) => request.destination === 'script' || request.destination === 'style' || request.destination === 'font' || request.destination === 'image',
    new workbox.strategies.CacheFirst()
);

// Cache the json data from url https://github.com/exp-adder-circuit-iiith/pretest.json
// workbox.routing.registerRoute(
//     ({url}) => url.origin === 'https://github.com' && url.pathname === '/exp-adder-circuit-iiith/pretest.json',
//     new workbox.strategies.NetworkFirst()
// );