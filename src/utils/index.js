// Function that gives the local time in the required format.
export const getFormattedTime = (dt, timezone, country = "US") => {
  return new Date((dt + timezone) * 1000).toLocaleTimeString(`en-${country}`, {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });
};
