
list1 = [4, 1, 32, 43, 55, 6, 5, 3, 9]
list1.sort(reverse=True)
print(list1)

# You can use a call back to teach Python how to sort something

listA = [
    {'name': 'Diovanna', 'surname': 'Mira'},
    {'name': 'Maria', 'surname': 'Oliveira'},
    {'name': 'Daniel', 'surname': 'Silva'},
    {'name': 'Carlos', 'surname': 'Veras'},
    {'name': 'Tony', 'surname': 'Parker'},
]

#def sorting(item):
#    return item['name']

#listA.sort(key=lambda item: item['name'])
#print(*listA, sep='\n')

l1 = sorted(listA, key=lambda item: item['name'])
l2 = sorted(listA, key=lambda item: item['surname'])

print(*l1, sep='\n')
print(*l2, sep='\n')