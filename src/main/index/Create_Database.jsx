import React,{Component, useEffect,useState} from 'react'

import Slider from 'rc-slider';
import './fist_page.css' 
import { event } from '@tauri-apps/api';
import { useHistory } from 'react-router-dom';




function Create_Database ( ){ 
   
    let history = useHistory();
    const [password, setPassword] = useState("");
    const [Confirm_password, setConfirm_password] = useState("");
    const [key_File, setKey_File] = useState("");
    

    const verifPassegal = () => {   
        if(password===Confirm_password)
             return true;
        else
            return false;           
        }
    
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
    const verifConfirm_password = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML="please fill in  Confirm password.";
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(253,87,87)';

        document.getElementById('Confirm_password').classList.add('error');
        document.getElementById('Confirm_password').classList.remove('succesPassword');
        

        setTimeout (() => {
            formMess.style.opacity = '0';
            document.getElementById('Confirm_password').classList.add('succesPassword');
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
    const verifpasswordgal = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML="please fill in  Confirm password identical password.";
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(253,87,87)';

        document.getElementById('password').classList.add('error');
        document.getElementById('password').classList.remove('succesPassword');
        document.getElementById('Confirm_password').classList.add('error');
        document.getElementById('Confirm_password').classList.remove('succesPassword');
        

        setTimeout (() => {
            formMess.style.opacity = '0';
            document.getElementById('password').classList.add('succesPassword');
            document.getElementById('Confirm_password').classList.add('succesPassword');
        },5000);
    }
    const verif = () => {
        let formMess = document.querySelector('.form-message');

        formMess.innerHTML="Please complete the requirements correctly.";
        formMess.style.opacity = '1';
        formMess.style.background = 'rgb(253,87,87)';

        document.getElementById('password').classList.add('error');
        document.getElementById('password').classList.remove('succesPassword');
        document.getElementById('Confirm_password').classList.add('error');
        document.getElementById('Confirm_password').classList.remove('succesPassword');
        document.getElementById('key_File').classList.add('error');
        document.getElementById('key_File').classList.remove('succesPassword');
        

        setTimeout (() => {
            formMess.style.opacity = '0';
            document.getElementById('password').classList.add('succesPassword');
            document.getElementById('Confirm_password').classList.add('succesPassword');
            document.getElementById('key_File').classList.add('succesPassword');
        },5000);
    }
    const handleSumbit = (e) => {
        e.preventDefault();

        if(password && Confirm_password && verifPassegal() && key_File){
            history.push('/')
        }
        else if(!password && !Confirm_password  && !key_File)
        verif();
        else if(!password)
            verifpassword()
        else if(!Confirm_password)
            verifConfirm_password()
        else if(!verifPassegal())
            verifpasswordgal()
        else if(!key_File)
            verifkey_File()
    };
    

    const [Time, setTime] = useState("50");
    function handleChange(event) {
        setTime(event.target.value);
      }
    
      return(
        <body>
        <main>
            <h3>DateBase Credentials</h3>
            <section  class="container">
                <p>A set Credentials known only to you that protects your database</p>
                <h3>Password</h3>
                <form>
                    <div>
                        <p id="password">Enter password:</p>
                        <input type="password" id="password" name="password"  onChange={(e) => setPassword(e.target.value)} value={password}  placeholder= "Enter password" />
                    </div>
                    <div>
                        <p id="Confirm_password">Confirm password:</p>
                        <input type="password" id="Confirm_password" name="Confirm_password" onChange={(e) => setConfirm_password(e.target.value)}  value={Confirm_password} placeholder= "Confirm password" />
                    </div>
                </form>
                <div class="id01"> 
                    <a href="#id01" ><button  class="adisplaynone">Add addotopnal protection...</button></a>
                </div>
               
                <nav  id="id01" class="msg">
                    <h3>key File</h3>
                    <form>
                        <div>
                            <p id="key_File">key File:</p>
                            <label for="file-upload" class="custom-file-upload" >Upload</label>
                            <input class="inputnav1"  type="file" id="key_File" name="key_File" onChange={(e) => setKey_File(e.target.value)}  value={key_File} id="file-upload" />
                        </div>
                    </form>
                    <h3 class="h3msg">Decryption</h3>
                    <form>
                        <div class="slidecontainer">
                            <p >Decryption Time: {Time} s</p>
                            <input type="range" min="0" max="100" name="Time" onChange={handleChange} value={Time}  class="slider" id="myRange"  />
                        </div>
                    </form>
                </nav>
            </section>
        </main>
        <footer>
            <div className='form-message'></div>
            <a href="/"> <button class="footerbuttonAddnew" value="Envoyer" onClick={handleSumbit}>Add New</button></a>
            <a href="/"> <button>Go Back</button></a>
        </footer>
    </body>
    )
    
}
export default Create_Database