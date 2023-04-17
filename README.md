# :sparkles: Projeto App de Receitas

Este projeto é um aplicativo web de receitas que utiliza React Hooks e Context API. 
Foi desenvolvido em grupo, utilizando metodologias ágeis (scrum e kanban), como desafio final do módulo de front-end da [Trybe](https://betrybe.com)  

## Sumário

- [Sobre o projeto](#sobre-o-projeto)
  - [Contexto](#man_technologist-contexto)
  - [Funcionalidades](#funcionalidades)
  - [Demo](#demo)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Instalação](#instalação)
  - [Rodando testes](#rodando-os-testes)
- [Uso](#uso)
  - [Documentação da API](#documentação-da-api)
- [Desenvolvedores](#desenvolvedores)


<br/>

# Sobre o projeto

## :man_technologist: Contexto  

O nosso desafio nesse projeto foi desenvolver a interface em React js de um sistema que permite visualizar, buscar, filtrar, favoritar, compartilhar e acompanhar o processo de preparação de receitas e drinks. A base de dados são 2 APIs distintas, uma para comidas e outra para bebidas.

## Funcionalidades

- Buscar receitas por ingrediente, nome ou primeira letra;
- Explorar receitas por categoria, origem ou surpresa;
- Acessar os detalhes de cada receita, com ingredientes, instruções e vídeo;
- Iniciar, pausar e finalizar o preparo de uma receita;
- Favoritar e desfavoritar receitas;
- Compartilhar receitas nas redes sociais;
- Acessar o perfil do usuário com as receitas favoritas e feitas;

## Demo
> *Screenshot em breve*

[Protótipo no Figma](https://www.figma.com/file/9WXNFMewKRBC5ZawU1EXYG/%5BProjeto%5D%5BFrontend%5D-Recipes-App?node-id=0%3A1&t=flL48tUQI6vmnPEY-1)

Deploy: [https://ligiabicalho.github.io/app-receitas/](https://ligiabicalho.github.io/app-receitas/)

<p align="right"><a href="#sparkles-projeto-tech-futebol-clube-soccer">(De volta ao topo)</a></p>

## Tecnologias utilizadas

- HTML
- CSS
- JavaScript
- React
- React Router
- React Hooks
- Context API
  ### Testes
  - Jest
  - React Testing Library

## Instalação do projeto localmente

Para instalar o projeto localmente, siga os seguintes passos:

1. Clone o repositório
```
git clone git@github.com:ligiabicalho/app-receitas.git
```
2. Entre na pasta do projeto
```
cd app-receitas
```
3. Instale as dependências
```
 npm install
```
4. Inicie o servidor local
```
 npm start
```

<p align="right"><a href="#sparkles-projeto-tech-futebol-clube-soccer">(De volta ao topo)</a></p>

## Requisitos do projeto
> *Clique na seta para ver a lista de requisitos correspondente a cada tela.*

<details>
  <summary><strong>Tela de login</strong></summary> 

1. Crie todos os elementos que devem respeitar os atributos descritos no protótipo para a tela de login.  
2. Desenvolva a tela de maneira que a pessoa consiga escrever seu email no input de email e sua senha no input de senha.  
3. Desenvolva a tela de maneira que o formulário só seja válido após um email válido e uma senha de mais de 6 caracteres serem preenchidos.  
4. Após a submissão do formulário, salve no localStorage o e-mail da pessoa usuária na chave `user`.  
5. Redirecione a pessoa usuária para a tela principal de receitas de comidas após a submissão e validação com sucesso do login.  
</details>

<details>
  <summary><strong>Tela principal de receitas</strong></summary> 

6. Implemente o header de acordo com a necessidade de cada tela.
7. Redirecione a pessoa usuária para a tela de perfil ao clicar no botão de perfil.
8. Desenvolva o botão de busca que, ao ser clicado, a barra de busca deve aparecer. O mesmo serve para escondê-la.
9. Implemente os elementos da barra de busca respeitando os atributos descritos no protótipo.
10. Implemente 3 radio buttons na barra de busca: Ingredient, Name e First letter.
11. Busque na API de comidas caso a pessoa esteja na página de comidas, e na API de bebidas caso esteja na de bebidas.
12. Caso a busca retorne mais de uma receita, renderize as 12 primeiras encontradas, exibindo a imagem e o nome de cada uma.
13. Implemente o menu inferior posicionando-o de forma fixa e contendo 2 ícones: um para comidas e outro para bebidas.
14. Exiba o menu inferior apenas nas telas indicadas pelo protótipo.
15. Redirecione a pessoa usuária para a tela correta ao clicar em cada ícone no menu inferior.
16. Carregue as 12 primeiras receitas de comidas ou bebidas, uma em cada card.
17. Implemente os botões de categoria para serem utilizados como filtro.
18. Implemente o filtro das receitas por meio da API ao clicar no filtro de categoria.
19. Implemente o filtro como um toggle, o qual se for selecionado novamente, o app deve retornar as receitas sem nenhum filtro.
20. Redirecione a pessoa usuária ao clicar no card para a tela de detalhes, que deve mudar a rota e conter o id da receita na URL.
21. Realize uma request para a API passando o `id` da receita que deve estar disponível nos parâmetros da URL.
</details>

<details>
  <summary><strong>Tela de detalhes da receita</strong></summary> 

22. Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes seguidos pelas quantidades, instruções, um vídeo do youtube incorporado e recomendações.
23. Implemente as recomendações. Para receitas de comida, a recomendação deverá ser bebida, já para as receitas de bebida a recomendação deverá ser comida.
24. Implemente os 6 cards de recomendação, mostrando apenas 2. O scroll é horizontal, similar a um `carousel`.
25. Desenvolva um botão de nome "Start Recipe" que deve ficar fixo na parte de baixo da tela o tempo todo.
26. Implemente a solução de forma que, caso a receita já tenha sido feita, o botão "Start Recipe" desapareça.
27. Redirecione a pessoa usuária caso o botão "Start Recipe" seja clicado, a rota deve mudar para a tela de receita em progresso.
</details>

<details>
  <summary><strong>Tela de receita em progresso</strong></summary> 

28. Desenvolva a tela de modo que contenha uma imagem da receita, o título, a categoria em caso de comidas e se é ou não alcoólico em caso de bebidas, uma lista de ingredientes com suas respectivas quantidades e instruções.
29. Desenvolva um checkbox para cada item da lista de ingredientes.
30. Salve o estado do progresso, que deve ser mantido caso a pessoa atualize a página ou volte para a mesma receita.
31. Implemente a solução de modo que o botão de finalizar receita ("Finish Recipe") só pode estar habilitado quando todos os ingredientes estiverem _"checkados"_ (marcados).
</details>

<details>
  <summary><strong>Tela de receitas feitas</strong></summary> 

32. Implemente os elementos da tela de receitas feitas respeitando os atributos descritos no protótipo
33. Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, a data em que a pessoa fez a receita, as 2 primeiras tags retornadas pela API e um botão de compartilhar
34. Desenvolva a tela de maneira que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, o nome, se é alcoólica, a data em que a pessoa fez a receita e um botão de compartilhar
35. Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
36. Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
37. Redirecione para a tela de detalhes da receita caso seja clicado na foto ou no nome da receita
</details>

<details>
  <summary><strong>Tela de receitas favoritas</strong></summary>

38. Implemente os elementos da tela de receitas favoritas (cumulativo com os atributos em comum com a tela de receitas feitas), respeitando os atributos descritos no protótipo
39. Desenvolva a tela de modo que, caso a receita do card seja uma comida, ela deve possuir: a foto da receita, nome, categoria, nacionalidade, um botão de compartilhar e um de "desfavoritar"
40. Desenvolva a tela de modo que, caso a receita do card seja uma bebida, ela deve possuir: a foto da receita, nome, se é alcoólica ou não, um botão de compartilhar e um de "desfavoritar"
41. Desenvolva a solução de modo que o botão de compartilhar deve copiar a URL da tela de detalhes da receita para o clipboard
42. Desenvolva a solução de modo que o botão de "desfavoritar" deve remover a receita da lista de receitas favoritas do `localStorage` e da tela
43. Implemente 2 botões que filtram as receitas por comida ou bebida e um terceiro que remove todos os filtros
44. Redirecione a pessoa usuária ao clicar na foto ou no nome da receita, a rota deve mudar para a tela de detalhes daquela receita
</details>

<details>
  <summary><strong>Tela de perfil do usuário</strong></summary>

45. Implemente os elementos da tela de perfil respeitando os atributos descritos no protótipo
46. Implemente a solução de maneira que o e-mail da pessoa usuária deve estar visível
47. Implemente 3 botões: um de nome "Done Recipes", um de nome "Favorite Recipes" e um de nome "Logout"
48. Redirecione a pessoa usuária que, ao clicar no botão de "Done Recipes", a rota deve mudar para a tela de receitas feitas
49. Redirecione a pessoa usuária que, ao clicar no botão de "Favorite Recipes", a rota deve mudar para a tela de receitas favoritas
50. Redirecione a pessoa usuária que ao clicar no botão de "Logout", o `localStorage` deve ser limpo e a rota deve mudar para a tela de login
</details>

<p align="right"><a href="#sparkles-projeto-tech-futebol-clube-soccer">(De volta ao topo)</a></p>

## Status de desenvolvimento

O projeto foi entregue dentro do esperado, no entanto ainda carece de algumas melhorias na estilização e apresenta bug no botão para iniciar/finalizar receitas que precisará ser refatorado.

Além disso, os requisitos avaliativos exigia que o menu inferior estivesse presente apenas na tela principal de receitas. No entanto, sua presença é útil nas demais telas, para facilitar o retorno do usuário à busca de receita, e essa funcionalidade ainda precisa ser implementada.


## Desenvolvedores

<table>
  <tr>
    <td align="center">
      <a href="https://github.com/ligiabicalho">
        <img src="https://avatars.githubusercontent.com/u/108960742" width="100px" alt="Ligia Bicalho"/>
        <p>Lígia Bicalho</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/victorAssuncaoReis">
        <img src="https://avatars.githubusercontent.com/u/108594533?v=4" width="100px" alt="Victor Reis"/>
        <p>Victor Reis</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/kadu2229">
        <img src="https://avatars.githubusercontent.com/u/91919611?v=4" width="100px" alt="Carlos Eduardo"/>
        <p>Carlos Eduardo</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/sahdibernardi">
        <img src="https://avatars.githubusercontent.com/u/108948808?v=4" width="100px" alt="Sahra Di Bernardi"/>
        <p>Sahra Di Bernardi</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/marcelsguima">
        <img src="https://avatars.githubusercontent.com/u/106491497?v=4" width="100px" alt="Marcel Guimarães"/>
        <p>Marcel Guimarães</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/PauloVitorMartins">
        <img src="https://avatars.githubusercontent.com/u/109085421?v=4" width="100px" alt="Paulo Vitor Martins"/>
        <p>Paulo Vitor Martins</p>
      </a>
    </td>
    <td align="center">
      <a href="https://github.com/trybe-tech-ops">
        <img src="https://avatars.githubusercontent.com/u/82593112?v=4" width="100px" alt="Trybe"/>
        <p>Trybe</p>
      </a>
    </td>
  </tr>
</table>

## Agradecimentos

Agradeço à Trybe por nos proporcionar esta oportunidade de aprendizado e desenvolvimento de habilidades técnicas e de trabalho em equipe. 
Também agradeço aos colegas da equipe pelas trocas, aos instrutores e mentores que nos apoiaram e orientaram durante o projeto.

<p align="right"><a href="#sparkles-projeto-tech-futebol-clube-soccer">(De volta ao topo)</a></p>