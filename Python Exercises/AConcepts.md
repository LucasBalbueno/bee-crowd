# 🐍 Python Fundamentos – Guia Rápido

Este guia apresenta os principais conceitos de **Python**.

---

## Declaração de Variáveis

Python é **dinamicamente tipado**: não é necessário declarar o tipo.

```python
idade = 25  # int
nome = "Ana"  # str
altura = 1.82  # float
ativo = True  # bool

print(type(idade))  # <class 'int'>
```

---

## Manipulação de Strings

Strings são **imutáveis**: toda operação que “altera” uma string retorna **uma nova** string.

### Fatiamento (slice)

```python
s = "Python é top"
print(s[0])  # P
print(s[-1])  # p (último)
print(s[0:6])  # Python (início incluso, fim exclusivo)
print(s[7:])  # "é top"
print(s[:6:2])  # "Pto" (passo 2)
print(s[::-1])  # "pot é nohtyP" (string invertida)
```

### Métodos essenciais

```python
s = "  banana,maçã,uva  "

print(s.strip())  # remove espaços nas pontas -> "banana,maçã,uva"
print(s.lstrip())  # remove à esquerda
print(s.rstrip())  # remove à direita

# quebra e junta
frutas = s.strip().split(",")  # ['banana', 'maçã', 'uva']
print("-".join(frutas))  # "banana-maçã-uva"

# substituição
t = "abcabc".replace("a", "A", 1)
print(t)  # "Abcabc" (apenas 1 ocorrência)

# alteração de caixa
x = "PyTHon"
print(x.lower())  # "python"
print(x.upper())  # "PYTHON"
print(x.capitalize())  # "Python"
print(x.title())  # "Python" (inicial maiúscula de cada palavra)
print(x.swapcase())  # "pYthON"
print("straße".casefold())  # "strasse" (casefold para comparações)
```

### Busca e validação

```python
s = "arquivo_final_v2.txt"
print(s.startswith("arq"))  # True
print(s.endswith(".txt"))  # True
print(s.find("final"))  # 8 (ou -1 se não achar)
print(s.count("v"))  # 1

# Métodos is*
print("123".isdigit())  # True (todos os chars são dígitos)
print("abc".isalpha())  # True (apenas letras)
print("abc123".isalnum())  # True (letras ou dígitos)
print("   ".isspace())  # True (apenas espaços/brancos)
```

### Alinhamento e preenchimento

```python
n = "42"
print(n.zfill(5))  # "00042"
print("hi".rjust(5, "."))  # "...hi"
print("hi".ljust(5, "."))  # "hi..."
print("hi".center(6, "-"))  # "--hi--"
```

### Formatação de strings

#### f-strings

Sintaxe moderna (Python 3.6+), **rápida e legível**. Suporta expressões e especificadores de formato.

```python
nome = "Lucas"
valor = 1234.5
print(f"Olá, {nome}! Valor = {valor:.2f}")  # "Olá, Lucas! Valor = 1234.50"
print(f"2 + 2 = {2 + 2}")  # expressões
print(f"Largura 10: |{nome:>10}|")  # alinhado à direita
print(f"Milhar: {1000000:,}")  # 1,000,000 (padrão EUA)
```

<br>

#### str.format()

Funciona em versões antigas e útil para **placeholders posicionais e nomeados**.

```python
# Posicionais
print("Texto: {}, e {}".format("A", "B"))  # "Texto: A, e B"
print("{0} - {1} - {0}".format("X", "Y"))  # "X - Y - X"

# Nomeados
print("Olá, {nome}! Você tem {idade}.".format(nome="Ana", idade=22))

# Misto + acesso por índice/chave
dados = {"x": 3.14159, "y": 7}
print("x={x:.2f}, y={y}".format(**dados))  # "x=3.14, y=7"
lista = ["um", "dois"]
print("Primeiro: {0[0]}".format(lista))  # "Primeiro: um"

# Especificadores
print("Alinhar: |{:>8}| |{:<8}| |{:^8}|".format("a", "b", "c"))
print("Hex: {:#x}".format(255))  # "0xff"
print("Percentual: {:.2%}".format(0.1234))  # "12.34%"
```

---

## Condições

```python
idade = 18
if idade >= 18:
    print("Maior de idade")
elif idade > 12:
    print("Adolescente")
else:
    print("Criança")
```

---

## Loops (`for` e `while`)

```python
for i in range(3):
    print(i)  # 0, 1, 2

for letra in "Python":
    print(letra)

contador = 0
while contador < 3:
    print(contador)
    contador += 1
```

> Controle de fluxo útil: `break`, `continue`, e o pouco conhecido `for/while ... else` (executa o `else` se o loop NÃO
> quebrou por `break`).

---

## Operador Ternário

```python
idade = 20
status = "Maior" if idade >= 18 else "Menor"
print(status)
```

---

## Funções

```python
def soma(a, b=0):  # valor padrão
    '''Retorna a soma de a e b.'''
    return a + b


print(soma(5, 3))  # 8
print(soma(5))  # 5
```

### Parâmetros, *args e **kwargs

- `*args`: empacota **argumentos posicionais extras** em uma **tupla**.
- `**kwargs`: empacota **argumentos nomeados extras** em um **dicionário**.
- Úteis para APIs flexíveis, repassar argumentos e criar wrappers/decorators.

```python
def log_evento(evento, *args, **kwargs):
    print("Evento:", evento)
    print("args:", args)  # tupla
    print("kwargs:", kwargs)  # dicionário


log_evento("login", "user123", ip="127.0.0.1", sucesso=True)


# Evento: login
# args: ('user123',)
# kwargs: {'ip': '127.0.0.1', 'sucesso': True}

# Desempacotamento ao chamar
def conectar(host, porta, timeout=5):
    print(host, porta, timeout)


params = ("localhost", 5432)
opcoes = {"timeout": 10}
conectar(*params, **opcoes)  # localhost 5432 10
```

Parâmetros **somente posicionais** e **somente nomeados**:

```python
def area_circulo(raio, /, *, pi=3.14159):
    return pi * raio * raio


area_circulo(2)  # ok (raio posicional)
area_circulo(raio=2)  # ❌ TypeError (raio é somente posicional)
area_circulo(2, pi=3.14)  # ok (pi é somente nomeado)
```

### Boas práticas e armadilhas comuns

- **Não use mutáveis como padrão** (lista/dict/set). Prefira `None`.

```python
def adicionar(item, lista=None):
    if lista is None:
        lista = []
    lista.append(item)
    return lista
```

- Escreva **docstrings** e **type hints** para legibilidade:

```python
def dividir(a: float, b: float) -> float:
    '''Divide a por b e retorna um float.'''
    if b == 0:
        raise ZeroDivisionError("b não pode ser zero")
    return a / b
```

---

## Exceções

```python
try:
    x = int("abc")
except ValueError as e:
    print("Erro de conversão:", e)
else:
    print("Executa se NÃO houve exceção")
finally:
    print("Sempre executa (fechar arquivos/conexões, etc.)")
```

> Capture **exceções específicas** sempre que possível. Evite `except Exception:` sem necessidade.

---

## Estruturas de Dados

### Listas (`list`)

Listas são **mutáveis** e usadas para coleções ordenadas de itens.

```python
frutas = ["maçã", "banana", "uva"]
frutas.append("laranja")
frutas.extend(["pera", "kiwi"])
frutas.insert(1, "abacaxi")
frutas.remove("banana")
print(frutas[0], frutas[-1])  # "maçã", "kiwi"
print(sorted(frutas))  # nova lista ordenada
frutas.sort(reverse=True)  # ordena in-place desc
```

### Tuplas (`tuple`)

Tuplas são **imutáveis** e geralmente usadas para dados heterogêneos ou como chaves de dicionário.

```python
ponto = (10, 20)
x, y = ponto  # desempacotamento
# ponto[0] = 99  # ❌ tuplas são imutáveis
```

### Conjuntos (`set`)

Conjuntos são coleções **não ordenadas** e **sem duplicatas**. Operações matemáticas como união, interseção e diferença
são comuns.

```python
a = {1, 2, 2, 3}  # {1, 2, 3}
b = {3, 4}
print(a | b)  # união -> {1,2,3,4}
print(a & b)  # interseção -> {3}
print(a - b)  # diferença -> {1,2}
print(a ^ b)  # diferença simétrica -> {1,2,4}
```

### Dicionários (`dict`)

Dicionários são coleções de **pares chave-valor**. Chaves devem ser imutáveis (strings, números, tuplas).

```python
pessoa = {"nome": "Ana", "idade": 25}
pessoa["profissao"] = "Dev"
print(pessoa.get("cidade", "SP"))  # valor padrão
for k, v in pessoa.items():
    print(k, v)

# dict comprehension
quadrados = {n: n * n for n in range(5)}  # {0:0, 1:1, 2:4, 3:9, 4:16}
```

---

## Extras do Python

### List Comprehensions

Forma **concisa** e geralmente mais **rápida** de construir listas.

```python
# Básico
nums = [0, 1, 2, 3, 4]
quadrados = [n * n for n in nums]  # [0,1,4,9,16]

# Com filtro (if ao final)
pares = [n for n in nums if n % 2 == 0]  # [0,2,4]

# If-else (expressão condicional)
rotulos = ["par" if n % 2 == 0 else "ímpar" for n in nums]

# Com aninhamento
produtos = [(x, y) for x in range(3) for y in range(2)]  # [(0,0),(0,1),(1,0),(1,1),(2,0),(2,1)]

# Atenção à legibilidade: se ficar complexo, prefira for normal.
```

> Ideias relacionadas: **set comprehensions** (`{expr for ...}`) para coleções sem duplicatas; **dict comprehensions** (
`{k: v for ...}`) para mapas; e **generator expressions** (`(expr for ...)`) para iterar sob demanda (economiza
> memória).

```python
# set e dict comprehensions
uniq = {c.lower() for c in "Banana"}  # {'b', 'a', 'n'}
mapeado = {n: n ** 3 for n in range(4)}  # {0:0,1:1,2:8,3:27}

# generator expression (consome sob demanda)
total = sum(n * n for n in range(10))
```

### Desempacotamento (unpacking)

```python
# Sequências
a, b, c = (1, 2, 3)
a, b = b, a  # swap

# Starred expressions
x, *meio, z = [10, 20, 30, 40, 50]
print(x, meio, z)  # 10 [20,30,40] 50

# Ignorar valores
nome, _, idade = ("Ana", "IGNORAR", 23)


# Desempacotar ao chamar funções
def somar(x, y, z): return x + y + z


valores = (1, 2, 3)
print(somar(*valores))  # 6

opcoes = {"sep": " | ", "end": "!
                               "}
          print("A", "B", "C", **opcoes)  # A | B | C!
```

### Enumerate

Fornece **índice e valor** ao iterar sequências.

```python
nomes = ["Ana", "Lucas", "João"]
for i, nome in enumerate(nomes):
    print(i, nome)
# 0 Ana
# 1 Lucas
# 2 João

# Definindo índice inicial
for i, nome in enumerate(nomes, start=1):
    print(f"{i}. {nome}")

# Atualizando lista in-place com índice
valores = [10, 20, 30]
for i, v in enumerate(valores):
    valores[i] = v * 2
# valores -> [20, 40, 60]
```

### Zip

Combina múltiplas sequências em pares (ou tuplas) de elementos correspondentes.

```python
nomes = ["Ana", "Lucas", "João"]
idades = [25, 30, 22]
for nome, idade in zip(nomes, idades):
    print(f"{nome} tem {idade} anos")
# Ana tem 25 anos
# Lucas tem 30 anos
# João tem 22 anos