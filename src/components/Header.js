import Button from "./Button";

const Header = ({ title, onAdd, showAdd, test }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button 
        color={showAdd ? 'linear-gradient(to bottom right, #ff63c3 0%, #ff4a5f 100%' : 'linear-gradient(to bottom right, #63bbff 0%, #4B56FF 100%'}
        text={showAdd ? 'Close' : 'Add'} 
        onClick={onAdd} 
      />
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker"
};

export default Header;

