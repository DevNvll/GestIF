export default ({ auth }) =>
  <header className="main-header">
    <a href="index2.html" className="logo">
      <span className="logo-mini">
        <b>G</b>IF
      </span>
      <span className="logo-lg">
        <b>Gest</b>IF
      </span>
    </a>
    <nav className="navbar navbar-static-top" role="navigation">
      <a
        href="#"
        className="sidebar-toggle"
        data-toggle="push-menu"
        role="button"
      >
        <span className="sr-only">Toggle navigation</span>
      </a>
      <div className="navbar-custom-menu">
        <ul className="nav navbar-nav">
        
          <li className="dropdown user user-menu">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown">
              <img
                src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e8/e805aec4d5c1c0cf7ceafbe714902428673f1e5d_full.jpg"
                className="user-image"
                alt="User Image"
              />
              <span className="hidden-xs">
                Henrick Mello
              </span>
            </a>
            <ul className="dropdown-menu">
              <li className="user-header">
                <img
                  src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e8/e805aec4d5c1c0cf7ceafbe714902428673f1e5d_full.jpg"
                  className="img-circle"
                  alt="User Image"
                />
                <p>
                  Henrick Mello
                  <small>
                    Monitor
                  </small>
                </p>
              </li>
              <li className="user-footer">
                <div className="pull-right">
                  <a
                    href="#"
                    onClick={() => auth.logout()}
                    className="btn btn-default btn-flat"
                  >
                    Sair
                  </a>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  </header>
