'use strict';

module.exports = {
  write: true,
  prefix: '^',
  plugin: 'autod-egg',
  test: [
    'test',
    'benchmark',
  ],
  devdep: [
    'egg',
    'egg-ci',
    'egg-bin',
    'autod',
    'autod-egg',
    'standard'
  ],
  exclude: [
    './test/fixtures',
    './docs',
    './coverage',
  ],
};
