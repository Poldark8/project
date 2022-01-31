module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            boxShadow: {
                primaryShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
            },
            maxWidth: {
                200: '50rem' //800px
            },
            colors: {
                text: 'rgba(51,51,51,0.8)',
                disabled: '#D3D3D3',
                lightGreen: '#67fac8',
                darkGreen: '#44caca',
                darkerGreen: '#339a99',
                lightOrange: '#ff7c6b',
                darkOrange: '#fe4564'
            }
        },
        screens: {
            mdGrater: {min: '769px'},
            // => @media (min-width: 769px) { ... }

            md: {max: '768px'},
            // => @media (max-width: 768px) { ... }

            smGrater: {min: '641px'},
            // => @media (min-width: 641px) { ... }

            sm: {max: '640px'},
            // => @media (max-width: 640px) { ... }

            xsmGrater: {min: '577px'},
            xsm: {max: '576px'},
            // => @media (max-width: 576px) { ... }

            '2xsm': {max: '480px'},
            // => @media (max-width: 480px) { ... }

            '3xsm': {max: '320px'},
            // => @media (max-width: 320px) { ... }
        },

    },
    plugins: [],
}