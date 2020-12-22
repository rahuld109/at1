import React from 'react';
import { Typography } from 'antd';
import 'antd/dist/antd.css';
import './Section.scss';

const { Title, Paragraph } = Typography;

type SectionProps = {
  title: string,
  description: string,
};

const Section: React.FC<SectionProps> = ({
  // eslint-disable-next-line react/prop-types
  title, description,
}) => (
  <div className="section__container">
    <Title className="section__title" level={4}>{title}</Title>
    <Paragraph className="section__description">{description}</Paragraph>
  </div>
);

export default Section;
