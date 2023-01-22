#Packing and unpacking
a, b = 1, 2
a, b, = b, a
print(a, b)

person = {
    'name': 'Aline',
    'surname': 'Miranda'
}

# a, b = person.values()
# (a1, a2), b = person.items()
# print(a1, a2)
# print(b)

data_person = {
    'age': 18,
    'height': 170
}

whole_person = {**person, **data_person}
#print(whole_person)

# args and kwargs
# args 
# kwargs - keyword arguments

def showNamedArgs(*args, **kwargs):
    print(args)
    
    for key, value in kwargs.items():
        print(key, value)

#showNamedArgs(name='Joana', random='123')

#showNamedArgs(**whole_person)

config = {
    'arg1': 1,
    'arg2': 2,
    'arg3': 3,
    'arg4': 4,
    'arg5': 5,
    'arg6': 6
}

showNamedArgs(**config) 