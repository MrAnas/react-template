import React, { Component, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { DateRangePicker } from 'react-dates';
import Dropzone from 'react-dropzone';
import Previews from './uploadfile';
import { useDropzone } from 'react-dropzone';
import { Button, Modal } from 'react-bootstrap';

export default class CreateEvent extends Component {
    state = {
        startDate: '',
        endDate: '',
        focusedInput: '',
    }

    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group row">
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">اسم الفعالية بالعربي</label>
                            <input type="text" className="form-control" id="" placeholder="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">اسم الفعالية بالانجليزي</label>
                            <input type="text" className="form-control" id="" placeholder="" />
                        </div>

                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">تاريخ الفعالية</label>
                            <DateRangePicker
                                className="d-flex"
                                isRTL={true}
                                block={true}
                                startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                                endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                                onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
                                focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                                onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                            />
                        </div>
                    </div>
                    <div className="form-group row">
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">وصف الفعالية بالعربي</label>
                            <textarea type="text" className="form-control" id="" placeholder="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">وصف الفعالية بالإنجليزي</label>
                            <textarea type="text" className="form-control" id="" placeholder="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">الموقع الإلكتروني</label>
                            <input type="text" className="form-control" id="" placeholder="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">العنوان</label>
                            <input type="text" className="form-control" id="" placeholder="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">رقم هاتف الدعم</label>
                            <input type="text" className="form-control" id="" placeholder="" />
                        </div>
                        <div className="col-lg-4 col-md-6 mb-3">
                            <label className="col-form-label" for="">البريد الإلكتروني للدعم</label>
                            <input type="text" className="form-control" id="" placeholder="" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-3">
                            <Previews text={"اضغط هنا لرفع صورة أو فيديو الفعالية"} />
                        </div>
                    </div>
                    <Confirmation />
                </form>
            </div>
        )
    }
}


function Confirmation() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => { setShow(true); event.preventDefault(); }

    return (
        <>
            <div className="row justify-content-end">
                <button className="btn btn-secondary mx-3" onClick={handleShow}>إضافة</button>
                <button className="btn btn-outline-secondary">إلغاء</button>
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header className="border-0" closeButton>
                </Modal.Header>
                <Modal.Body>
                    <div className="text-center">
                        <i className="fal fa-check-circle fa-8x text-success mb-4"></i>
                        <h3 className="text-primary text-center mb-5">تم إضافة الفعالية بنجاع</h3>
                    </div>
                    <div className="d-flex justify-content-center mx-5 mb-3">
                        <Button onClick={handleShow}>عودة لصفحة الفعالية</Button>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}
