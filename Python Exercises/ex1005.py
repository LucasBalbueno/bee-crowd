A = float(input())
B = float(input())

def calculateAverage(A, B):
    weightA = 3.5
    weightB = 7.5
    sumAverage = (A * weightA) + (B * weightB)
    sumWeight = weightA + weightB
    result = sumAverage / sumWeight
    return result

media = calculateAverage(A, B)
print("MEDIA = {:.5f}".format(media))