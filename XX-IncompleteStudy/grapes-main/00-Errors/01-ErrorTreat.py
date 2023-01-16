def convertInteger(string):
    if string not in ("0", "1", "2", "3", "4", "5", "6", "7", "8", "9"):
        raise ValueError("Inform a number between 0 and 9!")
    return int(string)

def main():
    value = input()

    print(10 + convertInteger(value))

    try:
        sum = int(value) + 10
        result = sum / int(value)

        print(f"Sum: {sum}.")
        print(f"Result: {result}.")
    except Exception as e:
        print(f"Ocurred an error: See it: {e}!")
        print(f"Ocurred an error: See it: {e.args}.")

if __name__ == "__main__":
    main()