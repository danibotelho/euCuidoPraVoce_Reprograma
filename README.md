
# Eu Cuido Pra Você - 😺🐶🐰🐥🐹🐦

**# documentação**<br>
**## demandas do sistema**


## Apresentação

Essa API foi desenvolvida para ajudar tutores de animais que precisam se ausentar de casa por determinado período e precisam de alguém que cuide de seus bichos, garantindo a permanência no seu ambiente familiar. Sendo assim tem como objetivo facilitar a conexão entre pessoas que precisam do serviço de cuidados de animais e cuidadores que estão disponíveis pelas proximidades. 

## Tecnologias usadas 🐾

- JavaScript
- Node.js
- NPM
- Express, dotenv, mongoose, cors
- Postman
- Mongodb Atlas
- Github, Heroku

<br>

## Arquitetura MVC 🐾

- 📁 euCuidoPraVoce_Reprograma
    - 📁src
        - 📁controllers
            - 📄cuidadorController.js
            - 📄tutorController.js
        - 📁data
            - 📄database.js
        - 📁models
            - 📄cuidadorSchema.js
            - 📄tutorSchema.js
        - 📁routes
            - 📄cuidador.route.js
            - 📄tutor.routes.js
        - 📄app.js
    - 📄 .env
    - 📄 .gitignore
    - 📄 package
    - 📄 server.js

<br>

## **Métodos** 🐾

Requisições para a API devem seguir os padrões:

- GET

    Faz a requisição de dados para API e o retorno dos dados será feito de acordo com a rota usada. 

- POST

    Requisição utilizada para criar um cadastro.

- PATCH

    Requisição utilizada para atualizar dados do cadastro.

- DELETE

    Requisição para excluir um cadastro.

<br>

## Rotas/EndPoints 🐾

url - [https://eucuidopravoce.herokuapp.com/](https://eucuidopravoce.herokuapp.com/)

## **Cuidador** 🙋🏾

- **url-base: https://eucuidopravoce.herokuapp.com/cuidador**
- ***GET - "/"***
    - Rota que retorna uma lista com todos os cadastros de cuidadores.
      HTTP 200 OK.
- ***GET - "/animal"***
    - Rota que retorna os cadastros com o animal usado de parâmetro.
    Deve se usar como parâmetro o "animal" que deseja o retorno(Gatos,Cachorros,Coelhos…).
    HTTP 200 OK
- ***GET - "/bairro"***
    - Rota que retorna os cadastros com o bairro usado de parâmetro.
    Deve se usar como parâmetro o "bairro" que deseja no retorno(Damas, Montese...).
    HTTP 200 OK
- ***GET - "/bairroAnimal"***
    - Rota que retorna os cadastros com o bairro e animal  usado de parâmetro.
    Deve se usar como parâmetro o "bairro" && "animal" que deseja filtrar.
    HTTP 200 OK
- ***GET - "/match"***
    - Rota que retorna cuidadores e tutores que possuem animais e bairro em comum.
    Deve se usar como parâmetro o "bairro" && "animal" que deseja filtrar.
    HTTP 200 OK    
- ***POST - "/cadastrar"***
    - Rota que recebe um novo  cadastro adiciona ele a base  e retorna o item criado.HTTP 201 CREATED

- ***PATCH - "/atualizar"***
    - Rota que atualiza o cadastro do cuidador no sistema de acordo com o dado que ele deseja atualizar.
    O parâmetro de pesquisa que deve ser usado é o CPF.
    HTTP 200 OK

```bash
  [ 
    {	
      “telefone”: String,
     	“estado”: String,
      “cidade”: String,
      “bairro”: String,
      “animal”: String,
      “valorHora”: Number,
      “formaPag”: String,
      "descricao”:String
  	}
 ]

```
   
- ***DELETE /delete***
    - Rota que deleta um cadastro da base de dados.
    O parâmetro de pesquisa que deve ser usado é o CPF.
    HTTP 200 OK

- **Dados para Collection 'cuidadors'**
    - **nome** : "Nome do cuidador"
    - **cpf**: "CPF do cuidador"
    - **idade**: "idade"
    - **genero**: "gênero"
    - **telefone**: "telefone pra contato"
    - **estado**: "estado"
    - **cidade**: "cidade"
    - **bairro**: "bairro"
    - **animal**: "animais que a pessoa atende"
    - **valorHora**: "Valor da hora de atendimento"
    - **formaPag**: "forma de pagamento que a pessoa aceita"
    - **descricao**: "espaço para alguma informação adiciona, como por exemplo especialização no cuidado de algum animal especifico "

**Retorno em JSON:**

```bash
[  
  {
		criadoEm: "2021-07-07T15:50:31.726Z",
		_id: "60e5cdb5bf280c0015ba73bc",
		nome: "Carolina Giovanna",
		cpf: "70604408366",
		idade: "26",
		genero: "Feminino",
		telefone: "85987623630",
		estado: "CE",
		cidade: "Fortaleza",
		bairro: "Damas",
		animal: "Cachorros",
		valorHora: 35,
		formaPag: "Pix, à vista",
		descricao: "Lorem ipsum vivamus consectetur aenean rutrum",
		__v: 0
		}
]
```

## **Tutor** 🤷🏽

- **url-base: https://eucuidopravoce.herokuapp.com/tutor**
- ***GET - "/"***
    - Rota que retorna uma lista com todos os cadastros de tutores.
    HTTP 200 OK.
- ***GET - "/animal"***
    - Rota que retorna os cadastros com o animal usado de parâmetro.
    Deve se usar como parâmetro o "animal" que deseja o retorno(Gatos,Cachorros,Coelhos…).
    HTTP 200 OK
- ***GET - "/bairro"***
    - Rota que retorna os cadastros com o bairro usado de parâmetro.
    Deve se usar como parâmetro o "bairro" que deseja no retorno(Damas, Montese...).
    HTTP 200 OK
- ***GET - "/match"***
    - Rota que retorna tutores e cuidadores que possuem animais e bairro em comum.
    Deve se usar como parâmetro o "bairro" && "animal" que deseja filtrar.
    HTTP 200 OK     
- ***POST - "/cadastrar"***
    - Rota que recebe uma novo cadastro e adiciona ele a base  e retorna o item criado.
    HTTP 201 CREATED

- ***PATCH - "/atualizar"***
    - Rota que atualiza o cadastro do tutor no sistema de acordo com os dados que ele deseja atualizar.
    O parâmetro de pesquisa que deve ser usado é o CPF.
    HTTP 200 OK

```bash
  [  
 	 {	    
      “telefone”: String, true,
    	“estado”: String, true,
    	“cidade”: String, true,
    	“bairro”: String, true,
    	“animal”: String, true,
    	“qntsDias”: Number, true,
    	“descricao”:String, true
   	}
  ]
```

- ***DELETE /delete***
    - Rota que deleta um cadastro da base de dados.
    O parâmetro de pesquisa que deve ser usado é o CPF.
    HTTP 200 OK

- **Dados para Collection 'tutor'**
    - **nome** : "Nome do responsável pelo animal"
    - **cpf**: "CPF do responsável"
    - **idade**: "idade"
    - **genero**: "gênero"
    - **telefone**: "telefone pra contato"
    - **estado**: "estado"
    - **cidade**: "cidade"
    - **bairro**: "bairro"
    - **animal**: "informar o tipo de animal que precisa de atendimento"
    - **qntsDias**: "número de dias que vai precisar do atendimento"
    - **descricao**: "Informar o temperamento do animal, se precisa de algum atendimento especifico"

**Retorno em JSON:**

```bash
[  
  {
			criadoEm: "2021-07-08T23:30:24.714Z",
			_id: "60e37792f530a60fc122782a",
			nome: "Laís Alícia Sônia Moura",
			cpf: "91188942328",
			idade: "34",
			genero: "Feminino",
			telefone: "85985225855",
			estado: "CE",
			cidade: "Fortaleza",
			bairro: "Vila Velha",
			animal: "Gatos",
			qntsDias: 3,
			descricao: "Lorem ipsum est vel lorem curabitur.",
			__v: 0
	}
]
```

## ...
