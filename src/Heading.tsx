import React from 'react';
import {
  Button, Typography,
} from 'antd';
import 'antd/dist/antd.css';
import './Heading.scss';

const { Title, Paragraph } = Typography;

const Heading: React.FC = () => (
  <div className="heading__root">
    <div className="heading__container">
      <div className="heading__card heading__mobileHidden">
        <div className="heading__content">
          <Title className="heading__title" level={5}>Full Stack Entrepreneurship</Title>
          <Paragraph className="heading__description">
            Join Renaldo live as he talks about the skills
            you need to be a Full Stack Entrepreneur,
            his path from Shark Tank, and beyond.
          </Paragraph>
          <Paragraph className="heading__instructor">Renaldo Webb</Paragraph>
          <Paragraph className="heading__time-left grey-text">Going live in 2 hours, 25 mins</Paragraph>
          <Paragraph className="price__tag bold-text">$39.99</Paragraph>
          <Button type="primary" className="heading-btn"><span>Buy now</span></Button>
        </div>
      </div>
    </div>
    <div className="heading__card heading__mobileVisible">
      <div className="heading__content">
        <Title className="heading__title" level={5}>Full Stack Entrepreneurship</Title>
        <Paragraph className="heading__description">
          Join Renaldo live as he talks about the skills
          you need to be a Full Stack Entrepreneur,
          his path from Shark Tank, and beyond.
        </Paragraph>
        <Paragraph className="heading__instructor">Renaldo Webb</Paragraph>
        <Paragraph className="heading__time-left grey-text">Going live in 2 hours, 25 mins</Paragraph>
        <Paragraph className="price__tag bold-text">$29.99</Paragraph>
        <Button type="primary" className="heading-btn"><span>Buy now</span></Button>
      </div>
    </div>
  </div>
);

export default Heading;
