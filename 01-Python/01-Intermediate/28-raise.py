
#print(123)
#raise ValueError('An error has occurred')
#print(456)

def div(q, d):
    try:
        return q / d
    except ZeroDivisionError:
        print('Doing something with the error.')
        raise

def div2(q, d):
    if d == 0:
        raise ZeroDivisionError('You are trying to divide by zero')
    return q / d

def ZeroDivE(d):
    if d == 0:
        raise ZeroDivisionError('You are trying to divide by zero')
    return True

def TypeE(n):
    typeN = type(n)
    if not isinstance(n, (float, int)):
        raise TypeError(
            f'{n} must be int or float'
            f'{typeN} sent.'
        )
    return True

def div3(q, d):
    TypeE(q)
    TypeE(d)
    ZeroDivE(d)
    return q / d

print(div3(8, '0'))