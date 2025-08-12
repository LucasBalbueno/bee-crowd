R = float(input())
n = 3.14159

def calculateArea (R, n):
    A = n * (R * R)
    return A

print("A={:.4f}".format(calculateArea(R, n)))