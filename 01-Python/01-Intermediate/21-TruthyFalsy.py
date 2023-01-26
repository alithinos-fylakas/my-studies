ls = []
dictionary = {}
set_ = set()
tuple_ = ()
string = ''
integer = 0
floating = 0.0
nothing = None
false = False
range_ = range(0)

def falsy(value):
    return 'Falsy' if not value else 'Truthy'

print(falsy(ls))
print(falsy(dictionary))
print(falsy(set_))
print(falsy(tuple_))
print(falsy(string))
print(falsy(integer))
print(falsy(floating))
print(falsy(nothing))
print(falsy(false))
print(falsy(range_))
