import React, { Component } from 'react';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Content from './components/Content';


const Menu = [
  {
    text: 'Home',
    href: '/',
    icon: 'fa fa-bars',
    active: true,
  },
  {
    text: 'Reports',
    href: '/',
    icon: 'fa fa-steam',
    active: false,
  },
  {
    text: 'Configurações',
    icon: 'fa fa-gears',
    active: false,
    submenu: [
      {
        text: 'Config 1',
        href: '/about',
        icon: 'fa fa-bars',
        active: false
      },
      {
        text: 'Config 2',
        href: '/config2',
        icon: 'fa fa-bars',
        active: false
      }
    ]
  }
]

class App extends Component {

  render() {
    return (
      <div>
        <Header />
        <SideBar menu={Menu} />
        <Content />
      </div>
    );
  }
}

export default App;
