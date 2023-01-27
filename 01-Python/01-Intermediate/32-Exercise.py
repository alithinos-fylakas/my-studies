#Postpone function executions

def suM(x, y):
    return x + y

def multi(x, y):
    return x * y

def createFunc(func, *args):
    return func(*args)

# sum_five = createFunc(suM, 5)
# muti_ten = createFunc(multi, 10)

#My version
# Couldn't do (My brain is slow today)

#Teacher's solution

def createFunction(func, x):
    def inner(y):
        return func(x, y)
    return inner

sum_five = createFunction(suM, 5)
multi_ten = createFunction(multi, 10)

print(sum_five(10))
print(multi_ten(2))