import React from 'react';
import { Link } from 'react-router-dom'
import { stack as Menu } from 'react-burger-menu'

class Sidebar extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu
        bodyClassName={"opened"}
        right
        width={280}
        isOpen
        pageWrapId={this.props.pageWrapId}
        outercontainerId={"outer-container"}
        noOverlay
        disableOverlayClick
        customCrossIcon={<img src="img/icons/burger.svg" />}
      >
        <img className="text-center" src="img/logo.svg" width={100} />
        <Link to="/events" id="home" className="menu-item mt-5 pr-4 py-2" href="/">
          <img className="ml-3" src="img/icons/events-icon.svg" />
          <span>الفعاليات</span>
        </Link>
        <Link to="/offers" id="about" className="menu-item mb-2 pr-4 py-2" href="/about">
          <img className="ml-3" src="img/icons/offers-icon.svg" />
          <span>العروض</span>
        </Link>

      </Menu>
    );
  }
}

export default Sidebar;