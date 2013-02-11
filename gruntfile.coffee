module.exports = (grunt)->
    grunt.initConfig
        coffee:
            compile:
                files:
                    "MyPlugin_jQueryCoffee.js": ["MyPlugin_jQuery.coffee"]
                    "MyClassCoffee.js": ["MyClassCoffee.coffee"]
                options:
                    bare: true
        jshint:
            all: ["**/*.js"]
        watch:
            files: ["**/*.coffee"]
            tasks: ["coffee", "jshint"]

    grunt.loadNpmTasks "grunt-contrib-coffee"
    grunt.loadNpmTasks "grunt-contrib-jshint"
    grunt.loadNpmTasks "grunt-contrib-watch"

    grunt.registerTask "default", ["watch"]