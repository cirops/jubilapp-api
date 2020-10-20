# JubilApp - Sistema de matrículas de alunos

## Descrição
API em Node.JS de matrículas de alunos em cursos.

## Configuração
Para executar este projeto, deve-se:
* Clonar o projeto na sua máquina (git clone);
* Executar "yarn" na raíz do projeto (para instalar as dependências);
* Ter uma instância do MongoDB no localhost, porta 27017;
* executar "yarn dev:server" na raíz do projeto;

## Endpoints
### Alunos

`GET /students?email={email}&name={name}`

`GET /students/:id`

`POST /students`
```json
{
	"name": "John Doe",
	"email": "john@doe.com",
	"birth_date": "2000-10-15"
}
```

`PUT /students/:id`
```json
{
  "name": "John Tre",
  "email": "john@tre.com",
  "birth_date": "2001-10-15",
}
```

`DELETE /students/:id`

___
### Cursos
`GET /courses`

`GET /courses/:id`

`POST /courses`
```json
{
	"title": "Math 101",
	"description": "Basic Arithmetics"
}
```

`PUT /courses/:id`
```json
{
	"title": "Math 101",
	"description": "Basic Calculus"
}
```

`DELETE /courses/:id`

___
## Matrículas
`GET /enrollments`

`GET /enrollments/:id`

`POST /enrollments`
```json
{
	"student_id": "5f8b0237acd34e0444890e17",
	"course_id": "5f8b32e0bdfcaa36b3136c45"
}
```
`PUT /enrollments/:id`
```json
{
	"student_id": "5f8b0237acd34e0444890e17",
	"course_id": "5f8b32e0bdfcaa36b3136c45"
}
```

`DELETE /enrollments/:id`
___
## Estrutura do código:
Este projeto foi organizado em módulos, visando uma arquitetura DDD (Domain Driven Development), de modo a facilitar a expansão do projeto no futuro.
