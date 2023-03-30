import { Modal, Button} from 'react-bootstrap';
import React, {useState} from 'react';
const API_IMG="https://image.tmdb.org/t/p/w500/";

const MovieBox =(data)=>{
    const [show, setShow]=useState(false);

    const handleShow=()=>setShow(true);
    const handleClose=()=>setShow(false);
    
    return(
        <div className="card text-center d-flex justify-content-center bg-transparent mb-3">
            <div className="card-body">
                <img className="card-img-top" src={API_IMG+data.poster_path} style={{width: 'auto', height: 400 + 'px'}}></img>
                <div className="card-body">
                    <button type="button" className="btn btn-dark" onClick={handleShow} >View More</button>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton><Modal.Title>{data.title}</Modal.Title></Modal.Header>
                        <Modal.Body>
                            <img className="card-img-top mb-4" style={{width:'14rem'}}src={API_IMG+data.poster_path} />
                            <h4>IMDb: {data.vote_average}</h4>
                            <h5>Release Date: {data.release_date}</h5>
                            <br></br>
                            <h6>Overview</h6>
                            <p>{data.overview}</p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default MovieBox;