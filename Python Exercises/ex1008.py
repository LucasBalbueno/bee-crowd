A = int(input())
B = int(input())
C = float(input())

def calculateSalary(B, C):
    salary = B * C
    return salary

result = calculateSalary(B, C)
print("NUMBER = {}".format(A))
print("SALARY = U$ {:.2f}".format(result))