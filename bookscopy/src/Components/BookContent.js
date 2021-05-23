import React, { useState } from 'react'
import {useHistory} from 'react-router-dom';
import {FaEdit} from 'react-icons/fa'
import {GrAdd} from 'react-icons/all'

function BookContent({books}) {
    let history = useHistory()
    const [show,setShow] = useState(false)
    const handler = (e,book)=>
    {
        console.log();
        if(e.target.textContent === 'Add New Page ' )
            setShow(true);
        else
            setShow(false);
        console.log("Books are "+book);
        history.push({
            pathname: '/edit',
            book: book,
            show: show
          }); 
        
    }
    return (
        <div>
            {
                books.map((book)=>
                {
                    return(
                        <div className="container">
                            <div > 
                             <h1>{book.title} <button type='button' style={{marginLeft:'40px'}} onClick={(e)=>handler(e,book)}><FaEdit /></button></h1>
                             <hr />
                             <p>{book.content}</p>
                             <button onClick={(e)=>handler(e,book)} className="btn" style={{marginTop:'500px',left:'800px'}}>Add New Page <GrAdd /></button>
                        </div>
                        
                        </div>

                    )
                })
            }
        </div>
    )
}

export default BookContent
