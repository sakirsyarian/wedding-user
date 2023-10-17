const events = [
  {
    title: "Acara",
    important: true,
    heading: "mainHeading",
    date: "mainDate",
    timeZone: "mainTimeZone",
    start: "mainTimeStart",
    finish: {
      name: "mainTimeFinish",
      disable: "mainUntilDone",
    },
    location: "mainLocation",
    address: "mainAddress",
  },
  {
    title: "Acara Optional",
    important: false,
    heading: "optionalHeading",
    date: "optionalDate",
    timeZone: "optionalTimeZone",
    start: "optionalTimeStart",
    finish: {
      name: "optionalTimeFinish",
      disable: "optionalUntilDone",
    },
    location: "optionalLocation",
    address: "optionalAddress",
  },
];

export default events;
