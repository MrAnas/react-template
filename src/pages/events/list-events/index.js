import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export class EventsList extends Component {
    static propTypes = {

    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="d-flex flex-row-reverse">
                        <Link to="events/create" className="btn btn-primary  mt-1">+ إضافة فعالية</Link>
                    </div>
                    <div className="bg-light border border-dark mt-3 mb-4">
                        <div className="container">

                            <div className="form-group row  d-flex align-items-center ">
                                <div className="col-lg-5 mb-3">
                                    <label className="col-form-label" for="">البحث</label>
                                    <input type="text" className="form-control" id="" placeholder="بحث بإسم العرض" />
                                </div>
                                <div className="col-lg-3 mb-3">
                                    <label className="col-form-label" for="">تصنيف العرض</label>
                                    <select className="custom-select" id="inputGroupSelect01">
                                        <option selected value="0">الكل</option>
                                        <option value="1">الرياضة</option>
                                        <option value="2">السيارة</option>
                                        <option value="3">الملابس</option>
                                    </select>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* Cards */}
                    <div className="row mb-3 align-items-stretch">
                        <div className="col-lg-3 mb-3">
                            <Link to="/events/1">
                            <div className="card border-0 h-100" >
                                <img className="card-img-top" src="img/examples/event-1.png" alt="مكتبة جرير" />
                                <div className="card-body bg-light d-flex justify-content-between align-items-center">
                                    <h5 className="card-title text-primary">مكتبة جرير</h5>
                                    <p className="card-text text-primary">4.4 <i className="fa fa-star text-warning"></i></p>

                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 mb-3">
                        <Link to="/events/1">
                            <div className="card border-0 h-100" >
                                <img className="card-img-top img-responsive" src="img/examples/event-2.png" alt="المسافر" />
                                <div className="card-body bg-light d-flex justify-content-between align-items-center">
                                    <h5 className="card-title text-primary">المسافر</h5>
                                    <p className="card-text text-primary">3.5 <i className="fa fa-star text-warning"></i></p>

                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 mb-3">
                        <Link to="/events/1">
                            <div className="card border-0 h-100" >
                                <img className="card-img-top" src="img/examples/event-3.png" alt="كبريتو" />
                                <div className="card-body bg-light d-flex justify-content-between align-items-center">
                                    <h5 className="card-title text-primary">كبريتو</h5>
                                    <p className="card-text text-primary">2.4 <i className="fa fa-star text-warning"></i></p>
                                </div>
                            </div>
                            </Link>
                        </div>
                        <div className="col-lg-3 mb-3">
                        <Link to="/events/1">
                            <div className="card border-0 h-100" >
                                <img className="card-img-top" src="img/examples/event-4.png" alt="كور" />
                                <div className="card-body bg-light d-flex justify-content-between align-items-center">
                                    <h5 className="card-title text-primary">كور</h5>
                                    <p className="card-text text-primary">1.3 <i className="fa fa-star text-warning"></i></p>

                                </div>
                            </div>
                            </Link>
                        </div>
                    </div>
                    {/* Pagination */}
                    <nav aria-label="...">
                        <ul className="pagination pagination-sm">
                            <li className="page-item active">
                                <a className="page-link" href="#" tabindex="-1">1</a>
                            </li>
                            <li className="page-item "><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                        </ul>
                    </nav>

                </div>
            </div>
        )
    }
}

export default EventsList
