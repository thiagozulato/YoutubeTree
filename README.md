# Items a implementar

- Front-End
- Testes
    - Necessário ainda desacoplar alguns serviço, como o YoutubeService, para permitir um teste melhor das integrações.
    - Também, o domínio está bem simples.
- Merge do Search Youtube / Banco de Dados
- Paginação do YoutubeService.
- Deploy
    - Configuração do Beanstalk foi toda executada, porém houve alguns problemas na configuração do manifesto de deploy

> **Motivo** Os items não foram implementados, pois foi necessário atender outras necessidades externas, durante o período dos testes.

# API

É possível executar a API localmente com Banco de Dados **InMemory**. Para isso, altere a tag **Database:Memory = true** no arquivo **appsettings.(*).json**

Caso false, é necessário configurar a string de conexão com o banco de dados, no caso, **Postgres**.

# Docker

Docker está sendo usado apenas para subir o banco de dados do Postgres, sem precisar instalar localmente.

Para subir os serviços do Banco
```
docker-compose up -d
```

### Serviços

- Postgres Database -> http://postgres:5432
- Postgres Admin -> http://localhost
	- Usuário: dev@gmail.com
	- Senha: 123456

Para se conectar ao Banco a partir do Postgres Admin

- Host -> postgres
- Database -> youtubetree
- User -> admin
- Password -> admin

# Migrations

As migrations estão dentro do projeto da API.

### Criar Migrations

> OBS: O CLI deve estar apontando para pasta raiz do projeto, onde se encontra o ***.sln**

```
dotnet ef migrations add Initial -p YoutubeTree.Data -s YoutubeTree.API
```

Na pasta raiz da API

```
dotnet ef database update -p YoutubeTree.Data -s YoutubeTree.API
```

Os scripts das Tabelas estão na pasta **/Script**
