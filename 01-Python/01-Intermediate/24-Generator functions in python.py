
#generator = (n for in range(1000000))

def generator(n=0):
    yield 1 # To pause
    print('Continuing...')
    yield 2 # To pause
    print('One more time...')
    yield 3
    print('I\'ll finish')
    return 'Finished'


gen = generator(n=0)

for n in gen:
    print(n)

def generatorN(n = 0, maximum = 1000000):
    while True:
        yield n
        n += 1
        
        if n > maximum:
            return
        

gene = generatorN()

for n in gene:
    print(n)