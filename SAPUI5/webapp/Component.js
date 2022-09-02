//@ts-nocheck
sap.ui.define([
    // "sap/ui/core/mvc/Controller",
    // "sap/m/MessageToast",
    "dtt/SAPUI5/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "sap/ui/core/UIComponent"
],
/**
 * @param{typeof sap.ui.core.UIComponent} UIComponent
 * @param{typeof sap.ui.model.resource.ResourceModel} ResourceModel
 * @param{typeof dtt.SAPUI5.model.Models} Models
 */
function (Models, ResourceModel, UIComponent){
    return UIComponent.extend("dtt.SAPUI5.Component",{
        metadata:{
            manifest:"json"
        },
        init: function(){
            UIComponent.prototype.init.apply(this,arguments);
                this.setModel(Models.createRecipient());
            let i18nModel= new ResourceModel({bundleName:"dtt.SAPUI5.i18n.i18n"});
                this.setModel(i18nModel,"i18n");
        },   
        // onShowHello:function(){
        //     let oBundle = this.getView().getModel("i18n").getResourceBundle();
        //     let sRecipient = this.getView().getModel().getProperty("/recipient/name");
        //     let sMSG = oBundle.getText("helloMsg",[sRecipient]);
        //     MessageToast.show(sMSG);
        // }
    });
})