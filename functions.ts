export function toAbacus(num:number):(string | string[]) {
  // We Stringify the number
  let numStr = String(num);

  // Error handling
  if (numStr.includes("-")) return "Negative values are not allowed";
  if (numStr.length > 4) return "Number Too Long For This Abacus";

  // We initialize the array to fill it with the necessary data
  let arr: string[] = [];

  // We add the values to the abacus array
  for (let i = 0; i < numStr.length; i++) {
    // Get each number in the stringified number
    let value = +numStr[i];

    // Convert the value to an abacus readable value
    arr[i] = String(value >= 5 ? value + 5 : value).padStart(2, "0");
  }

  // We add zeroes to fill the array
  const finalArray = Array.from({ length: 4 - numStr.length })
                          .fill("00")
                          .concat(arr);

  // Return unknown[] as string[]
  return finalArray as string[];
}