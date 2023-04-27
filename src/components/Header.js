function Header(){
    return(
        <header className="header">
            <img src={require('../images/logo.svg').default} alt="логотип" className="header__logo"/>
        </header>
    )
}
export default Header;