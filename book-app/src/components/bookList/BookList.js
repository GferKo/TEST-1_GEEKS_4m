import React from 'react';
import classes from "./BookList.module.css";

const BookList = ({ books, onDelete }) => {
    return (
        <ul>
            {books.map((book, index) => (
                <li key={index}>
                    {book}
                    <button className={`${classes.delBtn}`} onClick={() => onDelete(index)}>Удалить</button>
                </li>
            ))}
        </ul>
    );
};

export default BookList;
