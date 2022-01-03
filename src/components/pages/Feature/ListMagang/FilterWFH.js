import React, { useEffect, useState } from "react";
import axios from "axios";
import CardItem2 from './CardItemMenu';
import './List.css';
import ButtonFi from "../../../filter/ButtonFilter";
import SearchBar from '../../../Search/SearchBar';
import { useHistory, Link } from 'react-router-dom';

export default function FilterWFH() {

  const [data, setData] = useState([]);
  
  useEffect(() => {
    axios
        .get('https://api.gunma.my.id/api/v1/internship/isWfh/1')
        .then((res) => {
            console.log(res.data);
            setData(res.data);
            
        })
        .catch((err) => {
            console.log(err);
            console.log('error');
        }); 
}, []);

      return (
        <section className="section-card2">
        <div align='center' >
        <SearchBar>
        <input type="Search" 
            placeholder="Search Internship" 
        />
        </SearchBar>
        <button>
         Search
        </button>  
        </div>
        <ButtonFi/>
        <div className='card2'>
        {Object.keys(data).map((item, i) => (

    <div className='card2__container'>

        <div className='card2__wrapper'>
        <ul className='card2__items'>

        <Link to= {`/DetailMagang/${data[item].id}`} style={{ textDecoration: 'none' }}>
            <CardItem2
              src={data[item].imageUrl}
              label={data[item].programName} 
              text= {data[item].description}
              //text1 = {data.requirement}
              //descripsi = {data.requirement}
            />
           
            </Link>
          </ul>
          </div>
          </div>
          
 ))}
          </div>
          </section>

          
      );
    }
  