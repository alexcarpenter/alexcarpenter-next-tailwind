import { format, parseISO } from "date-fns";

export const parseDateToString = (date: string): string => {
  return format(parseISO(date), "MM/dd/yyyy");
};
