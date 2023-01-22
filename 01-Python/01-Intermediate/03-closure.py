#Closure

def create_Salutation(salutation):
    def salute(name):
        return f'{salutation}, {name}.'
    return salute

say_Good_Morning = create_Salutation("Good morning")
say_Good_Evening = create_Salutation("Good evening")

print(say_Good_Morning("Diovanna"))
print(say_Good_Evening("Carlo"))

for name in ["Mariana", "Tomé", "Sail"]:
    print(say_Good_Morning(name))
    print(say_Good_Evening(name))

print(say_Good_Morning)
print(say_Good_Evening)