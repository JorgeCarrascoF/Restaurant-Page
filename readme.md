--- Instalación de WebPack para los proyectos ---

    1º npm init (enter several times)
    2º npm install webpack webpack-cli --save-dev
    3º .gitignore inside node_modules
    4º Create webpack.config.js with:
        {const path = require('path');

        module.exports = {
            entry: './src/index.js',
            output: {
                filename: 'main.js',
                path: path.resolve(__dirname, 'dist'),
            },
        }   
    }
