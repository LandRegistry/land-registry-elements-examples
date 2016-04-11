var fs = require('fs');
var targz = require('targz');
var request = require('request');
var rimraf = require('rimraf');

console.log('Requesting assets from heroku http://land-registry-elements.herokuapp.com/build');
console.log('Please be patient as heroku can take a few seconds to spin up');

if(fs.existsSync('assets.tar.gz')) {
  fs.unlinkSync('assets.tar.gz');
}

rimraf.sync('dist');

request({
  uri: 'https://land-registry-elements.herokuapp.com/build',
  qs: {
    'assetPath': 'dist/assets',
    'components': {
      'elements/govuk/layout': true,
      'elements/govuk/core': true,
      'elements/govuk/typography': true,
      'elements/govuk/phase-banner': true,
      'elements/land-registry/leaflet-map': true
    }
  }
})
  .on('response', function(response) {
    console.log('Result from heroku -> Status:', response.statusCode, response.headers['content-type'])
  })
  .on('error', function(err) {
    console.log(err)
  })
  .pipe(fs.createWriteStream('assets.tar.gz'))
  .on('finish', function() {

    console.log('Downloaded to assets.tar.gz');

    // decompress files from tar.gz archive
    targz.decompress({
      src: 'assets.tar.gz',
      dest: 'dist/assets'
    }, function(err){
      if(err) {
        console.log(err);
      } else {
        console.log('Assets unzipped to dist/assets');
      }
    });

  });
