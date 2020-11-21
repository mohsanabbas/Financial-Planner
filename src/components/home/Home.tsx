import * as React from 'react';
import { Card } from '../card/Card';
import { NavBar } from '../navbar/NavBar';
import logo from '../../icons/logo.svg';

export const Home: React.FC = () => {
  return (
    <div className="home">
      <div className="home__nav">
        <NavBar logo={logo} />
      </div>
      <div className="home__container">
        <p className="home__container__heading">
          <span>Let&apos;s plan your</span>
          <strong className="home__container__heading-text">
            saving goal.
          </strong>
        </p>
      </div>
      <div className="home__card">
        <Card />
      </div>
    </div>
  );
};
