
def create_Multi(n):
    def multiply(number):
        return n * number
    return multiply

double = create_Multi(2)
triple = create_Multi(3)
quadruple = create_Multi(4)

print(double(5))
print(triple(5))
print(quadruple(5))