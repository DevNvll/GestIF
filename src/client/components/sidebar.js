import { Component, Fragment } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

const MenuItem = props => {
  const isActive = props.router.pathname === props.href
  const isSubmenuActive = props.submenu
    ? props.submenu.filter(i => {
        return i.href === props.router.pathname
      }).length >= 1
      ? true
      : false
    : null
  const onClick = () => {
    console.log('clocked')
    window.Pace.start()
  }
  return props.submenu !== undefined ? (
    <li className={isSubmenuActive ? 'treeview menu-open active' : 'treeview'}>
      <a href="#">
        <i className={props.icon} />
        <span>{props.text}</span>
        <span className="pull-right-container">
          <i className="fa fa-angle-left pull-right" />
        </span>
      </a>
      <ul className="treeview-menu">
        {props.submenu.map((item, i) => {
          return (
            <li key={i}>
              <Link prefetch href={item.href}>
                  <a onClick={() => onClick()}>
                    <i className={item.icon} />
                    {item.text}
                  </a>
              </Link>
            </li>
          )
        })}
      </ul>
    </li>
  ) : (
    <li className={isActive ? 'active treeview' : 'treeview'}>
      <Link prefetch href={props.href}>
          <a>
            <i className={props.icon} />
            <span>{props.text}</span>
          </a>
      </Link>
    </li>
  )
}

const SideBar = ({ menu, auth, router, url }) => (
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
        <li className="header">NAVEGAÇÃO</li>
        {menu.map((item, i) => {
          return (
            <MenuItem
              key={i}
              href={item.href ? item.href : undefined}
              text={item.text}
              router={router}
              submenu={item.submenu ? item.submenu : undefined}
              icon={item.icon}
            />
          )
        })}
      </ul>
    </section>
  </aside>
)

export default withRouter(SideBar)
