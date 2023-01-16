import os
import time

def main():
    while True:
        name = input()

        if name.upper() == "SAIR":
            break
        if os.path.exists(name):
            print(name)

            print(os.path.getsize(name))
            print(time.ctime(os.path.getctime(name)))
            print(time.ctime(os.path.getmtime(name)))
            print(time.ctime(os.path.getatime(name)))

            if os.path.isdir(name):
                print(name, "is a directory")
            elif os.path.isfile(name):
                print(name, "is a file")
        else:
            print("Doesn't exist")

if __name__ == "__main__":
    main()