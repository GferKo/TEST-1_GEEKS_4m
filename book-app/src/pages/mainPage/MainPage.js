import React, { useState } from 'react';
import Input from "../../components/input/Input";
import BookList from "../../components/bookList/BookList";
import Button from "../../components/button/Button";
import classes from "./MainPage.module.css";

const MainPage = () => {
    const [books, setBooks] = useState([]);
    const [newBook, setNewBook] = useState('');

    const addBook = () => {
        if (newBook.trim() !== '') {
            setBooks([...books, newBook]);
            setNewBook('');
        }
    };

    const deleteBook = (index) => {
        setBooks(books.filter((_, i) => i !== index));
    };

    return (
        <div>
            <h1>Добавить книгу</h1>
            <div className='SearchBox'>
                <span>Название:</span>
                <Input
                    value={newBook}
                    onChange={(e) => setNewBook(e.target.value)}
                    placeholder="Введите название"/>
                <Button label="Добавить" onClick={addBook}/>
                <div className='ResutBox'>
                    <h3>Название</h3>
                    <BookList books={books} onDelete={deleteBook}/>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
