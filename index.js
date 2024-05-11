import surveyLinks from "./surveyLinks.js";

window.location.assign(
  surveyLinks[Math.floor(Math.random() * surveyLinks.length)]
);
