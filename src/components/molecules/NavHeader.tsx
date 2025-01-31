import React from 'react';
import Button from '@atoms/ButtonHeader';

interface NavHeaderProps {
  onClickButton: () => void;
}

const NavHeader: React.FC<NavHeaderProps> = ({ onClickButton }) => (
  <nav className="NavHeader">
    <Button label="Menu" onClick={onClickButton} />
  </nav>
);

export default NavHeader;