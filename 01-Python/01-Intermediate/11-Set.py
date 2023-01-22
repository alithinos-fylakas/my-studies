
s1 = set()
#print(s1, type(s1), type(set))
name = set('Diovanna')
print(name)

s2 = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10}
s3 = {'Luiz'}
print(s2, s3, sep='\n')
s1.update(s2, s3)
print(s1)

l1 = [1, 2, 2, 3, 2, 3, 2, 3]
ss1 = set(l1)
l2 = list(ss1)
print(l2)

s4 = {1, 2, 3} #Just like a bag
print(2 in s4)
for n in s4:
    print(n)

#Methods
sl = set()
sl.add('Diovanna')
sl.add(1)
sl.update(('Hello, world!', 1, 2, 3, 4))
#sl.clear()
sl.discard('Hello, world!')
sl.discard('Diovanna')
print(sl)

#Operators
sl1 = {1, 2, 3}
sl2 = {2, 3, 4}
sl3 = sl1 | sl2
sl3 = sl1 & sl2
sl3 = sl1 - sl2
sl3 = sl2 - sl1
sl3 = sl1 ^ sl2
print(sl3)