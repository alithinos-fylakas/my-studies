# Try, except, else and finally

a = 18
b = 0
#c = a / b

try:
    print('First line')
    c = a / b
    print('Second line')
except ZeroDivisionError as e:
    print('Divided by zero')
    print(e.__class__.__name__)
    print(e)
except NameError:
    print('One of the name is not define')
except (TypeError, IndexError) as error:
    print('Type error or Index error')
    print('msg: ', error)
    print('name: ', error.__class__.__name__)
except Exception:
    print('Not known')
finally:
    ...