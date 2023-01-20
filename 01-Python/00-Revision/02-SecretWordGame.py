from random import randint

WELCOME = """HI, USER -----------------------------------------------

Welcome to the Secret Word Game!!!!
Here, you'll have to try to guess what's correct word.
You will have the option to choose between:
    - Guessing a letter
    - Guessing the word
After it, you'll know if you guessed right :D

The Game will end as soon as you choose the correct word.

Good luck.
---------------------------------------------------------
"""

letterOrWord = """So, tell me what do you wanna try.
    Letter or Word?
    Do your move.
"""

def defineAnswer() -> str:
    list = ["arrow", "mind", "guess", "word", "fire", "attempt"]
    index = randint(0, len(list) - 1)
    print(index)
    return list[index]

def defineKnown(answer: str) -> str:
    known = []
    for i in range(len(answer)):
        known.append("_")
    return known

def updateKnown(letter: str, word: str, known: str) -> list:
    print(getPosInWord(letter, word))
    for pos in getPosInWord(letter, word):
        known[pos] = letter
    return known

def letterInWord(letter: str, word: str) -> bool:
    return letter in word

def getPosInWord(letter: str, word: str) -> list:
    pos = []    
    for i in range(len(word)):
        if letter == word[i]:
            pos.append(i)
    return pos

def correctWord(word:str, answer: str) -> bool:
    return word == answer

def userInput() -> str:
    usrInput = input()
    try:
        usrInput = usrInput.lower()
        return usrInput
    except:
        return "Invalid answer."


def printCurrent(known: str):
    for letter in known:
        print(letter, end=" ")

def main():
    
    answer = defineAnswer()
    known = defineKnown(answer)
    
    print(WELCOME)
    move = None
    
    attempts = 0
    
    while True:
        print(letterOrWord)
        move = userInput()
        
        if move == "letter":
            l = userInput()
            if letterInWord(l, answer):
                print("The letter is in the word...")
                known = updateKnown(l, answer, known)
            else:
                print("The letter is not in the word...")
        elif move == "word":
            w = userInput()
            if correctWord(w, answer):
                print(f"Congratulation!!!!!\nThe word {w} was the right one.")
                break
            print("You'll have to try one more time!")
        else:
            print("Please, enter a valid move:\n'letter' or 'word'!")
        
        move = None
        attempts += 1
        print(f"You have, now, {attempts} attempts. . .")
        print("Currently, the word seems like this:")
        printCurrent(known)

if __name__ == "__main__":
    main()