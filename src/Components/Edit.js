import React, { useState } from 'react'
import {useLocation} from 'react-router-dom'; 
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import parse from 'html-react-parser';
import {useGlobalContext} from '../Context';
import {Button} from 'react-bootstrap';
//import {useHistory} from 'react-router-dom';


const Edit = ()=> {
    const {getLocalStorage} = useGlobalContext();
    const location = useLocation();

    let locatStorageContent  = getLocalStorage();    



    let tempBookstorage = location.book ;
    let show = location.show;
    if(show)
        tempBookstorage.content = '';
    
   //let history = useHistory();
     
    const [text,setText] = useState(tempBookstorage.content);
    
    const update = ()=>
    {
        locatStorageContent.map((stories)=>
        {
            if(stories.id === tempBookstorage.id)
            {
                try
                {
                    stories.content = (parse(text).props.children)
                }
                catch
                {
                    stories.content = parse(text)
                }
            }
        })
        localStorage.setItem('story',JSON.stringify(locatStorageContent))
    }

    const redirect = ()=>
    {
        //history.push('/')
    }

    return (
        <div>
            <div className="editor">
                <CKEditor
                editor={ClassicEditor}
                data={text}
                onChange={(evenr,editor)=>{
                    const data = editor.getData()
                    setText(data)
                }}
                />
            </div>
            <div style={{float:'right',marginTop:'15px'}}>
            <Button onClick={update}>Save Page</Button>
            <Button onClick={()=>redirect}>Go Back</Button>
            {/* <NavLink to="/">
        Go Back
      </NavLink> */}
            </div>


            <h2>{parse(text)}</h2>
        </div>
    )
}

export default Edit
