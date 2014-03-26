/* jshint unused: false */
/*global define*/
define(function(require) {

    var Application = require('js/application'),
        InstallerMainView = require('/installer/js/views/InstallerMain.view.js'),
        InstallerModel = require('/installer/js/models/Installer.js');

    Application.App.module('Installation', function(AppModule, App, Backbone, Marionette, $, _) {

        var installerModel = new InstallerModel.Model();

        // Define a view to show
        // ---------------------

        var installerPage = new InstallerMainView({model: installerModel});

        // Define a controller to run this module
        // --------------------------------------

        var Controller = Marionette.Controller.extend({

            initialize: function(options){
                this.region = options.region;
            },

            show: function(){
                this.region.show(installerPage);
            }

        });

        //            contentRegion: '#content-region'
        // Initialize this module when the app starts
        // ------------------------------------------

        AppModule.addInitializer(function(){
            AppModule.contentController = new Controller({
                region: App.installation
            });
            AppModule.contentController.show();
        });


    });
});