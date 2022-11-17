let btndata = document.querySelector('#btndata');
let btnaut = document.querySelector('#btnaut');
let btndev = document.querySelector('#btndev');
let btnplan = document.querySelector('#btnplan');
let content = document.querySelector('#content');

btndata.addEventListener('click', () => {
    content.innerHTML = '<h1 class="glow">Análise de Dados</h1><h3>O que não é medido, não é gerido!</h3><h3>Hoje existem mais dispositivos conectados na rede do que pessoas no planeta Terra. A criação de informação digital nunca foi tão intensa e a segurança da informação nunca esteve tão em alta. Não há mais espaço para decisões tomadas com base no "achismo", por isto redizir as variáveis é a base para manter dados de qualidade para tomadas de decisão tanto no ambiente corporativo quanto na vida pessoal.</h3><h3>Para tratar e filtrar dados e estabelecer relações, utilizo Python pela versatilidade da bibliotecas Pandas, específica para cientistas de dados. Em alguns casos, opto por utilizar Openpyxl e até mesmo JavaScript, dependendo da plataforma e do formato do banco de dados do projeto.</h3>';
});

btnaut.addEventListener('click', () => {
    content.innerHTML = '<h1 class="glow">Automações de Softwares</h1><h3>Gandalf disse "faça o seu melhor com o tempo que lhe é dado" e sem dúvidas: mesmo que fossemos bilionários, "ainda" não é possível comprar o tempo e por este motivo as Automações de Softwares sairam da linha de produção, conquistando o mundo corporativo, mudando a realidades, otimizando processos e permitindo uma melhor gestão do tempo e de recursos.</h3><h3>Atuar de maneira assertiva e inteligente é essencial para administradores, por isto hoje desenvolvo soluções personalizadas BPM/RPA em Python e JavaScript para diferentes cenários e segmentos para que times reduzidos possam focar em atividades especializadas que agreguem valor ao negócio e permitem a sustentabilidade de empresas na realidade líquida do século XXI.</h3>';
});

btndev.addEventListener('click', () => {
    content.innerHTML = '<h1 class="glow">Desenvolvimento Web</h1><h3>Uma expansão necessária! A demanda por automações similares, despertou meu interesse na programação em nuvem. Precisei expandir meus conhecimentos em frontend, framework e tópicos de cybersegurança. Optei inicialmente por utilizar Flask (utilizada também por gigantes como Samsung, Netflix e Airbnb), o que abriu minha mente para um mundo de possibilidades. Nessa trajetória, também passei por projetos de Machine Learning.</h3><h3>Entendi que a ferramenta não é a chave, mas sim a capacidade de adaptar à necessidade do projeto porque assim como nas linguagens humanas, a lógica permite buscar semelhanças e "traduzir" uma linguagem em outra facilmente. Hoje tenho certeza que sou capaz de aprender qualquer coisa, por mais complexa que seja (pode ser que certos tópicos levem mais tempo rs).</h3>';
});

btnplan.addEventListener('click', () => {
    content.innerHTML = '<h1 class="glow">Planejamento</h1><h3>Atuar no planejamento financeiro em plena pandemia foi uma experiência transformadora. Com visão de otimização de processos e melhoria contínua, ferramentas como LSS e análise de dados fizeram parte do meu dia-a-dia e foram de extrema importância para analisar os cenários e processos de diferentes departamentos corporativos para desenvolver estratégias. Direcionar equipes e formar líderes trouxeram uma senação de missão cumprida.</h3><h3>Adaptar-se ao mundo digital, alinhar a cultura organizacional e normatizar processos é trabalhoso, mas fundamental para a saúde de qualquer empresa que queira se adequar à realidade do século XXI.</h3><h3>Hoje atuo com consultorias de melhoria contínua e tenho planos para fazer contratações em breve! Vamos manter contato ;)</h3>';
});