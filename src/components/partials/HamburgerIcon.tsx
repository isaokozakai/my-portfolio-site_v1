type HamburgerIconProps = {
  isOpen: boolean;
  handleBurgerClick: () => void;
};

const HamburgerIcon = ({ isOpen, handleBurgerClick }: HamburgerIconProps) => (
  <div
    id="burger-icon"
    className={`md:hidden ${isOpen ? 'burger-open' : ''}`}
    onClick={handleBurgerClick}
  >
    <span />
    <span />
    <span />
    <span />
    <span />
    <span />
  </div>
);

export default HamburgerIcon;
