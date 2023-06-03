import { input, select } from "@inquirer/prompts";

export default async function inputData(userData) {
  const answers = await input({
    message: "What data you want sort?",
    default:
      "ptqPq2tCP7 iTg9DbddGl 7LIuqW5JTF qwRY7wVJ0h khejS2QQTs FYEjFZ1QPh F6X9sApAIS z2KIHZ0bqR v5a5mocAPZ CwiX564pwI 3 1 23 10",
  });
  userData.setData(answers.split(" "));
  console.log(userData.getAll());
}
