import "./BookList.css"

const BookList = () => {
    let books = [
        {
            title: "Vikings Season 1",
            author: "Haris Rana Viking",
            pages: 69
        },
        {
            title: "Vikings Season 2",
            author: "Haris Rana Viking",
            pages: 169
        },
        {
            title: "Vikings Season 3",
            author: "Haris Rana Viking",
            pages: 269
        }
    ]
    return(

        books.map((items) => {
            return(
                <div className="book">
                    <h1>{items.title}</h1>
                    <h3>{items.author}</h3>
                    <h5>{items.pages}</h5>
                </div>
            )
        })
    )
}

export default BookList;