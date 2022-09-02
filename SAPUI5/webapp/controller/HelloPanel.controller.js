//@ts-nocheck
sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
],
/**
 * 
 * @param{typeof sap.ui.core.mvc.Controller} Controller 
 * @param{typeof sap.m.MessageToast} MessageToast
 */
    function (Controller, MessageToast){
        return Controller.extend("dtt.SAPUI5.Controller.HelloPanel",{
            onInit: function(){
            },   
            onShowHello: function(){
                let oBundle = this.getView().getModel("i18n").getResourceBundle();
                let sRecipient = this.getView().getModel().getProperty("/recipient/name");
                let sMSG = oBundle.getText("helloMsg",[sRecipient]);
                MessageToast.show(sMSG);
            }
        }
        );
    }
);
