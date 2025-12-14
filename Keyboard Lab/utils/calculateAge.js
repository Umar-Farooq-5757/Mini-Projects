/**
 * Calculates a person's age in years, months, and days from a date of birth (DOB).
 * @param {Date} dob - The date of birth (as a Date object).
 * @param {Date} [referenceDate] - The date to calculate the age up to (defaults to today).
 * @returns {{years: number, months: number, days: number}} - The calculated age.
 */
export function calculateAge(dob, referenceDate = new Date()) {
  const today = new Date(referenceDate.getFullYear(), referenceDate.getMonth(), referenceDate.getDate());
  const birthDate = new Date(dob.getFullYear(), dob.getMonth(), dob.getDate());

  // Check for future date (if DOB is in the future)
  if (birthDate > today) {
    return { years: 0, months: 0, days: 0 }; // Or throw an error
  }

  let years = today.getFullYear() - birthDate.getFullYear();
  let months = today.getMonth() - birthDate.getMonth();
  let days = today.getDate() - birthDate.getDate();

  // --- Adjust for months and years ---
  
  // If current day is before birth day of the month, borrow a month
  if (days < 0) {
    months--;
    
    // Get the number of days in the *previous* month
    // Month is 0-indexed, so today.getMonth() gives the current month index, 
    // and passing 0 as the day returns the last day of the *previous* month.
    const daysInPreviousMonth = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
    days += daysInPreviousMonth;
  }

  // If current month is before birth month, borrow a year
  if (months < 0) {
    years--;
    months += 12;
  }

  return { years, months, days };
}
export default calculateAge