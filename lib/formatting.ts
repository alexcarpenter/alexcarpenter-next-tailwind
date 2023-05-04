import { format, parseISO, compareDesc } from "date-fns";

export const parseDateToString = (date: string): string => {
  return format(parseISO(date), "MM/dd/yyyy");
};

export const formatTags = (arr: string[]): string => {
  return new Intl.ListFormat("en", { type: "conjunction" }).format(arr);
};

export { compareDesc };
