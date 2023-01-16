def main():
    value = input()
    try:
        sum = int(value) + 10
        result = sum / int(value)
        print(f"{result:.2f}")
    except ZeroDivisionError:
        print("The error is ZeroDivisionError...")
    except ValueError:
        print("Ocurred a ValueError...")
    except:
        print("There's an error with the program!")
    else:
        print("Well... There's no error.")
    finally:
        print("It's always executed.")

if __name__ == "__main__":
    main()