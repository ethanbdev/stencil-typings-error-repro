import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'no-type-errors',
  sourceMap: true,
  outputTargets: [
    {
      type: 'dist'
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
