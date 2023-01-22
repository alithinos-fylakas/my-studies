
letters = set()

while True:
    letter = input('Write: ')
    letters.add(letter)
    
    if 'l' in letters:
        print('Congratulations')
        break
    
    print(letters)