//BOOK LENDIND APP BY :
//NAME: CHRISTIAN EZE C
//TRACK: FRONTEND

/*CREATING AN IMMEDIATELY INVOKED FUNCTION EXPRESSION 
 THAT HOUSES OUR BOOK LENTING OBJECT
 */

const bookShop = (() => {
  let booksForRent = [
    "maths",
    "physics",
    "biology",
    "chemistry",
    "geology",
    "commerce",
  ];
  let rentedBooks = [];

  //  FUNCTION FOR RENTING A BOOK

  function rentABook(bookId) {
    const currentAvailableBook = booksForRent.filter(
      (_, index) => index != bookId
    );
    const rentedBook = booksForRent.filter((_, index) => index == bookId);
    if (rentedBook[0] != undefined) {
      //booksForRent=currentAvailableBook
      // rentedBooks.push(rentedBook[0]);
      return `<<< YOU HAVE  SUCCEEDED IN BORROWING ${rentedBook[0]} >>>`;
    } else {
      return ` \n ++++SORRY YOU ENTERED A WRONG BOOK INDEX +++`;
    }
  }

  //  FUNCTION FOR RETURNING RENTED BOOK BOOK

  function returnABook(bookId) {
    let bookToReturn = rentedBooks[bookId];
    const booksYetToBeReturned = rentedBooks.filter(
      (_, index) => index != bookId
    );
    if (rentedBooks.includes(bookToReturn)) {
      rentedBooks = booksYetToBeReturned;
      booksForRent.push(bookToReturn);
      return `\n <<< YOU HAVE  SUCCESSFU RETURNED '${bookToReturn}' TO OUR STORE>>>`;
    } else {
      return ` \n ++++SORRY YOU HAVEN'T RENTED ANY BOOK YET +++`;
    }
  }
  // RETURNING THE ARRAYS FROM OBJECT
  function booksInstore() {
    return booksForRent;
  }
  function bookRented() {
    return rentedBooks;
  }
  //RETURNING THE BOOKS OBJECT OBJECTS
  return {
    booksAvailableForRent: booksInstore,
    rentBooks: rentABook,
    returnedBook: returnABook,
    booksRented: bookRented,
  };
})();
console.log(
  "<<<<-------------------------------------------->>>>\n         you Are Welcome chris' book Library \n<<<<------------------------------------------>>>>\n"
);
for (let i = 0; i < 3; ) {
  let bookAchieve = "";
  let taskIndex = prompt(
    "\n what Task would you like to perform? \n0: view books in store \n1 : rent a book \n2 : return rented book \n3 : see rented books \n4:exit\n enter an index from above options"
  );

  //SEEE AVAILABLE BOOKS

  if (taskIndex == 0) {
    bookShop.booksAvailableForRent().forEach((books, bookId) => {
      return (bookAchieve += "\n" + bookId + ":" + books);
    });
    console.log(
      `\n the Books in our store for rent are:\n-------------------\n ${bookAchieve}`
    );
  }

  // RENT A BOOK

  if (taskIndex == 1) {
    bookShop.booksAvailableForRent().forEach((books, bookId) => {
      return (bookAchieve += bookId + ": " + books + " \n");
    });
    console.log(
      bookShop.rentBooks(
        prompt(`\n choose the book you want to rent:\n ${bookAchieve} \n`)
      )
    );
  }

  //RETURN  THE BOOK U BORROWED

  if (taskIndex == 2) {
    if (bookShop.booksRented().length <= 0) {
      console.log("\n ***You Have To Rent a Book FIRST***");
    } else {
      bookShop.booksRented().forEach((books, bookId) => {
        return (bookAchieve += bookId + ": " + books + "\n ");
      });
      console.log(
        bookShop.returnedBook(
          prompt(`\n enter the index of the book to return \n ${bookAchieve}\n`)
        )
      );
      //console.log('\n---------------------------------------------- \n You have successfully rented ' +books+'\n-------------------------------------------------- ');
    }
  }
  //SEE RENTED BOOKS

  if (taskIndex == 3) {
    if (bookShop.booksRented().length <= 0) {
      console.log("\n ***no book has been rented yet***");
    } else {
      bookShop.booksRented().forEach((books, bookId) => {
        return (bookAchieve += bookId + ": " + books + "\n ");
      });
      console.log("\n books you borrowed are:\n " + bookAchieve + "\n");
    }
  }
  // LEAVE THE BOOKSHOP
  if (taskIndex == 4) {
    i = 3;
  }
  if (taskIndex < 0 || taskIndex > 4 || isNaN(taskIndex)) {
    console.log(
      "\n <<<<<<<<<<< please enter a valid number from the task we have >>>>>>>>>>>>"
    );
  }
}
