const purgecss = require('@fullhuman/postcss-purgecss')({
    content : [
        './src/**/*.js',
        './src/**/*.jsx',
        './public/index.html',
    ],

    whitelist: ['bg-red-100', 'bg-blue-100', 'bg-green-100', 'text-red-900', 'text-blue-900', 'text-green-900'],

    css: ['./src/assets/css/tailwind.css'],

    // Default tailwind purgecss config
    defaultExtractor: content => {
        const broadMatches = content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || []
        const innerMatches = content.match(/[^<>"'`\s.()]*[^<>"'`\s.():]/g) || []
    
        return broadMatches.concat(innerMatches)
    }
})

module.exports = {
    plugins: [
        require('tailwindcss'),
        require('autoprefixer'),
        ...process.env.NODE_ENV === 'production'
            ? [purgecss]
            : []
    ]
};