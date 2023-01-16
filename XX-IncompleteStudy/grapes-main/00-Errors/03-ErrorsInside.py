def main():
    value = input()

    try:
        sum = int(value) + 10
        result = sum / int(value)

        print(f"Sum: {sum}.")
        print(f"Result: {result}.")
    except:
        x = 10/0
        print("Errooor!")

if __name__ == "__main__":
    main()