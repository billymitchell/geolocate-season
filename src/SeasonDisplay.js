import React from 'react';
import '../src/SeasonDisplay.css';

const seasonConfig = {
  Summer: {
    displayText: "Let's hit the beach!",
    iconName: 'sun',
  },
  Winter: {
    displayText: "Burr, it's chilly",
    iconName: 'snowflake',
  },
};
const getSeason = (lat, month) => {
  //if month is grater then two and less then 9
  // is summer months in the norther hemisphere
  if (month > 2 && month < 9) {
    //is the latitude in the northern of southern hemisphere?
    //ternary operator
    //if grater then 0, return summer,
    //otherwise return winter
    return lat > 0 ? 'Summer' : 'Winter';
  }
  // if winter months in norther hemisphere
  else {
    //return winter if in norther hemisphere
    //return summer if in nothern hemisphere
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = (props) => {
  //Store Season by running getSeason function
  //getSeason Takes two variables
  //props.lat is passed down as a state from index.js
  //new Date().getMonth() is a native js way to get the current number month
  const Season = getSeason(props.lat, new Date().getMonth());
  //pass season into seasonConfig, if it matches, it returns those children
  //destructor text and iconName form seasonConfig[Season]
  const { displayText, iconName } = seasonConfig[Season]; //
  return (
    <div className={`season-display ${Season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{displayText}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
