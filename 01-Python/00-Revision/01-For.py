
text = "Wink" #iterable
iterator = iter(text) #iterator

while True:
    try:
        letter = next(iterator)
        print(letter, end="")
    except StopIteration:
        print()
        break

"""
Basically:

for letter in text:
    print(letter)

"""