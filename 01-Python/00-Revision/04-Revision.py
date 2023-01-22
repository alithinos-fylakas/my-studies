
list = [1, 2, "Diovanna", "Madalena", "Aurora", "Auror", 5]

print(list)
print(*list)
print(*list, end="\n", sep="\n")

list = [[1, 2],
        ["Amora", "Love"],
        ["Koda", "Street"],
        2
        ]

print(list)
print(*list)
print(*list, sep="\n")

#ternary operator

#Structure: <value> if <condition> else <other value>

print("Hi" if 2 > 1 else "Bye")

condition = 10 == 10
variable = "Value" if condition else "Other value"
print(variable)

digit = 9
new_digit = digit if digit <= 9 else 0
print(new_digit)

new_digit = 0 if digit > 9 else digit
print(new_digit)

#Don't do it:

print( "Value" if False else ("Other value" if True else "END") )