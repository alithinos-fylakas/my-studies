import os

for root, directories, files in os.walk("/" "home/alphinos-manjaro/" "Projects"):

    print("\n", root)
    for diret in directories:
        print(f"{diret}/")
    for arq in files:
        print(f"{arq}")