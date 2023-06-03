import { select } from "@inquirer/prompts";
export default async function sortOptions(userData) {
  const choices = [
    {
      name: "Sort words alphabetically",
      value: "0",
    },

    {
      name: "Show numbers from lesser to greater",
      value: "1",
    },

    {
      name: "Show numbers from bigger to smaller",
      value: "2",
    },

    {
      name: "Display words in ascending order by number of letters in the word",
      value: "3",
    },

    {
      name: "Show only unique words",
      value: "4",
    },

    {
      name: "Display only unique values from the set of words and numbers entered by the user",
      value: "5",
    },

    {
      name: "exit",
      value: "exit",
    },
  ];

  const answers = await select({
    message: "Choose a sorting option\n",
    choices: choices,
  });
  switch (answers) {
    case choices[0].value: {
      console.log(userData.getSortedWords());
      break;
    }
    case choices[1].value: {
      console.log(userData.getSortedNumbers());
      break;
    }
    case choices[2].value: {
      console.log([...userData.getSortedNumbers()].reverse());
      break;
    }
    case choices[3].value: {
      console.log(userData.getSortedByLength());
      break;
    }
    case choices[4].value: {
      console.log(userData.getUniqeWords());

      // Цей ваш штучний інтелект таке запропонував не знаю що краще
      // const array = ["A", "aaa", "aaa", "123", "123", "4"];

      // // Підрахунок кількості входжень кожного елемента
      // const count = {};
      // array.forEach((item) => {
      //   count[item] = (count[item] || 0) + 1;
      // });

      // // Сортування масиву за кількістю входжень, а потім за значенням
      // const sortedArray = array.sort((a, b) => {
      //   if (count[a] !== count[b]) {
      //     return count[a] - count[b];
      //   } else {
      //     return a.localeCompare(b);
      //   }
      // });

      // // Вибір лише унікальних елементів
      // const uniqueElements = sortedArray.filter((item, index) => {
      //   return index === sortedArray.indexOf(item);
      // });

      // console.log(uniqueElements);

      break;
    }
    case choices[5].value: {
      console.log(userData.getUnique());
      break;
    }
    case choices[6].value: {
      process.exit(1);
    }
  }
  sortOptions(userData);
}
