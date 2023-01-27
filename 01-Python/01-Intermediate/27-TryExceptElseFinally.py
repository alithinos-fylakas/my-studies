# try, except, else, finally

try:
    print('To open file')
    8/0
except ZeroDivisionError():
    print('Divided by zero')
except:
    print('An error has occurred')
else:
    print('An error did not occur')
finally:
    print('To close file')