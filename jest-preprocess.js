const babelOptions = {
  presets: [
    '@babel/preset-typescript',
    'babel-preset-gatsby',
    '@babel/preset-env',
    '@babel/preset-react',
  ],
};

module.exports = require('ts-jest').createTransformer(babelOptions);
