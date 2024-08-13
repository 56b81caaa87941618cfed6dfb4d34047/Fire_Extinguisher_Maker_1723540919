/* Summary: This component contains the app's logo and name in a large, bold font. They're both in the same line. And then a line of text underneath it. Both of these lines are center aligned.
*/
Vue.component("simple_footer_component_1723540920", {
    template: `
    <footer id="footer-section" style="min-height: 350px" class="flex-1 bg-gradient-to-r from-pink-400 via-purple-500 to-blue-600 bg-opacity-50 backdrop-filter backdrop-blur-lg rounded-lg shadow-lg p-8">
            <div id="footer-container" class="max-w-screen-xl mx-auto">
                <hr id="footer-divider" class="my-6 border-white border-opacity-30">
                <div id="footer-content" class="text-center">
                    <div class="flex">
                        <a id="footer-logo-link" href="#" class="flex-1 flex items-center justify-center mb-5 text-2xl font-semibold text-white hover:text-pink-200 transition-colors duration-300">
                            <img id="footer-logo" src="https://makeinfinite-mentat-test.azurewebsites.net/get_image/tmplh4w3dd5/logo.svg" class="h-9 mr-3 filter brightness-0 invert" alt="Landwind Logo" />
                            FyrExt: Streamlining Fire Safety
                        </a>
                    </div>
                </div>
                <div class="flex">
                    <div id="footer-text" class="flex-1 block text-sm text-center text-white text-opacity-80 hover:text-opacity-100 transition-opacity duration-300">
                        FyrExt is dedicated to revolutionizing fire safety through innovative design and meticulous manufacturing of top-quality fire extinguishers. Stay prepared, stay protected.
                    </div>
                </div>
            </div>
        </footer> 
    `,
    data() {
        return {
            expanded: false,
            tab: null,
        };
    },
});
