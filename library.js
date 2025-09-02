//Step 1: Create a Base Class
class LibraryItem {
  constructor(title, id) {
    this.title = title;
    this.id = id;
    this.isAvailable = true;
  }

  checkOut() {
    if (this.isAvailable) {
      this.isAvailable = false;
      console.log(`${this.title} (ID: ${this.id}) has been checked out.`);
    } else {
      console.log(`${this.title} is already checked out.`);
    }
  }

  returnItem() {
    if (!this.isAvailable) {
      this.isAvailable = true;
      console.log(`${this.title} (ID: ${this.id}) has been returned.`);
    } else {
      console.log(`${this.title} was not checked out.`);
    }
  }
}

//Step 2: Extend the Base Class
class Book extends LibraryItem {
  constructor(title, id, author, genre) {
    super(title, id); // Call parent constructor
    this.author = author;
    this.genre = genre;
  }

  displayInfo() {
    console.log(`Book: ${this.title}, Author: ${this.author}, Genre: ${this.genre}`);
  }
}

class DVD extends LibraryItem {
  constructor(title, id, director, duration) {
    super(title, id);
    this.director = director;
    this.duration = duration; // in minutes
  }

  displayInfo() {
    console.log(`DVD: ${this.title}, Director: ${this.director}, Duration: ${this.duration} mins`);
  }
}

class Magazine extends LibraryItem {
  constructor(title, id, issueNumber, publisher) {
    super(title, id);
    this.issueNumber = issueNumber;
    this.publisher = publisher;
  }

  displayInfo() {
    console.log(`Magazine: ${this.title}, Issue: ${this.issueNumber}, Publisher: ${this.publisher}`);
  }
}

//Step 3: Instantiate Objects
const book1 = new Book("The Great Gatsby", 101, "F. Scott Fitzgerald", "Novel");
const dvd1 = new DVD("Inception", 202, "Christopher Nolan", 148);
const magazine1 = new Magazine("National Geographic", 303, "Feb 2025", "NatGeo Society");

book1.displayInfo();
dvd1.displayInfo();
magazine1.displayInfo();

//Step 4: Test the Inheritance
book1.checkOut();
book1.checkOut(); // Trying to check out again
book1.returnItem();

dvd1.checkOut();
dvd1.returnItem();

magazine1.checkOut();
magazine1.returnItem();

