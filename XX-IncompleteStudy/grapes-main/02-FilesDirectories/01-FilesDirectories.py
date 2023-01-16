def main():
    file = open("test_file_2.txt", "w")

    lines = ["This is Sparta\n", "Oh man!\n", "Creeper?\n", "Yeah Yeah\n"]

    file.writelines(lines)
    file.close()

    with open("test_file_2.txt") as arq:
        for line in arq:
            print(line)

    arq2 = open("test_file_2.txt", "a")
    arq2.write("One more time!")
    arq2.close()

if __name__ == "__main__":
    main()