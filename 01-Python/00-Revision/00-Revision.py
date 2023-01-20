#You may break the line with '\'
spd_car = 70
pos_car = 90

MAX_RADAR = 60
POS_RADAR = 100
RANGE_RADAR = 10

fined = False

spdGreater = spd_car > MAX_RADAR
carInRange = pos_car >= (POS_RADAR - RANGE_RADAR) and \
    pos_car <= (POS_RADAR + RANGE_RADAR)

if spdGreater and carInRange:    
    print(f"The car's speed is: {spd_car}, and its' position is: {pos_car}.")
    fined = True

if fined:
    number_str = input("Please, type a number: ")
    try:
        number_int = int(number_str)
        print(f"The bill is: {number_int * 100}")
    except:
        print("Please, enter a valid number")

class Oman:
    def __init__(self):
        pass
    
a = Oman()

var1 = 'a'
var2 = 2

print(id(var1))
print(id(var2))