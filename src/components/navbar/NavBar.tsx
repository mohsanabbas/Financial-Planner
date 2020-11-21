import * as React from 'react';
interface NavBarProps {
  logo: string;
}

export const NavBar: React.FC<NavBarProps> = ({ logo }) => {
  return (
    <div className="navbar">
      <img className="navbar__logo" src={logo} alt={'logo'} />
    </div>
  );
};
