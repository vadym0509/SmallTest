import momentTz from "moment-timezone";

export const getSeperatedTimeFromNow = (dateString: string) => {
    const localeUTC = momentTz.tz(
      dateString,
      "DD/MM/YYYY HH:mm:ss",
      "Asia/Jerusalem"
    );
    const date = new Date(localeUTC.format());
  
    const now = new Date();
  
    var diff = Math.abs(+now - +date) / 1000; //in miliseconds
    const days = Math.floor(diff / 86400);
    diff -= days * 86400;

    // calculate (and subtract) whole hours
    const hours = Math.floor(diff / 3600) % 24;
    diff -= hours * 3600;

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(diff / 60) % 60;
    diff -= minutes * 60;

    // what's left is seconds
    const seconds = Math.round(diff % 60);

    const timeCounter = [
        {
            title: "days",
            value: days,
        },
        {
            title: "hours",
            value: hours,
        },
        {
            title: "minutes",
            value: minutes,
        },
        {
            title: "seconds",
            value: seconds,
        },
    ]
    return timeCounter;
  };