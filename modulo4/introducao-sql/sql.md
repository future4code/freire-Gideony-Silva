### Exercício 1:
````
a) O float é forma de número não inteiro

b) SHOW DATABASES, mostra a informação do schema, SHOW TABLES mostra o nome da tabela

c) Mostra o detalhe da tabela de actor,
````

### Exercício 2:

a) 
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
"002",
"Glória Pires",
1200000,
"1963-08-23",
"female"
)
```
b)
**id** já cadastrado:
```
INSERT INTO Actor (id, name, salary, birth_date, gender)
VALUES(
  "002",
  "Juliana Paz",
  160000,
  "1979-05-26",
  "female"
)
```

Erro:
```
Código de Erro: 1062. Entrada duplicada '002' para a chave 'PRIMARY' 
```

### Exercício 3

a)
```
SELECT * FROM Actor WHERE gender = "female";
```
b)
```
SELECT salary FROM Actor WHERE name = "Tony Ramos";
```
c)
```
SELECT * FROM Actor WHERE gender = "invalid";
```
- Retorna uma linha nula, pois não existe um registro que atende a condição passada.

d)
```
SELECT id, name, salary FROM Actor WHERE salary <= 500000;
```
e)
Código errado:
```
SELECT id, nome FROM Actor WHERE id = "002"
```
Err0:
```
Error Code: 1054. Unknown column 'nome' in 'field list'
Código de Erro: 1054. Coluna 'nome' desconhecida em 'field list'.
```
- O erro acima ocorreu porque não existe uma coluna com nome 'nome' o correto é 'name'.

Solução:
```
SELECT id, name FROM Actor WHERE id = "002"
```

### Exercíco 4
a)
```
 A _query_ acima vai buscar na tabela Actor os registros que tem às condições. No caso ela vai verifica o **name** e retorna os que possuem os valores.
```
b)
``` 
SELECT * FROM Actor
WHERE (name NOT LIKE "A%") AND salary > 350000;
```
c)
```
SELECT * FROM Actor
WHERE (name LIKE "%G%");
```
d)
```
SELECT * FROM Actor
WHERE (name LIKE "%G%" or name Like "%A%" && salary BETWEEN 350000 AND 900000 );
```

### Exercício 5
a)
```
CREATE TABLE Movies (
    id VARCHAR(255) PRIMARY KEY,
    name VARCHAR (255) NOT NULL,
    synopsis TEXT NOT NULL,
    release_date DATE NOT NULL,
    rating INT NOT NULL,
	CHECK (rating BETWEEN 0 AND 10)
);
```

b), c), d), e)

```
INSERT INTO Movies (id, name, synopsis, release_date, rating)
VALUES(
"001",
"Se Eu Fosse Você",
"Cláudio e Helena são casados há muitos anos e enfrentam a rotina do casamento. Um dia eles são atingidos por um fenômeno inexplicável e trocam de corpos.",
"2006-01-06",
7
)
```
