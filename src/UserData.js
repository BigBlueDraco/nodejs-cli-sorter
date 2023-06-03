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
