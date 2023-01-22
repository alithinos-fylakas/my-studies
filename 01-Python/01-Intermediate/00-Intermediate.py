def sum(x, y, z=None):
    if z is not None:
        print(f"{x=} {y=} {z=}", x + y + z)
        return
    print(f"{x=} {y=}", x + y)

sum(1, 2)
sum(3, 5)
sum(100, 200)
sum(7, 9, 0)

#Scope
def scope():
    x = 1
    def other_func():
        y = 2
        return print(x, y)
    return print(x), other_func() #Excutes the functions and return \
        #a list of None

scope()[0]
scope()[1]
print(scope()[:2])