#Decorators with parameters

def decorator(func):
    print('Decorator 1')
    
    def inner(*args, **kwargs):
        print('Inner')
        res = func(*args, **kwargs)
        return res
    return inner

def blabla(a, b, c):
    print(a, b, c)
    return decorator

@blabla(1, 2, 3)
def suM(x, y):
    return x + y

ten_five = suM(10, 5)
print(ten_five)
