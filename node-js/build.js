var path = require('path');
var landRegistryElements = require('land-registry-elements');

landRegistryElements({
  'destination': path.resolve(__dirname, 'dist'),
  'mode': 'production',
  'assetPath': 'dist/assets',
  'components': [
    'elements/govuk/layout',
    'elements/govuk/core',
    'elements/govuk/typography',
    'elements/govuk/phase-banner',
  ]
})
  .then(function(dest) {
    console.log('Done');
  })
  .catch(function(e) {
    console.error(e);
  });
