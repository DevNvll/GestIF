# GestIF

> Sistema de gestão administrativa para o Campus Arraial do Cabo

GestIF é um sistema de gestão desenvolvido como TCC da turma INF 171 2018.1 do curso de informática  do IFRJ Campus Arraial do Cabo. O sistema consiste em um painel de controle modular, onde cada módulo é independente e é referente a um setor administrativo ou técnico. Inicialmente o sistema conta com um módulo para CSTI.

## Introdução

Observando as atividades cotidianas do _Campus_ Arraial do Cabo, percebemos em muitos momentos a falta de ligação entre os setores administrativos com o restante do instituto, resultando em problemas de comunicação e impedindo que diversas atividades sejam realizadas de forma dinâmica e eficiente, prejudicando ainda a produtividade dos servidores em suas tarefas, atingindo assim a todos que precisam utilizar dos recursos que o _campus_ disponibiliza.

Além disso, percebemos que a utilização de sistemas não automatizados são, em muitos momentos, ineficazes e pouco econômicos. Percebemos, ainda, que o uso de sistemas automatizados, em detrimento aos manuais (planilhas a mão, notas, cadernos) aumentam a produtividade e consequentemente a rapidez dos processos administrativos. Visto isso, é de suma importância o desenvolvimento de um software capaz de realizar o gerenciamento administrativo do instituto.

O projeto pretende, então, solucionar os problemas existentes de gestão do _Campus_, por meio da criação de um software de gestão, onde funcionará como um agregador, que possuirá vários módulos independentes, cada um para uma resolução de problemas específica. Com isso, facilitaremos o trabalho das partes competentes do _campus_, além de aumentar a integração entre servidores e discentes, peças fundamentais para o funcionamento da instituição.

O sistema comportará diversas funções. Destacam-se entre elas o controle de entrada e saída dos equipamentos dos laboratórios, quadro de horários de monitores, gerenciamento do almoxarifado, entre outros. Para exemplificarmos a funcionalidade do nosso sistema, optamos por criar o controle de equipamentos dos laboratórios, abrindo possibilidade para aperfeiçoamento e futura expansão.

## Tecnologias

O sistema é desenvolvido primariamente em **Javascript (NodeJS)** e **NextJS**.

No frontend, é utilizada a biblioteca **ReactJS** para o desenvolvimento da UI e UX do sistema. Além dela, também é utilizado **Bootstrap** e **Semantic UI**.

Já no backend, é utilizado a framework web **ExpressJS**, **MongoDB** para o banco de dados e **Mongoose** para o gerenciamento do banco. A autenticação de usuários é feita por **Json Web Tokens**.

## Grupo

Brenno Luis, David Sales, Henrick Mello, Julio Volpatto, Thalya Ouvidor
