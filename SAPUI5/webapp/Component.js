//@ts-nocheck
sap.ui.define([
    "dtt/SAPUI5/model/Models",
    "sap/ui/core/UIComponent",
    "./controller/HelloDialog"
],
    /**
     * @param{typeof dtt.SAPUI5.model.Models} Models
     * @param{typeof sap.ui.core.UIComponent} UIComponent
        *
     */
    function (Models, UIComponent, HelloDialog) {
        return UIComponent.extend("dtt.SAPUI5.Component", {
            metadata: {
                manifest: "json"
            },
            init: function () {
                UIComponent.prototype.init.apply(this, arguments);
                this.setModel(Models.createRecipient());
                //let i18nModel = new ResourceModel({ bundleName: "dtt.SAPUI5.i18n.i18n" });
                //this.setModel(i18nModel, "i18n");
                this._helloDialog = new HelloDialog(this.getRootControl());
                this.getRouter().initialize();
            },
            exit: function(){
                this._helloDialog.destroy();
                delete this._helloDialog;
            },
            openHelloDialog: function(){
                this._helloDialog.open();
            }
    });
    })