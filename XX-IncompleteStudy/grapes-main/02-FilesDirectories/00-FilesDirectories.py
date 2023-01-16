def main():
    newFile = """
def main():
    print(2 + 2)

if __name__ == "__main__":
    main()
"""
    pythonfile = open("test.py", "r")
    #pythonfile.write(newFile)

    """print(pythonfile.readline())
    print(pythonfile.readline())
    print(pythonfile.readline(10))
    print(pythonfile.readline())
    print(pythonfile.readline())
    print(pythonfile.readline())
    print(pythonfile.readline())
    """
    #print(pythonfile.read())

    """for row in pythonfile:
        print(row)"""

    for line in pythonfile.readlines():
        print(line)

    pythonfile.close()

if __name__ == "__main__":
    main()