listA = []

for x in range(3):
    for y in range(3):
        listA.append((x, y))

listA = [
    (x, y)
    for x in range(3)
    for y in range(3)
]

listA = [
    [x for y in range(3)]
    for x in range(3)
]

listA = [
    [[(x, y, z) for z in range(10)] for y in range(3)]
    for x in range(3)
]

def pretty_print(lista):
    for e in lista:
        for el in e:
            for ele in el:
                print(ele, sep='\t')
            print()
        print()

#print(*listA, sep='\n')
pretty_print(listA)