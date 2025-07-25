const HamburgerIcon = ({ isOpen, handleBurgerClick }) => (
  <div id="burger-icon" className={isOpen ? 'burger-open' : ''} onClick={handleBurgerClick}>
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
);

export default HamburgerIcon;
