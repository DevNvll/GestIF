import React from 'react'


const MenuItem = props => {
  return props.submenu !== undefined ? (
    <li className={props.active ? 'active treeview' : 'treeview'}>
      <a href="/">
        <i className="fa fa-files-o" />
        <span>{props.text}</span>
        <span className="pull-right-container">
          <span className="label label-primary pull-right">4</span>
        </span>
      </a>
      <ul className="treeview-menu" style={{display: 'block'}}>
        {props.submenu.map((item, i) => {
          return (
            <li key={i}>
                <a href={item.href}>
                  <i className={item.icon} />
                  {item.text}
                </a>
            </li>
          )
        })}
      </ul>
    </li>
  ) : (
    <li className={props.active ? 'active treeview' : 'treeview'}>
      <a href={props.href}>
        <i className={props.icon} />
        <span>{props.text}</span>
      </a>
    </li>
  )
}

export default ({ menu, auth }) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img
            src="http://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/e8/e805aec4d5c1c0cf7ceafbe714902428673f1e5d_full.jpg"
            className="img-circle"
            alt="User"
          />
        </div>
        <div className="pull-left info">
          <p>Henrick Mello</p>
          <a href="/">
            <i className="fa fa-circle text-success" /> Sala 213
          </a>
        </div>
      </div>

      <form action="/" method="get" className="sidebar-form">
        <div className="input-group">
          <input
            type="text"
            name="q"
            className="form-control"
            placeholder="Pesquisar itens..."
          />
          <span className="input-group-btn">
            <button
              type="submit"
              name="search"
              id="search-btn"
              className="btn btn-flat"
            >
              <i className="fa fa-search" />
            </button>
          </span>
        </div>
      </form>

      <ul className="sidebar-menu" data-widget="tree">
        <li className="header">NAVEGAÇÂO</li>
        {menu.map((item, i) => {
          return (
            <MenuItem
              key={i}
              href={item.href ? item.href : undefined}
              text={item.text}
              active={item.active}
              submenu={item.submenu ? item.submenu : undefined}
              icon={item.icon}
            />
          )
        })}
      </ul>
    </section>
  </aside>
)
