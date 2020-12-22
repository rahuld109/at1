import React, { useState } from 'react';
import { Anchor, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';
import './Header.scss';

const { Link } = Anchor;

const Header: React.FC = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <div className="container-fluid">
      <div className="header">
        <div className="logo">
          <a href="/">GURA</a>
        </div>
        <div className="mobileHidden">
          <Anchor>
            <Link href="#dicover" title="Dicover" />
            <Link href="#teach" title="Teach on Gura" />
            <Link href="#signup" title="Sign up" />
            <Link href="#login" title="Log in" />
          </Anchor>
        </div>
        <div className="mobileVisible">
          <Button type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer
            title="Menu"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
          >
            <Anchor>
              <Link href="#dicover" title="Dicover">
                <Link href="#Option1" title="Option1" />
                <Link href="#Option2" title="Option2" />
              </Link>
              <Link href="#teach" title="Teach on Gura" />
              <Link href="#signup" title="Sign up" />
              <Link href="#login" title="Log in" />
            </Anchor>
          </Drawer>
        </div>
      </div>
    </div>
  );
};

export default Header;

// import './Header.css';

// const Header = () => (
//   <div className="app__header">
//     <div className="header__title">
//       <h1 className="title">
//         GURA
//       </h1>
//     </div>

//     <div className="header__nav">
//       <div className="header__option">
//         <span className="header__element">Discover </span>
//         <span className="header__dropdown">v</span>
//       </div>

//       <div className="header__option">
//         <span className="header__element">Teach on Gura</span>
//       </div>

//       <div className="header__option">
//         <span className="header__element">Sign up</span>
//       </div>

//       <div className="header__option">
//         <span className="header__element">Log in</span>
//       </div>
//     </div>
//   </div>
// );

// export default Header;
