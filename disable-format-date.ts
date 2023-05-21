import { differenceInCalendarDays } from "date-fns";
export const disabledDateFormat = (current: { $d: string | Date }): boolean => {
  // Can not select days before today and today
  return differenceInCalendarDays(current.$d as Date, new Date()) < 0;
};