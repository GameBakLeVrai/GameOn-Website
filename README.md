# GameOn - Website

GameOn platform revitalization and upgrade.

## Background of Project

- You've recently been hired as a junior Front-End developer at GameOn, an SME specializing in gaming conferences and competitions.

    As you know, we simplified the new home page and contest registration after receiving negative feedback from some users. Jason worked on it, but unfortunately didn't have time to finish before leaving for his new position at his new company. I'll need you to take over and complete the Front-End part.

    Your job is to add the missing JavaScript code to make the form fully functional.

## Instructions

- Close modal
    Add functionality to button (x)

- Implement form entries
    (1) Link labels to entries in HTML using "for" and "id" attributes in existing code. Correct HTML code where necessary.
    (2) Use pure JavaScript (not jQuery) to complete the form:

    The form must be valid when the user clicks on "Submit".
    Data must be entered correctly:
        1. The First Name field has a minimum of 2 characters / is not empty.
        2. Last name field has a minimum of 2 characters / is not empty.
        3. E-mail address is valid.
        4. For the number of contests, a numerical value is entered.
        5. A radio button is selected.
        6. The general conditions box is checked, the other box is optional / can be left unchecked.
    Retain form data (do not delete form) if it does not pass validation.

- Add validation or error messages
    Specific error messages should appear below the incorrect entry. Error messages should appear below the associated input field. 
    
    Examples:

        "Please enter 2 characters or more for the name field."
        "You need to select an option."
        "You must check that you accept the terms and conditions."
        "You must enter your date of birth."

- Add confirmation of successful transmission
    After successful validation, include a successful submission confirmation message for the user (e.g. "Thank you! Your reservation has been received.").

- Manual testing
    Visualize and test the user interface in the latest versions of Chrome and Firefox, as well as in mobile and desktop versions. Correct existing display errors.
    Test all button and form entry functionalities (test correct and incorrect values).