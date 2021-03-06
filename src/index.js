'use strict';

import plugin from 'osia-plugin';
import { render } from 'node-sass';

export default function(opts = {}) {
  return plugin((file, resolve, reject) => {
    opts.file = file.path;
    render(opts, (err, compiled) => {
      if (err) return reject(err);
      file.contents = compiled.css;
      file.extname = '.css';
      resolve(file);
    });
  });
};
