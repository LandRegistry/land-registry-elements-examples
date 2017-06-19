var gulp = require('gulp')
var landRegistryGulpTasks = require('land-registry-gulp-tasks')

var path = require('path')

var config = {
  'applicationPath': './app',
  'assetsPath': 'assets',
  'sassPath': 'src/scss/*.scss',
  'sassIncludePaths': [
    'node_modules/land-registry-elements/src'
  ],
  'localhost': 'localhost:8080'
}

// Set up context for each module
// Commonly used for modules that expect "this" to resolve to the window object
// In ES6 modules, using "this" at the top level always resolves to undefined
// hence the need to override it here
config.moduleContext = {}

config.assetsPath = path.join(config.applicationPath, config.assetsPath)

// Register all the gulp tasks provided by the land registry module
// If you don't want to do this, you could opt not to register some of the tasks
// Also, if you want more tasks than this, you are free to use the gulp variable
// and register custom tasks below
for (var task in landRegistryGulpTasks) {
  landRegistryGulpTasks[task](gulp, config)
}
