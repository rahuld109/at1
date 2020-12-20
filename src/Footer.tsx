import React from 'react';
import {
  Row, Col, Button, Typography,
} from 'antd';
import 'antd/dist/antd.css';
import './Footer.scss';

const { Title, Paragraph } = Typography;

const Footer: React.FC = () => (
  <div className="footer">
    <div className="footer__description">
      <Row>
        <Col>
          <Title level={4}>Start teaching your class today</Title>
          <Paragraph>Connect with fans, reach people across the world, and earn money</Paragraph>
        </Col>
        <Col>
          <Button type="primary" className="footer-btn"><span>Start Teaching</span></Button>
        </Col>
      </Row>
    </div>
    <div className="footer__content">
      <div className="footer__links">
        <ul className="footer__list">
          <li><a href="#Terms">Terms</a></li>
          <li><a href="#Privacy">Privacy Policy</a></li>
          <li><a href="#About Us">About Us</a></li>
          <li><a href="#Contact Us">Contact Us</a></li>
        </ul>
        <ul className="footer__list">
          <li><a href="#Blog">Blog</a></li>
          <li><a href="#Help & Support">Help & Support</a></li>
          <li><a href="#Featured">Featured Sessions</a></li>
        </ul>
      </div>
      <div className="footer__logo">
        <div className="logo">GURA</div>
        <div className="copyright">© 2020 Gura.Inc</div>
      </div>
    </div>
  </div>
);

export default Footer;
