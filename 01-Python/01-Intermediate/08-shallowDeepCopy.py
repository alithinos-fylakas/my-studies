import copy

d1 = {
    'c1': 1,
    'c2': 2,
    'l1': [0, 1, 2]
}

d2 = d1 #Points to the same dictionary

d2['c1'] = 100

print(d1)

d1['c1'] = 1

d3 = d1.copy()
d4 = copy.deepcopy(d1)


d3['c1'] = 1000

#d3['l1'][1] = 200

d4['c1'] = 1000
d4['l1'][1] = 200

print(d1)
print(d3)
print(d4)