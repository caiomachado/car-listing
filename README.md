# Summary

This project is a challenge to build a simple car listing application using React.
There is a JSON that already contains a few cars to display, however, the approach I took to do this challenge was to create a file called data.ts that contains already the added cars.
Initially I thought of using json-server but it wouldn't allow me to host the application functioning since the server must be started locally.
Doing this way, I can have the list of cars on demand and add new ones to it with the functionality of publishing a new car where you fill the information in and hit the publish button to add it to the list.
The data persists in the browser localStorage, so if you refresh the page, you won't lose the cars you have added.

Ps: As for the car image, it is recommended to use the image's url instead of uploading the image. Since there is no database, it wouldn't make sense to make the input accept files. Also, the nav bar doesn't do anything except navigate you to the home page since the focus of this application was to create the car listing.
One other thing I would do is create form validations, but I didn't because it was a simple car listing app.

# Technologies

The technologies used to build this project were: Vite.js, React, Typescript, Styled Components, React Router Dom

# SlidingList Component

This is the reusable component for listing items as required by the challenge, this component receives a few props:
- displayedValues: List of items that will be displayed in the list, the only information needed is the id and the name of each item in the original list
- itemSize: This property is to define how wide each item in the list is so that the sliding works accordingly
- nextItem: This is a function that triggers when you click the next button
- previousItem: This is a function that triggers when you click the previous button
- shouldSlideToNext: This is a boolean value to specify when it should start sliding, because you don't want to slide if there aren't many items in the list
- handleOnSelectItem: This is a function that triggers when you select an item from the list
- disablePreviousButton: This is a boolean value to define the logic when the previous button should be disabled
- disableNextButton: This is a boolean value to define the logic when the next button should be disabled
- selectedItemId: This is the selected item's id to identify which item to add the class "active"

Ps: When using this component, it's important to keep in mind that it is only horizontal.

