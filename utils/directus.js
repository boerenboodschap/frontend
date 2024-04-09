import { createDirectus, rest } from '@directus/sdk';

const directus = createDirectus('http://0.0.0.0:8056').with(rest());

export default directus;