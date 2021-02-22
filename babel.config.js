/* eslint-disable @typescript-eslint/explicit-function-return-type */

module.exports = api => {
  api.cache(true);
  return {
    plugins: [
      [
        'module-resolver',
        {
          alias: {
            assets: './src/assets',
            components: './src/components',
            constants: './src/constants',
            data: './src/data',
            api: './src/data/api',
            locales: './src/locales',
            routes: './src/routes',
            styles: './src/styles',
          },
          root: './src',
        },
      ],
    ],
  };
};
