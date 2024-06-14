/**
 * @NApiVersion 2.x
 * @NScriptType Suitelet
 */

define(['N/render', 'N/record', 'N/file', 'N/log'], function(render, record, file, log) {

    function onRequest(context) {
        var recordId = context.request.parameters.recordId;

        if (!recordId) {
            log.error('Error', 'No record ID provided.');
            return;
        }

        // Load the current record
        var currentRecord = record.load({
            type: record.Type.WORK_ORDER, // change to the appropriate record type
            id: recordId,
            isDynamic: true
        });

        if (!currentRecord) {
            log.error('Error', 'Record not found.');
            return;
        }

        // Load the template file
        log.debug("loading file");
        var templateFile = file.load({
            id: '36120'
        });

        if (!templateFile) {
            log.error('Error', 'Template file not found.');
            return;
        }

        log.debug("creating template rendering file");
        // Create template renderer
        var renderer = render.create();

      log.debug("Setting template file");
        // Set template content
        renderer.templateContent = templateFile.getContents();

      log.debug("adding record data")
        // Add record data
        renderer.addRecord({
            templateName: 'record',
            record: currentRecord
        });

      log.debug("rendering pdf file");
        // Render as PDF
        var pdfFile = renderer.renderAsPdf();

      log.debug("sending the pdf as a response");
        // Send the PDF file as a response
        context.response.writeFile({
            file: pdfFile,
            isInline: true
        });
    }

    return {
        onRequest: onRequest
    };

});
