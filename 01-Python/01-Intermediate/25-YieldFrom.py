def gen1():
    print('Start gen1')
    yield 1
    yield 2
    yield 3
    print('Finish gen1')
    
def gen2(gen=None):
    print('Start gen2')
    if gen is not None:
        yield from gen()
    yield 4
    yield 5
    yield 6
    print('Finish gen2')

def gen3():
    print('Start gen3')
    yield 10
    yield 20
    yield 30
    print('Finish gen3')

g1 = gen2(gen1)
g2 = gen2(gen3)

for num in g1:
    print(num)
    
for num in g2:
    print(num)

'''
g3 = gen2(g1)
for n in g3:
    print(n)
'''

g4 = gen2()
for n in g4:
    print(n)