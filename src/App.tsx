import { ReactElement } from 'react';
import { Typography } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Staff from './Staff';
import Card from './Card';
import Section from './Section';
import './App.scss';

const { Title } = Typography;

const App = (): ReactElement => (
  <div className="app">
    <Header />
    <div className="div__body">
      <Section
        title="Live classes from home"
        description="Watch live online classes from peers & experts across various topics"
      />
      <Title className="featured__section" level={4}>Featured Live Sessions</Title>
      <div className="div__cards">
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-marketing.4dc37fcd.png"
            title="Marketing with Zero Budget"
            staff="Alexa Smith"
            time="Going live in 2hours, 25mins"
            price="$23.99"
          />
        </div>
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-6.1fc87047.png"
            title="From Intern to Director of Marketing at TikTok in Less than 2 Years"
            staff="Michaela Goldberg"
            time="Going live in 5 hours, 8 minutes"
            price="$59.99"
          />
        </div>
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-7.d07c06e2.png"
            title="Running an Online Business Overseas"
            staff="James Perry"
            time="Going live in 1 month, 23 days"
            price="$25.00"
          />
        </div>
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-8.812d0904.png"
            title="Using A Couple Robinhood Option Trades to Fund your Venture"
            staff="Derrick Michaels"
            time="Going live in 3 days, 2 hours"
            price="$35.99"
          />
        </div>
      </div>
      <Title className="featured__section" level={4}>Today Live Sessions</Title>
      <div className="div__cards">
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-1.f557f0b1.png"
            title="What it takes to Build a Billion Dollar Mobile App"
            staff="Kevin Systrom"
            time="Going live in 2 hours, 10 mins"
            price="$17.00"
          />
        </div>
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-2.de536f30.png"
            title="Starting an e-Commerce Business during COVID"
            staff="John Barry"
            time="Going live in 6 hours, 24 mins"
            price="$17.00"
          />
        </div>
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-3.e7803b51.png"
            title="Growth Hacking Facebook Ads to $50M in Sales"
            staff="Jessica Hollins"
            time="Going live in 4 hours, 2 minutes"
            price="$32.00"
          />
        </div>
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-4.52dbfe6d.png"
            title="Launching a Shopify Site in Less than 10 mins"
            staff="Michella Jackson"
            time="Going live in 3 hours, 20 minutes"
            price="$48.00"
          />
        </div>
      </div>
      <Staff />
    </div>
    <Footer />
  </div>
);

export default App;
