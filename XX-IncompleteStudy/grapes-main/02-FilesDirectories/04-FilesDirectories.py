import os

print(os.getcwd())

#os.mkdir("Python course")
#os.makedirs("Teste/test/in_test")
os.chdir("..")
print(os.getcwd())
os.chdir("02-FilesDirectories")
print(os.getcwd())

#os.rename("Teeste", "Teste")

file = open("old.txt", "w")
file.write("Hiii")
file.close()

os.rename("old.txt", "new.txt")

"""As in linux, the rename can be used to move files"""

print(os.listdir())

for Object in os.listdir("."):
    if os.path.isdir(Object):
        print("It's a directory")
    elif os.path.isfile(Object):
        print("It's a file")