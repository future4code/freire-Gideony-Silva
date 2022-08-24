
## Exercício 1:
a)

```
ALTER TABLE Actor DROP COLUMN salary;
```

Ao executar o código acima a coluna **salary** será excluída.

b)
```
ALTER TABLE Actor CHANGE gender sex VARCHAR(6);
```
Ao executar o código acima o campo **gender** será alterado para **sexy** que será do tipo VARCHAR(6).

c)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(255);
```

Ao executar o código acima ele irá alterar apenas o tipo do campo **gender**.

d)

```
ALTER TABLE Actor CHANGE gender gender VARCHAR(100)
```