import { Button } from 'bootstrap';
import React, { useEffect, useState } from 'react';
import Modal from './Modal';


const Problem2 = () => {

    const [page, setPage] = useState(0)
    const [data, setData] = useState([])
    const [pages, setPages] = useState()
    const [modal,setModal]=useState('')
    const [cournty,setCountry]=useState('United States')

  
    const url = `https://contact.mediusware.com/api/contacts/?page=${page === 0 ? 1 : page}`

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setData(data.results)             
                setPages(data.results.length);               
            })
    }, [])

    useEffect(() => {
        fetch(`https://contact.mediusware.com/api/country-contacts/${cournty}/`)
            .then(res => res.json())
            .then(data => {
                setCountry(data.results);
            })
    }, [])
  
    const handelApiWithCounty = () => { }

    return (

        <div className="container">
            <div className="row justify-content-center mt-5">
                <h4 className='text-center text-uppercase mb-5'>Problem-2</h4>

                <div className="d-flex justify-content-center gap-3">
                    <button onClick={()=>setModal('modalA')}  style={{ backgroundColor: "#46139f", color: "white" }} type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >All Contacts</button>
                    <button onClick={()=>setModal('modalB')} style={{ backgroundColor: "#ff7f50", color: "white" }} type="button" className="btn" data-bs-toggle="modal" data-bs-target="#exampleModal" >US Contacts</button>
                </div>
                {
                    modal ==='modalA' &&
                    <Modal
                    data={data}
                    key={data.id}
                    setPage={setPage}
                    pages={pages}
                    page={page}
                />
                }
                {
                    modal ==='modalB' &&
                }
           
            </div>
        </div>
    );
};

export default Problem2;