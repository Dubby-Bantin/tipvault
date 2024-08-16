import { isAfter, parse } from "date-fns";

// Function to check if a date is newer than a certain threshold
export function isNewTip(dateString: string): boolean {
  // Define the date format according to the input
  const format = "MMMM d, yyyy h:mm a";
  const parsedDate = parse(dateString, format, new Date());

  // Defining the threshold date (e.g., one week ago)
  const thresholdDate = new Date();
  thresholdDate.setDate(thresholdDate.getDate() - 7); // Adjust as needed

  // Checking if the parsed date is newer than the threshold
  return isAfter(parsedDate, thresholdDate);
}
