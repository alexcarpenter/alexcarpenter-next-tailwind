import { format, parseISO, compareDesc } from "date-fns";

export const parseDateToString = (date: string): string => {
  return format(parseISO(date), "MM/dd/yyyy");
};

export { compareDesc };
