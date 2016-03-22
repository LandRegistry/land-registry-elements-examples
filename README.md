# Example setups for using the land-registry-elements repo.

[land-registry-elements](https://github.com/LandRegistry/land-registry-elements) provides a set of reusable components based on and extending the gov uk elements. This repository contains a series of examples showing how these components can be used within your application under the following scenarios. Each folder is a standalone demo.

## Node.JS
The easiest way to build the components is to use a simple Node.JS build script. This is the method used by [digital-register-frontend](https://github.com/LandRegistry/digital-register-frontend).

**See [node-js](node-js) for a demo**

## With a task runner
In addition to pulling assets from land-registry-elements it is likely that you may have local build systems in place. In this situation it is suggested that you run the land-registry-elements build process first and then your custom tasks.

### Grunt.JS
In order to integrate with Grunt.JS, we implement a custom task and call that from the command line. This task should be added before any other tasks you have running such as sass.

**See [grunt-js](grunt-js) for a demo**

### Gulp.JS
In order to integrate with Grunt.JS, we implement a custom task and call that from the command line. This task should be added before any other tasks you have running such as sass.

**See [gulp-js](gulp-js) for a demo**

### Make a GET request to the pattern library application
By ticking the components you require on the index page, you will be provided with a URL to which you can make a GET request in your applications build pipeline. You can manually download a build (Using the buttons on the homepage) and commit it to your repository if necessary but you are encouraged to automate this wherever possible. See [Running the pattern library](#running-the-pattern-library) for more information on running the pattern library yourself. Alternatively you can make GET requests to the heroku demo directly but this is perhaps not recommended as it adds a dependency on an external service to your build script.

**See [get-request](get-request) for a demo**

### Bypass the pattern library's build scripts entirely!
The pattern library comes with a set of build scripts that will build out CSS and JS from the component folders in the repository by working out what is required based on the dependencies of each component (See [Defining a component](#defining-a-component) for more details). However if this is too prescriptive for your needs then you can sidestep this. At the end of the day, the patterns are simply defined as SCSS files on disk - you can simply `@import` them into your application's SCSS file if this better suits your needs and `require()` any JavaScript into a Browserify build script. This method is not particularly "supported" and you may encounter difficulties, but it is documented here as a possibility to emphasise that the pattern library's build scripts are complementary to the components rather than an intrinsic part of them.
