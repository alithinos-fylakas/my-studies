
#Args
# *args --> packaging and unpacking

x, y, *things = 1, 2, 3, 4
print(x, y, things)

def suming(*args): #packing
    add = 0
    for value in args:
        add += value
    return add

print(suming(1, 2, 3, 4, 5))
print(suming(*things)) #Unpacking

#Exercices

def multi(*args):
    prod = 1
    for value in args:
        prod *= value
    return prod

print(multi(1, 2, 3, 4, 5))

def isEven(number: int) -> bool:
    return not number % 2

print(isEven(4))
print(isEven(5))