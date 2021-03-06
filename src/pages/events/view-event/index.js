import React, { Component ,useState} from 'react'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap';


export default class ViewEvent extends Component {
    static propTypes = {
        prop: PropTypes
    }

    render() {
        return (
            <div class="container">
                <div class="row justify-content-between align-items-start mb-4">
                    <img class="col-lg-4 col-md-12" src="img/examples/event.png" alt="event" />
                    <div class="col-lg-4 col-md-12 d-flex justify-content-end align-items-center">
                        
                        <button class="btn btn-outline-primary">تعديل العرض</button>
                        <a class="h5 text-danger mx-5" href="#">حذف العرض</a>
                    </div>
                </div>
                <div className="row">
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">اسم مقدم العرض بالعربي</label>
                        <h5 className="form-form-plaintext text-primary">العقد الموحد للإستقدام</h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">اسم مقدم العرض بالإنجليزي</label>
                        <h5 className="form-form-plaintext text-primary">Unified contract recruitment</h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">تاريخ بداية العرض</label>
                        <h5 className="form-form-plaintext text-primary">١٤ أغسطس ٢٠١٩</h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">تاريخ نهاية العرض</label>
                        <h5 className="form-form-plaintext text-primary">٢٥ أكتوبر ٢٠١٩</h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">وصف العرض بالعربي</label>
                        <h5 className="form-form-plaintext text-primary">خصم للإستقدام لموظفين شركة علم وإمداد الخبرات من ٥٪ حتى ١٠٪ حسب الجنسية.</h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">وصف العرض بالإنجليزي</label>
                        <h5 className="form-form-plaintext text-primary">Recruitment discount for Elm and Emdad employees from 5% to 10% by nationality.</h5>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">الموقع الإلكتروني</label>
                        <h5 className="form-form-plaintext text-primary"></h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">العنوان</label>
                        <h5 className="form-form-plaintext text-primary">الرياض - حي الياسمين - شارع التراث</h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">رقم هاتف الدعم</label>
                        <h5 className="form-form-plaintext text-primary"></h5>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">البريد الإلكتروني للدعم</label>
                        <h5 className="form-form-plaintext text-primary">hrcsupport@elm.sa</h5>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">تصنيف العرض</label>
                        <h5 className="form-form-plaintext text-primary">المنزل</h5>
                    </div>
                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">نسبة التخفيض</label>
                        <h5 className="form-form-plaintext text-primary">15 %</h5>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">تقييم العرض</label>
                        <h5 className="form-form-plaintext text-primary">4.4 <i class="fa fa-star fa-fw text-warning"></i> </h5>
                    </div>

                    <div class="col-lg-4 col-md-6">
                        <label className="col-form-label">إتفاقية العرض</label>
                        <a href="#"><h5 className="form-form-plaintext text-bold text-secondary">مشاهدة الإتفاقية </h5></a>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col-md-12">
                        <label class="col-form-label">التعليقات</label>
                        <div class="border bg-light border-dark p-3">
                            <div class="media">
                                <div class="media-body">
                                    <div class="d-flex justify-content-between align-items-center bg-white mt-3">
                                        <img src="img/icon-1.jpg" width="100" class="mr-1 p-3" alt="icon-1" />
                                        <div class="flex-grow-1">
                                            <h5 class="mt-0">فهد حسن الزهراني</h5>
                                            <p class="text-muted">شكراً لكم العرض جيد ومناسب للغاية.</p>
                                        </div>
                                        <div class="">
                                            <Replay/>
                                        </div>
                                        <div class="text-danger mx-5">
                                            <i class="fa fa-trash-alt"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="media">
                                <div class="media-body">
                                    <div class="d-flex justify-content-between align-items-center bg-white mt-3">
                                        <img src="img/icon-2.jpg" width="100" class="mr-1 p-3" alt="icon-1" />
                                        <div class="flex-grow-1">
                                            <h5 class="mt-0">فهد حسن الزهراني</h5>
                                            <p class="text-muted">شكراً لكم العرض جيد ومناسب للغاية.</p>
                                        </div>
                                        <div class="">
                                        <Replay/>
                                        </div>
                                        <div class="text-danger mx-5">
                                            <i class="fa fa-trash-alt"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}


function Replay() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = (event) => { setShow(true); event.preventDefault(); }

    return (
        <>
            <div className="row justify-content-end">
                <a onClick={handleShow}><h4 className="text-primary" >الرد</h4></a>
            </div>

            <Modal size="lg" show={show} onHide={handleClose}>
                <Modal.Header className="border-0" closeButton>
                </Modal.Header>
                <Modal.Body>
                <div class="media comment-popup">
  <div class="media-body mb-4">
    <h5 class="mt-0">عبدالله مساعد الشهراني</h5>
    للأسف تم التواصل مع الشركة لكن الموظف قال لايوجد خصم! أرجوا التواصل معهم وشكراً لكم 
      </div>
</div>
<div class="form-group mt-5">
    <label for="replay">الرد</label>
    <textarea class="form-control" id="replay" rows="3"></textarea>
  </div>
                    <div className="d-flex justify-content-end  mb-3">
                        <Button onClick={handleShow}>الرد</Button>
                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}