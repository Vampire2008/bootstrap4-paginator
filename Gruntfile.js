module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                cwd: "src/",
                src: "*.js",
                dest: "build/",
                expand: true,
                ext: ".min.js",
                extDot: "last"
            }
        }
    })

    grunt.loadNpmTasks('grunt-contrib-uglify-es');

    grunt.registerTask("default",["uglify"]);
  };