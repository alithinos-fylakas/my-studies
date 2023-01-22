#Imutable types: str, int, float, bool, tuple
#Mutable types: dict, list

person = {
    'name': "Diovanna",
    'surname': "Diorno",
    'age': 17,
    'height': 165,
    'adress': [
        {'road': 'R. Tal', 'number': 123},
        {'road': 'R. de Tal', 'number': 321}
    ]
}

print(person, type(person))

print(person['name'])