
'use strict'

if (process.env.NODE_ENV === 'production') {
  module.exports = require('./dist/try-nice.cjs.production.min')
} else {
  module.exports = require('./dist/try-nice.cjs.development.js')
}
