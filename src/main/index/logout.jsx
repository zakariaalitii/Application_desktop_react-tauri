import React,{Component, useEffect,useState} from 'react'

import Slider from 'rc-slider';
import './fist_page.css' 
import { event } from '@tauri-apps/api';
import { useHistory } from 'react-router-dom';

function Create_Database ( ){ 
    let history = useHistory();

      return(
        <body>
        <main>
            <h3>DateBase Credentials</h3>
            <section  class="container">
                
            </section>
        </main>
        <footer>
            <div className='form-message'></div>
            <button 
                class="footerbuttonAddnew" value="Envoyer" 
                onClick={() => {
                    history.push('/Layout')
                }}>Add New
            </button>
            <button 
                onClick={() => {
                history.push('/')
                }}>Cancel
            </button>
        </footer>
    </body>
    )
    
}
export default Create_Database