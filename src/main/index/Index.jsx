import React,{useState}  from 'react'

import { useHistory } from 'react-router-dom';

import './fist_page.css' 

function Second_Page(){

    const [file_upload, setfile_upload] = useState("");
    let history = useHistory();
    
    return(
        <body>
        <header>
            <h1>NYMUT</h1>
        </header>
        <aside>
            <p>Open/Create new encrypted database for your client sessions</p>
            <button class="button"  onClick={() => {  history.push('/Create_Database')}}>Create database</button>
            <label for="file_upload" class="custom-file-upload1" >Open existing database</label>
            <input class="inputnavindex" 
                value="Envoyer" 
                type="file" onInput={ () => {  history.push('/Open_Database')}} 
                id="file_upload"    
                onChange={(e) => setfile_upload(e.target.value)} value={file_upload}
            />
        </aside>
    </body>
    );
}
export default Second_Page
/* <label for="file-upload" class="custom-file-upload1"><a href="/Open">Open database</a></label>
            <input type="file" id="file-upload"/> */