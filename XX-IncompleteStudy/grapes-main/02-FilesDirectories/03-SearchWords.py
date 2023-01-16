def main():
    words = []
    with open("hino.txt", encoding = "utf-8") as file:
        for line in file:
            words += line.upper().split()
    
    print(words)

    while True:
        word = input("What's the word you are looking for?")

        if word.upper() == "SAIR":
            print("Nice")
            break
        elif word.upper() in words:
            print(word)
            print(words.count(word.upper()))
        else:
            print(f"The word {word} was not found!")

if __name__ == "__main__":
    main()