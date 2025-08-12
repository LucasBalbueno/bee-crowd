A = float(input())
B = float(input())
C = float(input())

def calculateAverage(A, B, C):
    weightA = 2
    weightB = 3
    weightC = 5
    sumAverage = (A * weightA) + (B * weightB) + (C * weightC)
    sumWeight = weightA + weightB + weightC
    result = sumAverage / sumWeight
    return result

media = calculateAverage(A, B, C)
print("MEDIA = {:.1f}".format(media))