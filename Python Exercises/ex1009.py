A = input()
B = float(input())
C = float(input())

def calculateSalaryBonus(B, C):
    if (C > 0):
        bonus = (C * 15) / 100
        salary = B + bonus
        return salary
    else:
        return B

result = calculateSalaryBonus(B, C)
print("TOTAL = R$ {:.2f}".format(result))