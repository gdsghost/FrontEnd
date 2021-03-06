import React from 'react';
import "./style.css";
import ExploreOutlinedIcon from '@material-ui/icons/ExploreOutlined';
import DriveEtaOutlinedIcon from '@material-ui/icons/DriveEtaOutlined';
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import EventOutlinedIcon from '@material-ui/icons/EventOutlined';
import HotelOutlinedIcon from '@material-ui/icons/HotelOutlined';
import Radium from 'radium';
import {Link} from 'react-router-dom'


const home=()=>{
        return(
        <div >
            <br/>
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>



                    <div className="col-lg-2">
                        <Link to="/transport" className="link textdec">
                            <div className="card  text-center rounded">
                                <div className="card-body ct ">
                                    <div >
                                        <DriveEtaOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Find a Vehicle</h5>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-lg-2">
                        <Link to="/" className="link textdec">
                            <div className="card  text-center">
                                <div className="card-body ct">
                                    <div>
                                        <PermIdentityOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Find a Tour guide</h5>
                                </div>

                            </div>
                        </Link>

                    </div>

                    <div className="col-lg-2">
                        <Link  to="/"className="link textdec">
                            <div className="card  text-center">
                                <div className="card-body ct">
                                    <div>
                                        <EventOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Things to do Events</h5>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-lg-2">
                        <Link  to="/" className="link textdec">
                            <div className="card  text-center">
                                <div className="card-body ct">
                                    <div>
                                        <HotelOutlinedIcon/>
                                    </div>
                                    <br/>
                                    <h5 className="card-title ct" style={{fontFamily:"verdana"}}>Hotels & Resturants</h5>
                                </div>
                            </div>
                        </Link>

                    </div>

                    <div className="col-md-2"></div>
                </div>
            </div>
            <br/>
            <br/>
            <div className="container plan " >
                <div className="row" style={{padding:"100px"}}>
                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Check In</span>
                            </div>
                            <input type="date" aria-label="First name" className="form-control"/>

                        </div>
                    </div>
                    <div className="col-lg-5">
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">Check Out</span>
                                </div>
                                <input type="date" aria-label="First name" className="form-control"/>

                            </div>
                        </div>
                    <div className="col-lg-1"></div>


                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">No. Of Travellers</span>
                            </div>
                            <input type="number" min="0" className="form-control" aria-label="Username"
                                   aria-describedby="basic-addon1"/>
                        </div>
                    </div>
                    <div className="col-lg-5">
                        <select className="form-control form-control-sm">
                            <option disabled selected>Select your favour</option>
                            <option>Beach</option>
                            <option>Safari</option>
                            <option>History</option>
                            <option>Upcountry</option>

                        </select>
                        <br/>
                    </div>
                    <div className="col-lg-1"></div>


                    <div className="col-lg-1"></div>
                    <div className="col-lg-5">
                        <div className="input-group mb-3">
                            <div className="input-group-prepend">
                                <span className="input-group-text" id="basic-addon1">Budget</span>
                            </div>
                            <input type="number" className="form-control" aria-label="Username"
                                   aria-describedby="basic-addon1" min="0.01" step="0.01" placeholder="0.00"/>
                        </div>
                    </div>
                    <div className="col-lg-5"></div>
                    <div className="col-lg-1"></div>

                    <div className="col-lg-2"></div>
                    <div className="col-lg-4"></div>
                    <div className="col-lg-4" align="end">
                        <button type="button" className="btn btn-warning rounded">Give me a plan</button>
                    </div>
                    <div className="col-md-2" align="end">

                    </div>


                    </div>
            </div>

        </div>
    )
};

export default Radium(home);