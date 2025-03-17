'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f51f4470ba138293d845aa0fce2308ca",
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
"main.dart.js": "d8ccbc1fd50e3e8091b3eb8267419fb5",
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
".git/config": "0f8c9523cc0713c0f263f6d741d76e51",
".git/objects/61/79ada479fb69cd0a631bb6ee6816caa0d6945e": "de88bd2ca42ee5fed79234cc8d46fb56",
".git/objects/92/17413155c6d24e6a13ac13fa1f6493e09e0f49": "138cd3827980c6d455d1993f84462caa",
".git/objects/0c/343aacc73dbe048502806599907f7396ff4428": "ef72d4aadd5219ccfd51940c9ab32fa1",
".git/objects/66/fa32518c9d09ccbf824922e6ea96b145dc477e": "82ab46a8b16026e34ffd7fa7ac700a53",
".git/objects/3e/25fcc0eddef11c6494155d1bf8752c35c363d2": "ff851f133d88f9f6a71c86154f0f9507",
".git/objects/50/2400a306cbefbe8e84e8e38dae8f0e8adff024": "2ea4bb401be32c5c8ed88ea920616400",
".git/objects/3b/dd02f56182c7659adceb5a524f6a184b519dd8": "6275598c929f9421e4af016dcab12f8d",
".git/objects/3b/0dd2849b85e6e9b94319e260ede41d215430a4": "1e880f18937cd21cc804f992942e2a33",
".git/objects/04/368d0edb05a5b3c4ed4bc4568f4da40a186fae": "6eece75633022fef1313ce6c3f5b3ae2",
".git/objects/04/90c3873a03c54bfe86e2713439b9728760e4f1": "316942fbfcf699c6b68037bf87957767",
".git/objects/35/35e1acd56dda4dd4e82faafb40ba90fabac151": "18d0a180e35137b3fd0c3dd5adf700aa",
".git/objects/69/13634aaff16205a0e1c1afaa100196d76bbed2": "774aff092a01b93ff956f9c2bfaace6f",
".git/objects/69/7612b856b42c7df2f6b11a751697ce3fb59ba5": "eb2c167bd5d2090211aac5d103a33a2d",
".git/objects/3c/2b7780094fe5a224c713bdfdc0028802602008": "a24414e7fbe96815c73e84137f718bc1",
".git/objects/3c/80f2066047e81c750fa96c8c0293bc5576b432": "74352be9f06e17ee9c4b6f9abeab17aa",
".git/objects/56/53b4542fc5121031c63d62911794c1f9883567": "07a4b297a94c14e8cbfadebe35a12f40",
".git/objects/67/bd74c13d9ca181971cb85d89a126306bd76963": "fdb5013394d98b0c6504a31d524fbf39",
".git/objects/0b/7ebbacabba98788d99b2c58fd63ed01af39e86": "cde34fce9e34b605f749d85fe29421f3",
".git/objects/34/50f68c31c17b789271f9b537ff85c1978c07bb": "49c0dc61b27a78bc08ba8f019a720cb2",
".git/objects/5a/8af572b426ea5607a5fe81b192ab4ca2e1c1c1": "b852136ea138661b666e36603ae5d77a",
".git/objects/33/1b7aec7bc2dc82ddecf41128c25dfaaf34868a": "a7e056c897dac2cebbfd736be57970c2",
".git/objects/33/835d18bd06c288bfb6423d61bc60eeb4898bc4": "6070a65ac978c7c6e2de84f34b6dafe0",
".git/objects/02/5b25c27aae647e146418e2f8bc12260015382f": "8cd3550d8a2fb38cfcd67d7ea265f0c3",
".git/objects/a4/60c6ebee70cac1fbcaa0b54ea170acf4da6ef3": "3c1a15c1981205920f0a43c7d87af2f5",
".git/objects/b2/f7daca100957c47773fb6655226f57162811c7": "39b0fddd2bf0090977581234fe83fa95",
".git/objects/d0/77e5b328eae553b28b4c8647b4eb0c8358f134": "0cf84b7f6f831bb2cfad9be841bab99e",
".git/objects/df/3e5fc7b1f8a5ef50626aa177886c7f58931aa1": "413fbad96266c1356dd09be13532d744",
".git/objects/df/53d63ca6546be1dd5abc5bc34c10bbec1e7cee": "818a9f50e563c48f89c2eb248078ac83",
".git/objects/da/46b9aadf20d64e26af324f173cf8b4a1adc125": "545aa170671bce48fed69a69ce28ece3",
".git/objects/a5/a86a73003c1153b97146c0e49836d58560c502": "edbca1ea12992cbf758c92d99e273027",
".git/objects/bd/4831a68d9bcc97c0be7eb105de99d902a3266f": "d85a7d2b6cdfd43e1bd5a6656ca7bffe",
".git/objects/d6/734b190039ac79d998fa0dbe493c4dabeedefc": "4b8ff4ce11c68f05dedf8d850e686798",
".git/objects/ae/512af2e636299fcce37dfc88403bde2da562ee": "a68e3d7ffc0a3ee01ba8d614dd424ba9",
".git/objects/e5/90e95212fcd68afe5aab8015ddbe21641922ae": "6ac3ef56be8cafd53cddd90df3ce499a",
".git/objects/e5/26c9c6f739f8ae92448d3a784b534dba9f6c6c": "4c0e28c08a38aa5e1a11191e0e7410ad",
".git/objects/f3/24d22c1a399d4296c77f8073d08cc7df37cb56": "5088b0a0b2a17cba6eee14472240f7bd",
".git/objects/c7/5a6c7ab625045725d0bf2ae4b4ce345ee9d476": "b05fb9db0ab62cf56ac3e3b40b64be95",
".git/objects/c7/0b100a3e931a84b061489fea2779cfe28d73d3": "d5a961ea0cfdacc644ec611b7760e28e",
".git/objects/ee/33194c83d1accda675eb1a56e3416f6a4510cd": "c8b34e102b020779d21fe126e9d83ab6",
".git/objects/c9/55175514a99e799aae5972bc825e48fb7739e4": "5cafca6d673a436f4b90c9e1fe504c39",
".git/objects/c9/da32606a0e11b78642d8aa3ee2c126d2096ad7": "81c7d2cb3560c7d502963da113e214eb",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/893d874f83726c7faee6b44a20e3f501a947cf": "018c2070207c5adf1a0677acd0bd09fc",
".git/objects/e4/03532a6eb9a0043c9ca5a41e736567e858336c": "f3c20fe790b69a76c67a017f97c5b23c",
".git/objects/fe/862cf13563d645f98239ea1a25d4f9312e8dc5": "4394e8726757a1806d5f91bfda05ac18",
".git/objects/fb/9853ca2c18254589228c8e43275abac864946c": "ea4f2ffce8dc457bcec4a4031bdbf774",
".git/objects/fb/94525e30a86689fc38bcd836f337e154005b2b": "26556c8d6b1102051fd146cd72ad9f28",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/7c/3736dd305e0af89170dc3e35e32c559330e058": "ab5d64a4910970a62f4c7f98a2b8e268",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/80/80000bc2bddb5dc72c370a630f0199b94a788b": "215fc9521c9dad53bac7344543d2f949",
".git/objects/74/b5e8b76ac147309f9923d4e5ed673b059d1c3e": "aa59df945a1243850ca0894ca5f2b354",
".git/objects/17/da5911c05ce41b2713d6d97762e799fb7af98e": "1fb28a734346fa476603b3980bfd5c4e",
".git/objects/7b/bb196edbd66701b1a56eda5c2ff2d824089dd7": "11f32ae9db556bc07ff57068bf7a4756",
".git/objects/7b/65b53971dc74880b05e8e07a0ecef334e61396": "358f566aa60e6ebae67b4277bc691352",
".git/objects/7e/cf3a49dc23b68bc2513edc7976c38d5b0574db": "d8ae37e3fd77a5733d5dace3fb171111",
".git/objects/10/9e09162ca13a58688826bdba02799a2807377e": "1cbece680724604d8d9a5827bdb62a2d",
".git/objects/4c/f82dcbb4ee55d0a01b2373dbe656bdaeddcc06": "8a0ceb29bd5556fbf41c5b3e13e82235",
".git/objects/26/5afb07230f481cde4f4bceae03b328f32a622f": "cf0c50aece442f6eefd9607406bc4379",
".git/objects/26/38452b76dec2e0b1870177b012f012b1159c73": "6da046d2542b73395d417301768a0cf2",
".git/objects/21/065598d8ce6830d601edf9c787ca39c3e14164": "bc15cfd0b5af0f105a81610aa7ac8c20",
".git/objects/75/42c6b0e9cdcf9c8e3f7da12ab5edf7415f9fad": "f31e0e5a82c78b71792ba19b15f96867",
".git/objects/86/d581104534b897888375e8a47473d94ecfcbd3": "830b77d3ceefe63bdc0aae5acef384fe",
".git/objects/72/80bdddbc17dfe709057953d0753e5ffd0f0f2e": "ba56b40d645a0f16807ab3de83ab0ea1",
".git/objects/2a/44bdddfccdc68b5b1c262e8c6117cbfe3420c5": "33cdc946d47312fc95875697275ba9a8",
".git/objects/2f/49d65392ed202615c99216b87d7f3424d50b8a": "85f797cc836a7a2fe058465d4923c490",
".git/objects/38/c9fbab0f0fa5078e91a8c4f05dc2d772bf40dd": "4842ac0978fe1e544a095a997a7f642a",
".git/objects/6e/b93f1bd7b911154e3032fe10c7aef204c59056": "f583a6a5049e22e8df2694e796d724f0",
".git/objects/5c/a017893b2927c9a549a678278c883a97ef2a0d": "ae6097befff3fad1d76396cd065264d6",
".git/objects/5c/c10dbc87e1d24d4f2e265f18f160e258a7efb9": "fa7a84f0be81eef8ff73c609f0fefaa1",
".git/objects/5c/a136308db85cd4254df01c36540a8ee6ced1d8": "7aada7628fe17cd5dbb54550086fed75",
".git/objects/09/aaca9fcc08ccfd0666b128a23a3ba6066757a5": "a6dc58a9dcb4a85de6f457a17012f39f",
".git/objects/62/b61fae5ba2f6599127e825128b7f1fb93235e2": "5ce0ed7dc3afe2025f4deedb2e77b1c1",
".git/objects/3a/d1f8c86505986334bfbd9a573020a86391ac4b": "8bfd14bcdb555a8c1fe2d63460503c2f",
".git/objects/98/0cade37f557c295a691b692976bc6272a595ce": "b821f63e29176506bcc41fe363b501ed",
".git/objects/30/a738041cc0919d6b9db15b291e1a5a55c1b147": "dc8e85ffd3e42a2c96d3dc796aba8e1a",
".git/objects/37/d146cc5a714a73e50219d4b4dc443ae807a9d8": "3835e816f993e74708eac90a4e5c8619",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6d/283f83c913f13a64b56b0c2ab2c99d78c06cd4": "66a7306e6c742924d741493622ad808e",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/0f/b2d447e6479a777003cc2d704e99721f513f06": "087d61253c87caceac424b9b875637a2",
".git/objects/bf/ffaaf9aa0e91b97de9e5f1d6282dec06d0b095": "2eea899a0abb607f0f9808d642ffde6e",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/741e3388322f502609a9f18beb853cb24026dd": "a21d8399bcd967bc6e1ec4cfbb049a41",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/b989b1d399a0e8af307f0dc9cd22f680fe2455": "43e409c044739261ced7a9ad297c5ad8",
".git/objects/b8/626130fb9382ca1dc5735da754632175a37cbc": "96116ae7c8b9333f8db350d823d0c976",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/dd/a86545e65d0245e7cc9a44ef27d88e9cf07ef3": "5d3acf8c2e6012d6338c07421a8e54e3",
".git/objects/a9/d2f91c40bf13904f134f24930e827d3e44ae9c": "b5ee5cfb42e72e9dd51d655e86e76153",
".git/objects/d2/decec475406c6d6c72569c0e40ee37423b8675": "6b194eea1a69697781ce532e643f0258",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/a8/9c478a26865e27a3d2b93a98cf4b4984ae7308": "20eb84d5785a2aeec7a5f29e4de24f15",
".git/objects/b0/df24ecc290aa3e1696b2c93f5dd982dd48f8a8": "75981abb293817aa5bf13e9a82a46b16",
".git/objects/a1/33fcd18e53ec38e28b0b9f2b993eb761b7b3af": "2eafdae36fc3aebb2284a6692fc8fa42",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c3/236d4018a162e9d6d3206313289f848ec47015": "c37759e2db87819b617ed5f7c32297c5",
".git/objects/c4/4f86577f0ae196434372e556eb64ac0628bbc5": "90223225f7a9aad6dce247a82503cbbe",
".git/objects/ea/2ae729d718ebc6c510229e5bd0925327ca79fc": "302d1d9ac52be5415e22738a4274d342",
".git/objects/cd/4301bafd120b5f6c57fbae4006cdf81b498c82": "0e4a4560e9782f4228cd74bd0237fd29",
".git/objects/cd/83ec11a5b7d8e892f75eed04e6c40135a8c32a": "98e9c04d83a376804e6e8fe5776ba14d",
".git/objects/f0/cd6d5c294b794ff6073e38a5ac38ac3231eef3": "833a9d20463b71168bae7522b54177ef",
".git/objects/fa/ea35b5498400eec8e7207b07eda3aebc486246": "313080eb2f9f4e90ebe3d30da400783b",
".git/objects/ff/d6ec6332f80bffc473da48e3a9f80a5cdb5650": "9b3248e65a16a7b55e58f95e71996eb0",
".git/objects/c5/1374aee11007b9e09e238f4e0ee1c217fb59d1": "6bb6520d0ff055715fc97e409774b11e",
".git/objects/f6/050b46585069ab4ff4723ed7efb40f0330bdf0": "b486f9fe77f83ff4a4029731b3d35f2e",
".git/objects/e7/0f8c92676f244c3f19b842ea42a356026317f5": "1e4f331e86885c26710df4a639055aec",
".git/objects/e7/d17679f883dc5785aed9fb6b0d3ff7766e16b7": "ac51549f057df82ae888b2609aa8a791",
".git/objects/cb/ceb439577c0bf4965a8bc6cda0d9bab48aa6e8": "dfaea5902e0b1ac295a603f949beef54",
".git/objects/e0/74b3ee075bca69c632b426f4fe5bfb30c2d790": "35aa46d73d3ca45dfc73483fa4362cfb",
".git/objects/46/c40a8984d2ab50277a3911365c317c13b689d4": "3eb3108db32b63ad25ec5ce37124722c",
".git/objects/79/a03c9cdf8293ad00d59129396d52de51dee382": "06f978617e4d170d807fc76166f8dc8d",
".git/objects/2d/fcdbe9f2df0332cee24295b9c0a4cdbf2478b7": "b40637ed7a305a7a7296f4f96b139cc1",
".git/objects/83/f87c9b6065120f044357aaf6e20c365475a315": "a52cbdb4f324b71784c520af0bc66d9f",
".git/objects/1b/6f3b9bbd3f4ec362ed3d87074e9d5989e38033": "4ed0f49b161e5914e1cad194c2e29105",
".git/objects/1b/9da3043acc286beef5814a2a8c854d533ffb60": "2855b973b03e0bf4f19d50115a7af04f",
".git/objects/48/5026b8f5c9fdb877033a9c1840105051b76623": "f6ac4c3261b4b257ef988e6131b1b9da",
".git/objects/48/abb3d758a2cd0c22b39363124f2b6b948a086b": "5c8327b41a034ddee5939bf2d488f561",
".git/objects/70/984e301c14a5d68fa01f46a130e69c9d1e8f95": "5211ebe5940f789ed1a5cba84a1312b2",
".git/objects/4a/f33668fda40e6f4729f699b99ead74c33ebae0": "51cac4586df245f4a272aee058b862dd",
".git/objects/23/26d4f70404a3e4493b3069871c2752bce87af7": "ca4fbafb424280652556e894c32b7cf6",
".git/objects/4f/346c3e43f95e778d7cef3cb6ceede9cd2bf1c8": "99981890f1649c8ef95c28d9e5a27d4e",
".git/objects/8d/0bc7f07c9677e3f8636abccd9eb418cb27456f": "f9ec24f8f99b80b8bea79e10fc4f6dfa",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/1c/8943163c3e080a98ba888ce21376dc52f3327c": "02170fffe5a454935d7c7fa38db3ee1d",
".git/objects/1c/86d1fbedbd81294644babd94c5b651f4fcbdfb": "69903bcaed43c152fe77f0d1f8a0b2d4",
".git/objects/40/79b58b3125ffd94116c528f334738b08823a3c": "35236be9b6f123a8d2abeede6773f6cd",
".git/objects/2e/7e88c7b138c45ad7ef24c7ccee50ea461aad70": "3e7c7d6d26c71b1e402f49cb1927d17f",
".git/objects/2b/ad6226a55ee0cdf563063d65290311384bb785": "406b945a5e11c9e50c85b95f46e9f461",
".git/objects/2b/db48c11c22afe3c34173154680be20be75816a": "83d18e4eb72624cd8b0c621dff348bfc",
".git/objects/47/6cfbee99f51b8df2160ac24cdc93053e0de6ae": "595612237cd59eda529f5855f8810fe4",
".git/objects/13/c084cc19a8be8074e1e3acef2126d2c46f6083": "cf4b8c99d194435550e50b03e3eda4e5",
".git/objects/22/5744bd6947df637fa2f5dbcc5e7c0dea0a6aa1": "9a92957b4a8b60d7f510b1a0baaae628",
".git/objects/22/a6c4e4fe88af822c0f0642cb7b157b73d89f38": "b3a30e900cf6eb0ed9f856b75b360525",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "d82091eaab1c9012ed94be267b1dbcc6",
".git/logs/refs/heads/main": "d82091eaab1c9012ed94be267b1dbcc6",
".git/logs/refs/remotes/origin/main": "f6a1b573e427f2f410b96650f21c5a97",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "508a75390dc7aa51d9656f949ce58946",
".git/refs/remotes/origin/main": "508a75390dc7aa51d9656f949ce58946",
".git/index": "76a67ef857b49c346df4ead8bb88013f",
".git/COMMIT_EDITMSG": "146df3b0d46e9ca48cc606de1df3d15d",
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
