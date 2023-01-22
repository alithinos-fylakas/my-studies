#len
#keys
#values
#items
#setdefault
#copy
#get
#pop
#popitem
#update

person = {
    'name': 'Diovanna',
    'surname': 'Diorno'
}

person.setdefault('age', 0)

print(len(person))
print(list(person.keys()))

for key in person:
    print(key)
    
for key in person:
    print(key, person[key])
    
for key, value in person.items():
    print(key, value)