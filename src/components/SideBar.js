import React from 'react'
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
const MenuItem = props => {
  const active = props.location.pathname === props.href
  const isSubmenuActive = props.submenu
    ? props.submenu.filter(i => {
        return i.path === props.location.pathname
      }).length >= 1 ? true : false
    : null
  const click = (href) => {
    props.history.push(href)
    
  }
  return props.submenu !== undefined ? (
    <li className={isSubmenuActive ? 'active treeview' : 'treeview'}>
      <a href="#">
        <i className="fa fa-files-o" />
        <span>{props.text}</span>
        <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
      </a>
      <ul className="treeview-menu">
        {props.submenu.map((item, i) => {
          return (
            <li key={i}>
                <a onClick={() => click(item.path)} href={item.path}>
                  <i className={item.icon} />
                  <span>{item.text}</span>
                </a>
            </li>
          )
        })}
      </ul>
    </li>
  ) : (
    <li className={active ? 'active treeview' : 'treeview'}>
    <a onClick={() => click(props.href)} href={props.href}>
        <i className={props.icon} />
        <span>{props.text}</span>
      </a>
    </li>
  )
}

const SideBar = ({ menu, auth, location, history }) => (
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
              href={item.path ? item.path : undefined}
              text={item.text}
              location={location}
              history={history}
              submenu={item.routes ? item.routes : undefined}
              icon={item.icon}
            />
          )
        })}
      </ul>
    </section>
  </aside>
)

export default withRouter(SideBar)