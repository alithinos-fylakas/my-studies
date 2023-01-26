
string = 'Diovanna'

print(string)
ls = dir(string)
print(*ls, sep='\n')

print(hasattr(string, 'upper'))

method = 'upper'
if hasattr(string, method):
    print('Has! . . .')
    print(getattr(string, method)())
    print(string)