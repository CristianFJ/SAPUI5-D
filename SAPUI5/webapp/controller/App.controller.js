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
        return Controller.extend("dtt.SAPUI5.Controller.App",{
            onInit: function(){
                // let i18nModel= new ResourceModel({bundleName:"dtt.SAPUI5.i18n.i18n"})
                // this.getView().setModel(Models.createRecipient());
                // this.getView().setModel(i18nModel,"i18n");
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


//----------------------------------------------------------
    //Ejercicio funcional
// //@ts-nocheck
// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/model/json/JSONModel"
// ],
// /**
//  * 
//  * @param {typeof sap.ui.core.mvc.Controller} Controller 
//  * @param{typeof sap.m.MessageToast} MessageToast
//  * @param{typeof sap.ui.model.json.JSONModel} JSONModel
//  */
//     function (Controller, MessageToast, JSONModel){
//         return Controller.extend("dtt.SAPUI5.Controller.App",{
//             onInit: function(){
//                 var oData={
//                     recipient:{
//                         name:"World"
//                 }
//             };
//             let oModel = new JSONModel(oData);
//             this.getView().setModel(oModel);
//         },       
//             onShowHello:function(){
//                 MessageToast.show("Hello WorldToast");
//             }
//         }
//         );
//     }
// );
//--------------------------------------------
