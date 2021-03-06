import Logo from '../logoHenry.png'
import SearchBar from './SearchBar.jsx';
import './Nav.css';


function Nav({ onSearch }) {
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark" >
        <a class="navbar-brand" href="/">
          <img src={Logo} width="30" height="30" class="d-inline-block align-top" alt=""/>
            Henry -Weather App
        </a>
        <div className='search'>
          <SearchBar onSearch={onSearch} />
        </div>
      </nav>
    </>
  );
};

export default Nav;
