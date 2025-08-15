data = input()

nums = data.split(" ")

A = float(nums[0])
B = float(nums[1])
C = float(nums[2])


def calculateTriangle(A, C):
    area = (C * A) / 2
    print("TRIANGULO: {:.3f}".format(area))


def calculateCircle(C):
    pi = 3.14159
    area = pi * (C ** 2)
    print("CIRCULO: {:.3f}".format(area))


def caculateTrapezoide(A, B, C):
    area = ((A + B) * C) / 2
    print("TRAPEZIO: {:.3f}".format(area))


def calculateSquare(B):
    area = B * B
    print("QUADRADO: {:.3f}".format(area))


def calculateRectangle(A, B):
    area = A * B
    print("RETANGULO: {:.3f}".format(area))


calculateTriangle(A, C)
calculateCircle(C)
caculateTrapezoide(A, B, C)
calculateSquare(B)
calculateRectangle(A, B)
