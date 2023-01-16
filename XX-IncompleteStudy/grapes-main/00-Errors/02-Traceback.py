import traceback

def main():
    try:
        file_name = input("Inform the file name: ").strip()
        file = open(file_name)
    except:
        trace = traceback.format_exc()

        print("Ocurred an error:\n", trace)
        open("trace.log", "a").write(trace)

if __name__ == "__main__":
    main()