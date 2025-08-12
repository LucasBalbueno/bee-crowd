A = int(input())
B = int(input())
C = int(input())
D = int(input())

def diferenceOfProducts(A, B, C, D):
    diference = (A * B) - (C * D)
    return diference

result = diferenceOfProducts(A, B, C, D)
print("DIFERENCA = {}".format(result))