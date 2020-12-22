import React from 'react';
import { Typography, Image } from 'antd';
import 'antd/dist/antd.css';
import './Promo.scss';

const { Title, Paragraph } = Typography;

type PromoProps = {
  image: string,
  title: string,
  description: string,
};

const Card: React.FC<PromoProps> = ({
  // eslint-disable-next-line react/prop-types
  image, title, description,
}) => (
  <div className="promo__container">
    <div className="promo__row">
      <Image className="promo__image" src={image} alt="staff_image" />
      <div className="promo__detail">
        <Title className="promo__title" level={4}>{title}</Title>
        <Paragraph className="promo__description">{description}</Paragraph>
      </div>
    </div>
  </div>
);

export default Card;
