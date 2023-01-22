
person = {}

person['name'] = "Diovanna"

print(person['name'])

person['surname'] = 'Diorno'

print(person)

del person['name']

print(person)

print(person.get('name'))
if person.get('name') is None:
    print("Do no exist")
else:
    print(person['name'])
    
