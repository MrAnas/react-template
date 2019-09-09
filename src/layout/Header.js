import React, { PureComponent } from 'react'
import {Link} from 'react-router-dom'
import { Popover,OverlayTrigger,Button} from 'react-bootstrap'
export default class Header extends PureComponent {

  popover = (
    <Popover id="popover-basic">
      <Popover.Content>
        <a href="#"><h5 class="text-primary">تبقى على عقد الإتفاقية الخاصة</h5></a>
        <a href="#"><h5 class="text-primary">تبقى على عقد الإتفاقية الخاصة</h5></a>
      </Popover.Content>
    </Popover>
  );


  render() {
    return (
      <header className="header bg-light pt-3 pb-4 d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-dark">العروض ...<span className="text-primary">قائمة العروض</span></h2>

        <div className="mt-2 d-flex align-items-center">
          <div className="notification">
            <OverlayTrigger trigger="click" placement="bottom" overlay={this.popover}>
              <Link><i class="fal fa-bell"></i></Link>
            </OverlayTrigger>
          </div>
          <div className="userProfile bg-light cursor-pointer pr-4 border-right border-muted" >
            <a href="#userprofile" className="profilePic bg-secondary">
              <img src="img/user-profile.jpg" alt="User Profile" />
            </a>
            <div className="loggedDetails text-right">
              <a href="#userprofile" className="userName text-dark">عبدالرحمن عبدالقدوس</a>
              <a className="positionName text-secondary" href="#userprofile">
                تسجيل خروج
                </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
}


