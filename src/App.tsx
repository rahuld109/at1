import { ReactElement } from 'react';
import { Typography } from 'antd';
import Header from './Header';
import Footer from './Footer';
import Staff from './Staff';
import Card from './Card';
import Section from './Section';
import Promo from './Promo';
import Heading from './Heading';
import './App.scss';

const { Title } = Typography;

const App = (): ReactElement => (
  <div className="app">
    <Header />
    <div className="div__body">
      <Heading />
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
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-9.1d106c0d.png"
            title="Going from 1K MAU's to 500K MAU's in 3 months"
            staff="Stacey Jacobs"
            time="Going live in 5days, 9hours"
            price="$74.99"
          />
        </div>
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-10.556f91b2.png"
            title="Launching a FashionTech Business"
            staff="Daisy Gorden"
            time="Going live in 45mins"
            price="$23.99"
          />
        </div>
      </div>
      <div className="promo__section">
        <Promo
          image="https://beta.gura.io/static/media/star-brust.a5affc17.svg"
          title="Buy premium classes to learn about topics"
          description="All pay as you go. No commitments."
        />
        <Promo
          image="https://beta.gura.io/static/media/thunder-in-box.a75f6b7e.svg"
          title="Learn from industry experts, and peers with more experience"
          description="Discover the most relevant video sessions for your needs."
        />
        <Promo
          image="https://beta.gura.io/static/media/rocket.55f4d623.svg"
          title="Supercharge your learning with new insights & connections"
          description="Classroom & webinar style."
        />
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
        <div className="card">
          <Card
            image="https://beta.gura.io/static/media/Thumbnail-5.29e8275d.png"
            title="Building an Empire, From the Founder of StockX"
            staff="Jesse Grove"
            time="Going live in 5 hours, 11minutes"
            price="$75.00"
          />
        </div>
      </div>
      <Staff />
    </div>
    <Footer />
  </div>
);

export default App;
