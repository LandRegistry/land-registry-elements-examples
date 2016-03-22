module.exports = function(grunt) {

  grunt.initConfig({
    /* Your normal grunt config here */
  });

  /**
   * Register custom task to generate the assets
   */
  grunt.registerTask('land-registry-elements', function(done) {
    var path = require('path');
    var landRegistryElements = require('land-registry-elements');

    var done = this.async();

    /**
     * Call the land registry elements pattern library to grab our assets
     * Note: This is asynchronous and returns a promise, so .then() and .catch()
     * should be used to interact with the results
     */
    landRegistryElements({
      'destination': path.join(__dirname, 'dist'),              // Where should the assets be built to
      'assetPath': 'dist/assets',         // What will the web accessible path to the assets be (Used for image paths in the sass)
      'components': [                     // Specify which components you wish to include
        'elements/govuk/layout',
        'elements/govuk/core',
        'elements/govuk/typography',
        'elements/govuk/phase-banner',
      ]
    })
      .then(function(dest) {
        console.log('Assets built to', dest);

        done();
      })
      .catch(function(e) {
        console.error(e);
      });
  })


  grunt.registerTask('default', ['land-registry-elements']);

};
