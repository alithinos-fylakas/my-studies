# Higher order functions
# First class functions

def salutation(msg, name):
    return f'{msg}, {name}!'

def exec(callback, *args):
    return callback(*args)

v = exec(salutation, "Good morning", "Carlos")

print(v)

"""
salutation_2 = salutation

v = salutation("Good morning")
"""