const path = require('path');

let config = {
    entry: {
        app: path.join(__dirname, '../src/app.js')
    },
    resolve: {
        extensions: [".js", ".json", ".jsx", ".css"],
    }
};

module.exports = config;