import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import BookContent from './BookContent';
import BookList from './BookList';
import {Button} from 'react-bootstrap'
import {useGlobalContext} from '../Context';
// const getLocalStorage = ()=>
// {
//     let story = localStorage.getItem('story')
//     if(story)
//     {
//         return JSON.parse(localStorage.getItem('story'))
//     }
//     else
//     {
//         return []
//     }
// }

function Main() {

    const {getLocalStorage} = useGlobalContext();
    let a = getLocalStorage();
    console.log("data vannath"+a);
    const [books,setBooks] = useState([]);
    const [datas,setData] = useState(getLocalStorage());

    useEffect(()=>
    {

    },[datas])

    const handler = (book)=>
    {
        setBooks([book])
        console.log(books);
    }
    return (
        <div className='containe'>
            {
              datas.map((book,key)=>
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
