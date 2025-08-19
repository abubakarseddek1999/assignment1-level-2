{

    type Book = {
        title: string;
        rating: number;
    }


    function filterByRating(items: Book[]): Book[] {
        const result = items.filter(item => item.rating >= 4.5)
        // console.log(result) // Output the filtered items
        return result

    }


    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
    ];

   const filteredBooks = filterByRating(books);
   console.log(filteredBooks);




}