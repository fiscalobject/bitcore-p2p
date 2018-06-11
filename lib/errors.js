'use strict';

var spec = {
  name: 'P2P',
  message: 'Internal Error on ufocore-p2p Module {0}'
};

module.exports = require('ufocore-lib').errors.extend(spec);
