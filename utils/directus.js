// import { createDirectus, rest } from '@directus/sdk';

// const directus = createDirectus('http://0.0.0.0:8056').with(rest());

// export default directus;


import { createDirectus, rest, authentication } from '@directus/sdk';

const directus = createDirectus(process.env.BACKEND_URL)
  .with(authentication("cookie", {credentials: "include", autoRefresh: true}))
  .with(rest());

export default directus;