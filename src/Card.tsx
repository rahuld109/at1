import React from 'react';
import { Typography, Image } from 'antd';
import 'antd/dist/antd.css';
import './Card.scss';

const { Title, Paragraph } = Typography;

type CardProps = {
  image: string,
  title: string,
  staff: string,
  time: string,
  price: string,
};

const Card: React.FC<CardProps> = ({
  // eslint-disable-next-line react/prop-types
  image, title, staff, time, price,
}) => (
  <div className="card__container">
    <div className="card__row">
      <Image className="card__image" src={image} alt="staff_image" />
      <div className="card__detail">
        <Title className="bold-text" level={4}>{title}</Title>
        <Paragraph className="instructor">{staff}</Paragraph>
        <Paragraph className="time__left grey-text">{time}</Paragraph>
        <Paragraph className="price__tag bold-text">{price}</Paragraph>
      </div>
    </div>
  </div>
);

export default Card;
