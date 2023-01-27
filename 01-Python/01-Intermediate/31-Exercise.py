from copy import deepcopy

prods = [
    {'name': 'prod 5', 'price': 10.00},
    {'name': 'prod 1', 'price': 22.32},
    {'name': 'prod 3', 'price': 10.11},
    {'name': 'prod 2', 'price': 105.87},
    {'name': 'prod 4', 'price': 69.90}
]

risePrice = lambda p, r: p * (1 + r)

prods = [
    {'name': prod['name'], 'price': round(risePrice(prod['price'], 0.1), 2)}
    for prod in prods
    ]

new_prods = deepcopy(prods)

print(*prods, sep='\n')
print()
print(*new_prods, sep='\n')
print()

ordered_prods = sorted(deepcopy(new_prods), key=lambda i: i['name'], reverse=True) 
print(*ordered_prods, sep='\n')
print()

ordered_prods_2 = sorted(deepcopy(new_prods), key=lambda i: i['price']) 
print(*ordered_prods_2, sep='\n')

# print()

# print(*prods, sep='\n')