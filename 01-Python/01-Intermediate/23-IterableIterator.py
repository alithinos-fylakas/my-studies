import sys

#Iterable and Iterator

iterable = ['I', 'Have', '__iter__']
iterator = iterable.__iter__()
iterator = iter(iterable) #has __iter__ and __next__


print(next(iterator))
print(next(iterator))
print(next(iterator))

#Generator expression, Iterables and Iterators in Python

ls = [n for n in range(1000000)]
generator = (n for n in range(1000000))
print(sys.getsizeof(ls))
#print(ls)
print(sys.getsizeof(generator))

for n in generator:
    print(n, sys.getsizeof(n))