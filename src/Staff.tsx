import React from 'react';
import {
  Row, Col, Button, Typography, Image,
} from 'antd';
import 'antd/dist/antd.css';
import './Staff.scss';

const { Title, Paragraph } = Typography;

const Staff: React.FC = () => (
  <div className="staff__section">
    <Title className="staff__pick" level={4}>Staff pick for you</Title>
    <Row className="staff__card">
      <Col>
        <Image src="https://beta.gura.io/static/media/staff-pick.51a5e00c.png" alt="staff_image" />
      </Col>
      <Col className="staff__detail">
        <Title className="bold-text" level={4}>Using Jira to Manage your Sprints across your Product teams </Title>
        <Paragraph>
          Im going to run through the ins
          and outs of setting up a Sprint in Jira,
          and the best approach to make sure you are dev
          team is performing at a high level.
        </Paragraph>
        <Paragraph className="instructor ">Michal Wilson</Paragraph>
        <Paragraph className="time__left grey-text">Going live in 8 hours, 13 minutes</Paragraph>
        <Paragraph className="price__tag bold-text">$29.99</Paragraph>
        <Button type="primary" className="staff-btn"><span>Buy Now</span></Button>
      </Col>
    </Row>
  </div>
);

export default Staff;
