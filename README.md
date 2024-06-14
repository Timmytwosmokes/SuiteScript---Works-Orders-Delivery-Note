NetSuite Delivery Note Scripts for Work Orders
Overview

This suite of scripts provides an integrated solution for generating and printing delivery notes directly from work order records in NetSuite. It includes a Client Script for user interaction, a Suitelet to process and generate the delivery note PDF, and a User Event Script to add a functional button on the work order form.
Scripts Description
1. Client Script (CL_WODelNote.js)

This script facilitates the interaction between the user and the Suitelet. It provides a function that triggers the Suitelet to generate a delivery note for the current work order.

Key Functions:

    WODeliveryNote(): Opens a new window with the URL to the Suitelet, passing the current record's ID as a parameter.

2. Suitelet (Suitelet.js)

Responsible for generating a PDF delivery note from a specified template file. This script loads the current work order record, applies the template, and outputs a rendered PDF.

Process Steps:

    Load Record: Validates and loads the current work order record.
    Render PDF: Uses a pre-defined template file to generate a PDF delivery note.
    Output PDF: Streams the PDF directly to the user's browser for printing or downloading.

3. User Event Script (UE_WODelNoteButton.js)

Adds a custom button ("Print Delivery Note") to the work order form. This button is linked to the WODeliveryNote() function in the Client Script, allowing users to trigger the PDF generation process directly.

Key Functionality:

    beforeLoad: Adds the "Print Delivery Note" button to the work order form during the form loading phase.

Installation and Setup

    Upload Scripts:
        Save and upload the script files to your NetSuite SuiteScripts directory.

    Create Script Records:
        Navigate to Customization > Scripting > Scripts in NetSuite and create new script records for each of the uploaded scripts.
        Select the correct script type (ClientScript, UserEventScript, Suitelet) for each and link them to the uploaded files.

    Deploy Scripts:
        Deploy the User Event Script to the work order forms where the delivery note functionality is needed.
        Ensure the Suitelet is accessible and set up with appropriate permissions.

Configuration Notes

    Template File ID: The Suitelet script uses a specific template file (ID 36120) to generate the PDF. You will need to replace this ID with the ID of the template file you wish to use. Ensure that the correct template file ID is specified in the Suitelet script to match the template stored in your NetSuite file cabinet.

Usage

Once deployed, the "Print Delivery Note" button will appear on the work order forms specified in the deployment settings. Users can click this button to:

    Trigger the Suitelet, which generates a PDF delivery note for the current work order.
    View, download, or print the generated PDF directly from their browser.

Troubleshooting

    Button Not Appearing: Ensure the User Event Script is correctly deployed to the appropriate forms and that the script is active.
    PDF Not Generating: Check the Suitelet script for errors in loading the record or the template file. Also, verify that the template file exists in the file cabinet with the correct ID.
    Script Errors: Review the NetSuite script logs for any execution errors and ensure that all script IDs and deployment IDs are correctly configured.

For further assistance, consult NetSuite's scripting documentation or contact your NetSuite administrator.
