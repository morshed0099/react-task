import { useState } from 'react';


const Modal = ({ data, setPage, pages,page }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <table className="table table-striped ">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">id</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.map(da => <tr>
                                            <td>{da.country.name}</td>
                                            <td>{da.country.id}</td>
                                        </tr>)
                                    }
                                </tbody>
                            </table>
                        </div>
                        <nav aria-label="...">
                            <ul className="pagination pagination-lg">                               
                                {
                                    [...Array(pages).keys()].map(number => <button onClick={()=>setPage(number)}
                                        key={number}
                                        className={page ===number && 'btn btn-primary btn-sm'}
                                    >
                                        {number+1}
                                    </button>)
                                }
                            </ul>
                        </nav>
                        <div className="modal-footer">
                            <button type="button" style={{backgroundColor:"#46139f",color:"white"}} className="btn" data-bs-dismiss="modal">Close</button>                          
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Modal;