pi = 3.14159
num = float(input())


def calculateSphere(num):
    result = (4 / 3) * (pi * (pow(num, 3)))
    return result


result = calculateSphere(num)
print("VOLUME = {:.3f}".format(result))
