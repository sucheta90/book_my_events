# BookMyEvents

This project was build with React, is a simple app, which has a list of events to choose from and gives the users a feel of an actual ticketing site.

## Live Demo

To watch the live demo please visit https://bookmyeventssm.netlify.app

## Disclaimer

This project is intended for learning only and does not promote any kind of business practices. The pictures have been downloaded from https://unsplash.com/ and is used for demo only. Date of events are randomly generated. Event data has been collected from google.com

## Features

- This project features a list of events in the near future. The date of events are not real.
- User can select an event of their choice and find out more details on clicking the button _More Info_.
- The detailed section features a heading in Red font. This is a link to the google map directions.
- The _Book Now_ button will open a theater layout, to setect/ deselect seats. The seats are color coded and are priced at different range.
- The cart shows the number of seat selected under each category and the total amount.
- The checkout page is being worked on at the moment and will be available soon.
- The project can adjust to different screen screen sizes.

## Summary

The project consists of multiple smaller functional components and their own stylesheets. The purpose of creating smaller components was done to manage the project in an optimized way.

## Using State Hook

The below example is specific to the theater view.

```
export default function SeatBooking(props) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  function handleSeatSelection(e) {
    setSelectedSeats((prevState) => {
      if (prevState.includes(e.target.id)) {
        prevState = prevState.filter((id) => id != e.target.id);
        return prevState;
      }
      return [...prevState, e.target.id];
    });
  }
  return (
    <Card className={styles.seats}>
      <SeatingHeader price={props.price} />
      <Gallery
        selectedSeats={selectedSeats}
        occupiedSeats={props.occupiedSeats}
        handleSeatSelection={handleSeatSelection}
        hideSeatingHandler={props.hideSeatingHandler}
      />
      <Cart price={props.price} selectedSeats={selectedSeats} />
    </Card>
  );
}

```

A State has been initialized in the parent container named _SeatBooking_, that has an empty array which will be used to keep a track of the selected seats and on change will rerender the component which will help reflect the changes in the child components.

### Details - on the code above

- I have created a parent container _SeatBooking_ that holds the below child components:
- _SeatingHeader_ : This hold information like seats priced as per category and seat status. This information is passed as props through layers from App.js (conatains the hard coded Event Data).
- _Gallery_ : This is the component that shows the seat rows and columns.
  Seats are of different colors, this is for users to identify the price range. When a seat is selected, the corresponding seat Id is then added to the array maintained in _state_. This changes the parent state thus reflect chnages on the sibling compoenent _Cart_.
- _Cart_: The cart extracts the Id and looks for the keyword, here is the _Color_. Accordingly updates the cart view.

## Future Implementation

1. The Checkout page.
2. The look of the theater on smaller screen has to be redesigned.
3. Authorized users will be able to add events to the list, which will be sorted based on event dates.
4. Pie charts to show popularity of the event/ tickets sold till date (TBD).
5. The will be fetched using API instead of being hard coded.
