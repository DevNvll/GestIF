const modulos = [
  {
    id: 'csti',
    name: 'CSTI',
    color: '#222',
    menu: [
      {
        text: 'Início',
        href: '/csti',
        icon: 'fa fa-home'
      },
      {
        text: 'Reports',
        href: '/csti/reports',
        icon: 'fa fa-clipboard'
      },
      {
        text: 'Administração',
        icon: 'fa fa-cog',
        submenu: [
          {
            text: 'Usuários',
            href: '/csti/usuarios',
            icon: 'fa fa-id-card'
          },
          {
            text: 'Sobre',
            href: '/sobre',
            icon: 'fa fa-info'
          }
        ]
      }
    ]
  },
  {
    id: 'direcao',
    name: 'Direção',
    color: '#00abc9',
    menu: [
      {
        text: 'Início',
        href: '/direcao',
        icon: 'fa fa-home'
      }
    ]
  }
]

export default modulos
