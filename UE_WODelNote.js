/**
 * @NApiVersion 2.1
 * @NScriptType UserEventScript
 */
define([], () => {

    const beforeLoad = (scriptContext) => {
        const form = scriptContext.form;
        form.addButton({
            id: "custpage_wo_del_note_button",
            label: "Print Delivery Note",
            functionName: "WODeliveryNote()"
        });
        form.clientScriptModulePath = "SuiteScripts/CL_WODelNote"; // Update the path to your client script
    };

    return { beforeLoad };

});
