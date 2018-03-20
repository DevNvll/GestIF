# GestIF

**1. INTRODUÇÃO**

Observando as atividades cotidianas do _Campus_ Arraial do Cabo, percebemos em muitos momentos a falta de ligação entre os setores administrativos com o restante do instituto, resultando em problemas de comunicação e impedindo que diversas atividades sejam realizadas de forma dinâmica e eficiente, prejudicando ainda a produtividade dos servidores em suas tarefas, atingindo assim a todos que precisam utilizar dos recursos que o _campus_ disponibiliza.

Além disso, percebemos que a utilização de sistemas não automatizados são, em muitos momentos, ineficazes e pouco econômicos. Percebemos, ainda, que o uso de sistemas automatizados, em detrimento aos manuais (planilhas a mão, notas, cadernos) aumentam a produtividade e consequentemente a rapidez dos processos administrativos. Visto isso, é de suma importância o desenvolvimento de um software capaz de realizar o gerenciamento administrativo do instituto.

O projeto pretende, então, solucionar os problemas existentes de gestão do _Campus_, por meio da criação de um software de gestão, onde funcionará como um agregador, que possuirá vários módulos independentes, cada um para uma resolução de problemas específica. Com isso, facilitaremos o trabalho das partes competentes do _campus_, além de aumentar a integração entre servidores e discentes, peças fundamentais para o funcionamento da instituição.

O sistema comportará diversas funções. Destacam-se entre elas o controle de entrada e saída dos equipamentos dos laboratórios, quadro de horários de monitores, gerenciamento do almoxarifado, entre outros. Para exemplificarmos a funcionalidade do nosso sistema, optamos por criar o controle de equipamentos dos laboratórios, abrindo possibilidade para aperfeiçoamento e futura expansão.

**2. JUSTIFICATIVA DO PROJETO**

Primeiramente, é necessário contextualizar acerca da definição de gestão. Gestão significa gerenciamento, administração, onde existe uma instituição, uma empresa ou uma entidade social de pessoas a ser gerida ou administrada. Sabendo-se disso, devemos ainda saber o conceito e o papel da gestão no âmbito educacional: Gestão escolar é um sistema de organização interno da escola, envolvendo todos os setores que estão relacionados com as práticas escolares. Desta forma, a gestão escolar busca garantir um desenvolvimento socioeducacional eficaz na instituição de ensino.

 A gestão escolar é constituída por quatro pilares principais, que são: gestão pedagógica, gestão administrativa, gestão financeira e gestão de recursos humanos. Nosso projeto abrangerá dois desses pilares: gestão administrativa e gestão de recursos humanos. Inicialmente, o sistema contará com um ambiente para controle de estoque, o qual está relacionado à gestão administrativa do _campus_. Porém, devido ao fato do sistema de gestão que será produzido ser expansível, poderá, no futuro, abranger o âmbito de gestão de recursos humanos, como por exemplo, o controle de horários dos monitores e o agendamento de salas.

O _Campus_ Arraial do Cabo, sendo uma instituição de tecnologia e ensino, precisa fundamentalmente de um sistema automatizado para controle de gestão. A não existência de um sistema como este demonstra uma deficiência que nosso instituto sofre na sua essência. Por conta disso, acreditamos ser mais que necessário a implementação de um sistema como este que será produzido.

**3. OBJETIVO(S)**

3.1. Objetivo Geral do Trabalho

Impulsionar o desenvolvimento de outros sistemas inteligentes capazes de sanar os problemas manuais presentes nas diversas áreas da escola, além do fluxo de materiais dos laboratórios.

Proporcionar ao _campus_ maior integração no que tange a gestão do mesmo.

3.2 **.** Objetivos Específicos

Verificar os principais problemas administrativos do _campus_. Através de um software capaz de agilizar o processo administrativo local, fica fácil verificar onde está ocorrendo a maior falha no que tange à gestão ou em qual área o processo demora mais para ser executado.

Propor uma solução informatizada para esses problemas. Utilizando um sistema informatizado, muitos dos recursos físicos serão poupados neste processo, ocasionando uma redução de gastos no _campus_. Por exemplo, a quantidade de folhas utilizadas como fichas para relatar problemas nos laboratórios poderão ser utilizadas para imprimir materiais para os alunos.

Criar uma plataforma web capaz de facilitar a resolução desses problemas, permitindo um acesso simples e portátil para os membros da administração do _campus_.

Exemplificar através do controle de entrada e saída dos equipamentos dos laboratórios.

Aplicar essa plataforma no _campus_ ainda no ano de lançamento.

**4. METODOLOGIA**

O primeiro passo será um levantamento de requisitos, para que possamos saber e analisar quais são os principais pontos que apresentam problemas de gestão no nosso _campus_. Com isso, conseguiremos direcionar o desenvolvimento da nossa aplicação para que possa atender e solucionar de forma mais precisa os pontos do levantamento.  Após essa etapa, e já com as bases definidas, começaremos o desenvolvimento.

O software será desenvolvido na web, possibilitando a integração entre diversos sistemas operacionais, facilitando assim o acesso de todos ao sistema.

As principais tecnologias usadas no desenvolvimento do sistema são as seguintes:

JavaScript. Foi escolhido por ser uma linguagem simples de se utilizar e que ao mesmo tempo permite o desenvolvimento de aplicações complexas e de alto desempenho. Por ser a linguagem mais popular atualmente, está à nossa disposição uma gama de ferramentas de desenvolvimento de código aberto que nos permite facilmente desenvolver um aplicativo com as tecnologias mais modernas com uma grande facilidade.  Além disso, o uso da mesma linguagem no _back-end_ e no _front-end_ nos garante uma facilidade de manutenção e documentação do código_._

O Bootstrap será a framework CSS escolhida para o projeto. Com ele será possível acelerar o desenvolvimento dos elementos gráficos do site, por exemplo, menus, tabelas, formulários, etc.

O NodeJS será a plataforma base do projeto. O mesmo nos permite executar o JavaScript no servidor e assim administrar as dependências do projeto, renderizar as páginas web e processar requisições que irão acessar ou modificar o banco de dados.

Express.js. Foi a framework escolhida para o processamento de requisições HTTP ao servidor, isto é, as requisições que farão a consulta e a modificação de dados no banco.

React.js. Foi a _framework_ web escolhida para o desenvolvimento da interface gráfica do GestIF. Criada pelo time do Instagram e mantida e utilizada pelo Facebook, o React é uma _framework_ muito popular - a segunda mais popular - e madura. React nos permite trabalhar com _web components_, ou seja, o encapsulamento de componentes da aplicação permitindo sua reutilização.  Além disso, o React é uma framework declarativa, ou seja, não precisamos nos preocupar quanto a transição da interface para se adequar a novos dados, apenas mude os dados e o React automaticamente lida com o processo de atualizar e renderizar a interface.

Next.js é uma ferramenta que nos permite trabalhar com React com o mínimo de esforço. O Next também gerencia a renderização da aplicação no lado do servidor, ou seja, todo o processamento dos componentes do React ocorre no servidor e navegador do usuário recebe o HTML já renderizado. Isso garante uma aplicação mais leve e consequentemente uma experiência de navegação mais fluida. Ademais, Next nos provê um sistema de roteamento de páginas moderno e com _code-splitting_ - técnica que divide os códigos de cada página e eles só são carregados quando a página é requisitada.

GitHub é a plataforma que será utilizada para o controle de versão que facilitará o trabalho em grupo.

**5. RELAÇÃO ENSINO-PESQUISA-EXTENSÃO**

 O projeto desempenhará, em relação ao ensino, papel fundamental de apoio às atividades realizadas no instituto, contribuindo para o bom funcionamento dos afazeres acadêmicos, fazendo com que tanto a relação entre servidores e discentes seja aprimorada quanto o andamento cotidiano das aulas e atividades extracurriculares da instituição.

Ademais, mostrou-se de extrema importância os conhecimentos adquiridos durante a trajetória acadêmica no IFRJ para a realização desse projeto.

A própria realização deste projeto visa aprimorar as habilidades e competências relativas à pesquisa, já que com este temos o contato inicial com o método científico.

 A respeito da extensão, não foi encontrado nada substancial relativo ao projeto.

**6****. REFERÊNCIAS**

Node.js. A JavaScript runtime built on Chrome&#39;s V8 JavaScript engine. [https://nodejs.org/en/](https://nodejs.org/en/) Acessado em 15 de março de 2018.

React.js. A JavaScript library for building user interfaces. [https://reactjs.org/](https://reactjs.org/) Acessado em 15 de março de 2018.

Express.js. Node.js web application framework. [http://expressjs.com/](http://expressjs.com/) Acessado em 15 de março de 2018.

Next.js. Framework for server-rendered or statically-exported React apps. [https://github.com/zeit/next.js/](https://github.com/zeit/next.js/) Acessado em 15 de março de 2018.

HTML. HTML is the standard markup language used to create web pages and its elements form the building blocks of all websites. [https://www.w3.org/html/](https://www.w3.org/html/) Acessado em 15 de março de 2018.

CSS. Casting Style Sheets. [https:/](https://www.w3.org/Style/CSS/) [www.w3.org/Style/CSS/](http://www.w3.org/Style/CSS/) Acessado em 15 de março de 2018.

JavaScript. JavaScript is the programming language of HTML and the Web. [https://www.w3schools.com/js/](https://www.w3schools.com/js/) Acessado em 15 de março de 2018.

Bootstrap. The world&#39;s most popular framework for building responsive, mobile-first sites. [https://getbootstrap.com/docs/4.0/getting-started/introduction/](https://getbootstrap.com/docs/4.0/getting-started/introduction/) Acessado em 15 de março de 2018.

MongoDB. What is MongoDB?. [https://www.mongodb.com/what-is-mongodb](https://www.mongodb.com/what-is-mongodb) Acessado em 15 de março de 2018.

