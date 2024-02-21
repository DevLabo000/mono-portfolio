module.exports = {
  api: {
    output: {
      target: './packages/libs/api/client',
      schemas: './packages/libs/api/client/types',
      mode: 'tags-split',
      mock: true,
      client: 'react-query',
      clean: true,
      indexFiles: true,
      prettier: true,
    },
    input: {
      target: './packages/docs/api/open-api.yml',
    },
  },
};
