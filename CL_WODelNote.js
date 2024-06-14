/**
 * @NApiVersion 2.x
 * @NScriptType ClientScript
 * @NModuleScope SameAccount
 */
define(["N/currentRecord", "N/url"], function(currentRecord, url) {

    function pageInit(scriptContext) {
        // Do Nothing
    }

    function WODeliveryNote() {
        var recordId = currentRecord.get().id;

        
        var slUrl = url.resolveScript({
            scriptId: 'customscript_custom_sl_wodelnote',
            deploymentId: '_custom_sl_w_d',
            params: { recordId: recordId } // Pass any necessary parameters to the Suitelet
        });
        window.open(slUrl);
    }

    return {
        pageInit: pageInit,
        WODeliveryNote: WODeliveryNote
    };

});
