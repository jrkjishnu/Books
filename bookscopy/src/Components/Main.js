import React, { useEffect, useState } from 'react'
import BookContent from './BookContent';
import {Button} from 'react-bootstrap'
import {useGlobalContext} from '../Context';
import "./App.css";


function Main() {

    const {getLocalStorage} = useGlobalContext();

    const [books,setBooks] = useState([]);
    const [data,setData] = useState(getLocalStorage());

    useEffect(()=>
    {

    },[data])

    const handler = (book)=>
    {
        setBooks([book])
    }
    return (
        <div className='containe'>
            {
              data.map((book,key)=>
              {
                  return (
                      <Button className="bloc-tabs" onClick={()=>handler(book)}>{book.title}</Button>
                  )
              })  
            }
            <BookContent books={books}/>
        </div>
    )
}

export default Main
