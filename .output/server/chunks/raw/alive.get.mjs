import { defineEventHandler } from 'h3';

const alive_get = defineEventHandler(() => {
  return {
    alive: true
  };
});

export { alive_get as default };
//# sourceMappingURL=alive.get.mjs.map
