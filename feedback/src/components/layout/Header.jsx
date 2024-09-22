function Header({ text }) {
  return (
    <>
      <header className="head">
        <h3>
          <a href="/">{text}</a>
        </h3>
      </header>
    </>
  );
}

export default Header;