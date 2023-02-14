let height = parseInt(prompt("Enter your height in centimeters: "));

if (height < 150) {
  console.log("You are a Dwarf.");
} else if (height >= 150 && height < 165) {
  console.log("You are an average person.");
} else if (height >= 165 && height < 195) {
  console.log("You are the tallest person.");
} else if (height >= 195) {
  console.log("You are abnormal.");
} else {
  console.log("Invalid input.");
}