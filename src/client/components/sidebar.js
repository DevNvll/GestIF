import Link from 'next/link'
import { withRouter } from 'next/router'
import { Icon, Popup } from 'semantic-ui-react'

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
            <li
              key={i}
              className={props.router.pathname === item.href ? 'active' : ''}
            >
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

const SideBar = ({ menu, auth, router, url, module }) => (
  <aside className="main-sidebar">
    <section className="sidebar">
      <div className="user-panel">
        <div className="pull-left image">
          <img
            src={`https://ui-avatars.com/api/?background=222&color=fff&name=${
              auth.getProfile().name
            }&font-size=0.33`}
            className="img-circle"
            alt="User"
          />
        </div>
        <div className="pull-left info">
          <p>
            {auth.getProfile().name.split(' ')[0]}{' '}
            {
              auth.getProfile().name.split(' ')[
                auth.getProfile().name.split(' ').length - 1
              ]
            }{' '}
            <Popup
              inverted
              position="right center"
              trigger={
                <span>
                  <Link href="/me">
                    <a alt="Configurações da conta">
                      <Icon name="setting" size="small" />
                    </a>
                  </Link>
                </span>
              }
            >
              Detalhes da conta
            </Popup>
          </p>
          <Popup
            inverted
            position="right center"
            trigger={
              <span>
                <a href="/modulos">
                  <Icon name="cube" size="small" />
                  <span style={{ paddingTop: '5px' }}>{module.name}</span>
                </a>
              </span>
            }
          >
            Alternar módulo
          </Popup>
        </div>
      </div>

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
