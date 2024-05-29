
interface Scripts {
    name: string;
    src: string;
}  
export const ScriptStore: Scripts[] = [
    {name: 'bundle', src: './assets/jampack/vendors/bootstrap/dist/js/bootstrap.bundle.min.js'},
    {name: 'jquery', src: 'assets/casa/js/jquery-3.7.1.min.js'},
    {name: 'viewport', src: 'assets/casa/js/viewport.jquery.js'},
    {name: 'bootstrap', src: 'assets/casa/js/bootstrap.bundle.min.js'},
    {name: 'niceSelect', src: 'assets/casa/js/jquery.nice-select.min.js'},
    {name: 'waypoints', src: 'assets/casa/js/jquery.waypoints.js'},
    {name: 'counterup', src: 'assets/casa/js/jquery.counterup.min.js'},
    {name: 'swiper', src: 'assets/casa/js/swiper-bundle.min.js'},
    {name: 'meanMenu', src: 'assets/casa/js/jquery.meanmenu.min.js'},
    {name: 'magnificPopup', src: 'assets/casa/js/jquery.magnific-popup.min.js'},
    {name: 'wow', src: 'assets/casa/js/wow.min.js'},
    {name: 'main', src: 'assets/casa/js/main.js'}
];