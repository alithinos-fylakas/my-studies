
print(list(range(10)))

list = []
for n in range(10):
    list.append(n)
print(list)

list = [n for n in range(10)]
print(list)

list = [
    n * 2
    for n in range(10)
]
print(list)

# Mapping
prods = [
    {'name': 'p1', 'price':20, },
    {'name': 'p2', 'price':10, },
    {'name': 'p3', 'price':30, },
]

new_prods = [
    {'name': prod['name'], 'price': prod['price']}
    for prod in prods
]

new_prods = [
    {**prod, 'price': prod['price'] * 1.05}
    for prod in prods
]

new_prods = [
    {**prod, 'price': prod['price'] * 1.05}
    if prod['price'] > 20 else {**prod}
    for prod in prods
]

# print(*new_prods, sep='\n')

# Filter

listA = [n for n in range(10) if n < 5]
print(listA)

new_prods = [
    {**prod, 'price': prod['price'] * 1.05}
    if prod['price'] > 20 else {**prod}
    for prod in prods
    if prod['price'] * 1.05 > 10
]
print(*new_prods, sep='\n')