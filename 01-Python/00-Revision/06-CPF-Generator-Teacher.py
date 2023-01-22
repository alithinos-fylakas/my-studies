import re
from random import randint

first = input("Validator or generator?")
if first == "validator":
    cpf = input("cpf: 746.824.890-70:\t") \
        .replace('.', '') \
        .replace(' ', '') \
        .replace('-', '')

    cpf = re.sub(
        r'[^0-9]',
        '',
        cpf
    )
    cpf_repeated = cpf[0] * len(cpf)

    if cpf == cpf_repeated:
        print("Invalid cpf")
        quit()

    l_cpf = cpf[:9]
else:
    #CPF-Generator
    nine_digits = ""
    for i in range(9):
        nine_digits += str(randint(0, 9))
    l_cpf = nine_digits

cont_regress = 10
sum_cpf = 0

for digit in l_cpf:
    sum_cpf += int(digit) * cont_regress
    cont_regress -= 1

result = (sum_cpf * 10) % 11
digit_1 = 0 if result > 9 else result

print(digit_1)

l_cpf2 = l_cpf + str(digit_1)
cont_regress_2 = 11
sum_cpf2 = 0
for digit in l_cpf2:
    sum_cpf2 += int(digit) * cont_regress_2
    cont_regress_2 -= 1

result_2 = (sum_cpf2 * 10) % 11
digit_2 = 0 if result_2 > 9 else result_2
print(digit_2)

gen_cpf = f"{l_cpf}{digit_1}{digit_2}"

if first == "validator":
    if cpf == gen_cpf:
        print(f'{cpf} is valid')
    else:
        print("Invalid cpf")
else:
    print(f"The new cpf is {gen_cpf}")
