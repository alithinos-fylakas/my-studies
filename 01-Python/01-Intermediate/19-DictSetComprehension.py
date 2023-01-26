# Dictionary Comprehension and Set Comprehension

prod = {
    'name': 'Blue pen',
    'price': 2.00,
    'category': 'Office'
}

dc = {
    key: value
    for key, value
    in prod.items()
}

dc = {
    key: value.upper()
    if isinstance(value, str) else value
    for key, value
    in prod.items()
}

dc = {
    key: value.upper()
    if isinstance(value, str) else value
    for key, value
    in prod.items()
    if key != 'category'
}

ls = [
    ('a', 'value a'),
    ('b', 'value b'),
    ('c', 'value c')
]

dc = {
    key: value
    for key, value in ls
}

print(dc)

s1 = {i for i in range(10)}
print(s1)