'use strict';

import { render } from 'node-sass';

export default function sass(opts = {}) {
  const results = [];
  return function handler(files) {
    for(let file of files) {
      opts.file = file.path;
      render(opts, (err, compiled) => results.push(compiled));
    }
    return Promise.resolve(results);
  }
};