
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

print(person['name'])
print(person.get('name', 'Do not exist'))

"""name = person.pop('name')
print(name)
print(person)"""

last_key = person.popitem()
print(last_key)
print(person)

"""person.update({
    'name': 'new value',
    'age': 30
})"""

#person.update(name='Carlo', age=18)
#tuple = ('name', 'Elon'), ('age', 20)
list = [['name', 'Banania'], ['age', 25]]
#person.update(tuple)
person.update(list)
print(person)
