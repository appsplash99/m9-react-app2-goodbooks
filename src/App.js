// import useState fo rendering js in react view
import React, { useState } from "react";
import "./styles.css";

// Books database
var booksDataBase = {
  biography: [
    {
      name: "Man's Search for Meaning by Viktor E. Frankl",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1535419394l/4069._SY475_.jpg"
    },
    {
      name: "Educated by Tara Westover",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1506026635l/35133922.jpg"
    },
    {
      name: "Shoe Dog: A Memoir by the Creator of NIKE by Phil Knight",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1457284880l/27220736.jpg"
    },
    {
      name: "The Diary of a Young Girl by Anne Frank",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565l/48855.jpg"
    }
  ],
  graphicNovel: [
    {
      name: "Watchmen by Alan Moore, Dave Gibbons, John Higgins",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1442239711l/472331.jpg"
    },
    {
      name: "The Complete Maus by Art Spiegelman",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327354180l/15195.jpg"
    },
    {
      name: "Batman: The Dark Knight Returns by Frank Miller",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1327892039l/59960.jpg"
    },
    {
      name: "V for Vendetta by Alan Moore",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1343668985l/5805.jpg"
    },
    {}
  ],
  scienceFiction: [
    {
      name: "Dune by Frank Herbert",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1555447414l/44767458.jpg"
    },
    {
      name: "1984 by George Orwell",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1532714506l/40961427._SX318_.jpg"
    },
    {
      name: "Fahrenheit 451 by Ray Bradbury",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1351643740l/4381.jpg"
    },
    {
      name: "Ready Player One by Earnest Cline",
      image:
        "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1500930947l/9969571._SY475_.jpg"
    }
  ]
};

// list of book genres
const genres = Object.keys(booksDataBase);

export default function App() {
  // declaring cariables
  const [bookGenre, setbookGenre] = useState("");
  const [bookList, setbookList] = useState([]);

  // onclick function
  function genreClickHandler(bookGenre) {
    setbookGenre(bookGenre);
    setbookList(booksDataBase[bookGenre]);
  }

  return (
    <div className="App">
      <h1>Good Books</h1>
      <h2>Click on a genre to select books.</h2>

      {/* genre buttons */}
      <div></div>

      {/* Rendering books by using map */}
      {/* <div>
        <img src={booksDataBase["scienceFiction"][0]["image"]} />
        <img src={booksDataBase["scienceFiction"][1]["image"]} />
        <img src={booksDataBase["scienceFiction"][2]["image"]} />
        <img src={booksDataBase["scienceFiction"][3]["image"]} />
      </div> */}

      <div>
        <div className="output-box">
          {/* using map on list */}
          {genres.map((item) => {
            // returning dynamic items with arrow functions
            return (
              <span
                className="genre-button"
                onClick={() => genreClickHandler(item)}
                key={item}
              >
                {item}
              </span>
            );
          })}
          {bookList.map((bookList_item, index) => {
            return (
              <div key={index} className="each-book">
                <div>
                  <img
                    className="book-image"
                    src={bookList_item.image}
                    alt="book"
                  />
                  <h2 className="book-name">{bookList_item.name}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
