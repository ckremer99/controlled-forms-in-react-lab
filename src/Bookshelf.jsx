import { useState } from "react";

const Bookshelf = () => {

    const [books, setBooks] = useState([
        { title: 'Fourth Wing', author: 'Rebecca Yarros' },
        { title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis' },
        ]);
        
    const [newBook, setNewBook] = useState({title: '', author: ''})

    const handleInputChange = (event) => {
        setNewBook({...newBook, [event.target.name] : event.target.value})
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        const newBookArray = [...books, newBook]
        setBooks(newBookArray)
        setNewBook({title: '', author: ''})
    }

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleSubmit}> 
            <label for="title">Title: </label>
            <input
                id="title"
                name="title"
                value={newBook.title}
                onChange={handleInputChange}
            />
            <label for="author">Author: </label>
            <input 
                id="author"
                name="author"
                value={newBook.author}
                onChange={handleInputChange}
            />
            <button type="submit">Submit</button>
        </form>
      </div>
      <div className="bookCardsDiv">{books.map((book, idx) => {
        return (
            <div class='bookCard' key={idx}>
                <h4>Title: {book.title}</h4>
                <h4>Author: {book.author}</h4>
            </div>
        )
      })}</div>
    </div>
  );
};

export default Bookshelf