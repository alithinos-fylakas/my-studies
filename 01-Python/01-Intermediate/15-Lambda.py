def execute(function, *args):
    return function(*args)

def suM(x, y):
    return x + y

def create_Multiplier(multiplier):
    def multi(number):
        return number * multiplier
    return multi

#double = create_Multiplier(2)
double = execute(
    lambda m: \
        lambda n: \
            n * m,
    2
)

print(double(2))

print(
    execute(
        lambda x, y: x + y,
        2, 3
    ),
    execute(suM, 2, 3),
    suM(2, 3)
)

print(
    execute(
        lambda *args: sum(args),
        1, 2, 3, 4, 5, 6, 7, 8, 9
    )
)