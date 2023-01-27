
def createFunction(func):
    def inner(*args, **kwargs):
        
        for arg in args:
            is_string(arg)
        
        res = func(*args, **kwargs)
        
        return res 
    return inner

@createFunction
def reverse_str(string):
    return string[::-1]

def is_string(string):
    if not isinstance(string, str):
        raise TypeError("The parameter must be a string")
    
# reverse_str_checking = createFunction(reverse_str)
# reversed_str = reverse_str_checking('123')
# print(reversed_str)

reversed_str = reverse_str('123')
print(reversed_str)