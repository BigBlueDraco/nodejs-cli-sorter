export default class UserData {
  constructor(data) {
    this.data = data || [];
  }

  getAll() {
    return this.data.filter((item) => item !== "");
  }
  getNubers() {
    return this.data
      .filter((item) => item !== "" && !isNaN(item))
      .map((item) => +item);
  }
  getWords() {
    return this.data.filter((item) => item !== "" && isNaN(item));
  }

  setData(data) {
    this.data = data;
  }

  getSortedWords() {
    const array = this.getWords();
    array.sort();
    return array || [];
  }
  getSortedNumbers() {
    const array = this.getNubers();
    array.sort((a, b) => a - b);

    return array || [];
  }

  getSortedByLength() {
    const array = this.getAll();
    array.sort((a, b) => a?.length - b?.length);
    return array || [];
  }
  getUniqeWords() {
    const array = this.getWords();

    const uniqueElements = [];
    array.forEach((item) => {
      const indexOf = uniqueElements.indexOf(item);
      if (indexOf !== -1) {
        uniqueElements.splice(indexOf, 1);
        return;
      }
      uniqueElements.push(item);
    });
    return uniqueElements || [];

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
  }

  getUnique() {
    const array = this.getAll();

    const uniqueElements = [];

    array.forEach((item) => {
      const indexOf = uniqueElements.indexOf(item);
      if (indexOf !== -1) {
        uniqueElements.splice(indexOf, 1);
        return;
      }
      uniqueElements.push(item);
    });
    return uniqueElements || [];
  }
}
