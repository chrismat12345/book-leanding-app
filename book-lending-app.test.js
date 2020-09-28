const bookShop = require("./book-lending-app");

// CHECK THE FOR IS CONTAINED IN THE  RENTED BOOK ARRAY
test("checking for the content of the rented book array", () => {
  const wama = [...bookShop.booksRented()];
  expect(bookShop.booksRented()).toEqual(wama);
});

//CHECK THE BOOKS AVAILBLE IN THE BOOK STORE
test("checking for the available that can be rented", () => {
  expect(
    bookShop.booksAvailableForRent()
  ).toEqual([
    "maths",
    "physics",
    "biology",
    "chemistry",
    "geology",
    "commerce",
  ]);
});

// CHECKING IF U CAN RENT MATHS FROM AVAILABLE BOOK ARRAY
test("this should return that u have rented maths", () => {
  expect(bookShop.rentBooks(0)).toMatch(
    `<<< YOU HAVE  SUCCEEDED IN BORROWING maths >>>`
  );
});

// CHECKING IF U CAN RENT PHYSICS FROM AVAILABLE BOOK ARRAY
test("this should return that u have rented physics", () => {
  expect(bookShop.rentBooks(1)).toMatch(
    `<<< YOU HAVE  SUCCEEDED IN BORROWING physics >>>`
  );
});

// CHECKING IF U CAN RENT BIOLOGY FROM AVAILABLE BOOK ARRAY
test("this should return that u have rented biology", () => {
  expect(bookShop.rentBooks(2)).toMatch(
    `<<< YOU HAVE  SUCCEEDED IN BORROWING biology >>>`
  );
});

// CHECKING IF U CAN RENT GEOLOGY FROM AVAILABLE BOOK ARRAY
test("this should return that u have rented geology ", () => {
  expect(bookShop.rentBooks(4)).toMatch(
    `<<< YOU HAVE  SUCCEEDED IN BORROWING geology >>>`
  );
});

// TO CHECK WHAT HAPPEN WHEN YOU  ENTER AN INDEX NOT IN THE BOOK ARRAY

test("checking for the ouput when you enter  a  book index not available", () => {
  expect(bookShop.rentBooks(8)).toMatch(
    ` \n ++++SORRY YOU ENTERED A WRONG BOOK INDEX +++`
  );
});

//TO CHECK FOR WHAT HAPPENS WHEN YOU TRY TO RETURN A BOOK WEN NO BOOK HAS BEEN BORROWED
test("to check for what when your want to return a book while u have not borowed any", () => {
  expect(bookShop.returnedBook(8)).toMatch(
    ` \n ++++SORRY YOU HAVEN'T RENTED ANY BOOK YET +++`
  );
});
