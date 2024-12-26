export default ({ env }) => ({
  //...
  meilisearch: {
    config: {
      // Your meili host
      host: env('MEILI_MASTER_HOST'),
      // Your master key or private key
      apiKey: env('MEILI_MASTER_KEY'),
    }
  }
});
