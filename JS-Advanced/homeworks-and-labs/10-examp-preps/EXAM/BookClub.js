class BookClub {
  constructor(library) {
    this.library = library;
    this.books = [];
    this.members = [];
  }
  addBook(title, author) {
    // validate inputs ?
    let currentBook = this.books.find(x => x.title == title);
    if (currentBook) {
      return `The book "${title}" by ${author} is already in ${this.library} library.`;
    }
    currentBook = {
      title: title,
      author: author,
    };

    this.books.push(currentBook);
    return `The book "${title}" by ${author} has been added to ${this.library} library.`;
  }
  addMember(memberName) {
    let currentMember = this.members.find(x => x.memberName == memberName);
    if (currentMember) {
      return `Member ${memberName} is already a part of the book club.`;
    } else {
      currentMember = {
        memberName: memberName,
      };
      this.members.push(currentMember);
      return `Member ${memberName} has been joined to the book club.`;
    }

  }


  assignBookToMember(memberName, bookTitle) {
    let currentMember = this.members.find(x => x.memberName == memberName);
    let currentBook = this.books.find(x => x.title == bookTitle);

    if (!currentMember) {
      throw new Error(`Member ${memberName} not found.`);
    }

    if (!currentBook) {
      throw new Error(`Book "${bookTitle}" not found.`);
    }

    this.books = this.books.filter(book => book.title !== currentBook.title);
    return `Member ${memberName} has been assigned the book "${currentBook.title}" by ${currentBook.author}.`;

  }


  generateReadingReport() {

    if (this.members.length == 0) {
      return "No members in the book club.";
    }

    if (this.books.length == 0) {
      return "No available books in the library.";
    }

    let result = [
      `Available Books in ${this.library} library:`,
    ];

    this.books.forEach(
      book => result.push(`"${book.title}" by ${book.author}`)
    );

    return result.join('\n');


  }
}


const myBookClub = new BookClub('The Bookaholics');
console.log(myBookClub.addBook("To Kill a Mockingbird", "Harper Lee"));
console.log(myBookClub.addBook("1984", "George Orwell"));
console.log(myBookClub.addMember("Alice"));
console.log(myBookClub.addMember("Peter"));
console.log(myBookClub.assignBookToMember("Peter", "1984"));
console.log(myBookClub.assignBookToMember("Alice", "To Kill a Mockingbird"));
console.log(myBookClub.generateReadingReport());
