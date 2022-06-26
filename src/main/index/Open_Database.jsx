import React,{useState} from 'react'

import './fist_page.css' 
import { useHistory } from 'react-router-dom';

const Open_Database = () =>{

    let history = useHistory();

    const [password, setPassword] = useState("");
    const [key_File, setKey_File] = useState("");

    const verifpassword = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML="please fill in password.";
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(253,87,87)';

        document.getElementById('password').classList.add('error');
        document.getElementById('password').classList.remove('succesPassword');
        

        setTimeout (() => {
            formMess.style.opacity = '0';
            document.getElementById('password').classList.add('succesPassword');
        },5000);
    }

    const verifkey_File = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML="please fill in fkey File.";
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(253,87,87)';

        document.getElementById('key_File').classList.add('error');
        document.getElementById('key_File').classList.remove('succesPassword');
        

        setTimeout (() => {
            formMess.style.opacity = '0';
            document.getElementById('key_File').classList.add('succesPassword');
        },5000);
    }
    
    const failMessage = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML="Merci de remplir corrrectement les requis.";
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(253,87,87)';

        document.getElementById('password').classList.add('error');
        document.getElementById('key_File').classList.add('error');
        document.getElementById('password').classList.remove('succesPassword');
        document.getElementById('key_File').classList.remove('succesPassword');

        setTimeout (() => {
            formMess.style.opacity = '0';
            document.getElementById('password').classList.add('succesPassword');
            document.getElementById('key_File').classList.add('succesPassword');
        },5000);
    }

    const verif = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML="Please complete the requirements correctly.";
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(253,87,87)';

        document.getElementById('password').classList.add('error');
        document.getElementById('password').classList.remove('succesPassword');
        document.getElementById('key_File').classList.add('error');
        document.getElementById('key_File').classList.remove('succesPassword');
        

        setTimeout (() => {
            formMess.style.opacity = '0';
            document.getElementById('password').classList.add('succesPassword');
            document.getElementById('key_File').classList.add('succesPassword');
        },5000);
    }

    const handleSumbit = (e) => {
        e.preventDefault();

        if(password){
            history.push('/Layout')
        }
        else if(!password )
        verif();
        else if(!password)
            verifpassword()
        else if(!key_File)
            verifkey_File()
    };
    
    return (
        <body>
            <main>
                <h3>open existing database</h3>
                <section  class="container">
                    <p>A set Credentials known only to you that protects your database</p>
                    <h3>Password</h3>
                    <form>
                        <div>
                            <p   id="password">Enter password:</p>
                            <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} value={password} placeholder= "Enter password" />
                        </div>
                        <div>
                            <p id="key_File">key File:</p>
                            <label for="file-upload" class="custom-file-upload" >Upload</label>
                            <input class="inputnav1"  type="file" id="key_File" name="key_File" onChange={(e) => setKey_File(e.target.value)}  value={key_File} id="file-upload" />
                        </div>
                    </form>
                </section>
            </main>
            <footer>
               <div className='form-message'></div>
                <button class="footerbuttonAddnew" value="Envoyer" onClick={handleSumbit}>Ok</button>
                <button onClick={() => {
                history.push('/')
             }}>Cancel</button>
            </footer>
        </body>
    )
}
export default Open_Database
