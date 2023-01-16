def main():
    with open("hino.txt", encoding = "utf-8") as file:
        for line in file:
            words = line.split()
            print(words)
    
    words = []
    with open("hino.txt", encoding = "utf-8") as file:
        for line in file:
            words += line.split()
    
    print(words)

if __name__ == "__main__":
    main()