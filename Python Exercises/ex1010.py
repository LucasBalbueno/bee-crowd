data1 = input()
data2 = input()


def splitInfos(data):
    productData = data.split(" ")
    productCode = productData[0]
    productQuantity = int(productData[1])
    productValue = float(productData[2])

    productInfo = {
        "Code": productCode,
        "Quantity": productQuantity,
        "Price": productValue
    }
    return productInfo


def calculteAmountPay(product):
    sum = product["Quantity"] * product["Price"]
    return sum


product1 = splitInfos(data1)
product2 = splitInfos(data2)
sum1 = calculteAmountPay(product1)
sum2 = calculteAmountPay(product2)

print("VALOR A PAGAR: R$ {:.2F}".format(sum1 + sum2))
