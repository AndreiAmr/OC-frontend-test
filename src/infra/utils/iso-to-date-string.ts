import moment from "moment";

export const ISOToDateString = (prop: string) => {
  const MONTH_TO_INCREMENT = 1;
  const day = moment(prop).date();
  const month = moment(prop).month() + MONTH_TO_INCREMENT;
  const year = moment(prop).year();

  const hours = ("0" + moment(prop).hours()).slice(-2);
  const minutes = ("0" + moment(prop).minutes()).slice(-2);
  const seconds = ("0" + moment(prop).seconds()).slice(-2);

  return {
    date: `${day}/${month}/${year}`,
    hours: `${hours}:${minutes}:${seconds}`,
  };
};
