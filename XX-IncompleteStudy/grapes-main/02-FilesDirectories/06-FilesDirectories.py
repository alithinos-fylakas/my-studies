import os

path = "02-FilesDirectories/Teste/Path"
path_2 = "02-FilesDirectories/Teste/test/hey"
path_3 = "02-FilesDirectories/Teste/test/ya"

if not os.path.exists(path):
    os.makedirs(path)
if not os.path.exists(path_2):
    os.makedirs(path_2)
if not os.path.exists(path_3):
    os.makedirs(path_3)

print(os.path.abspath(path))
print(os.path.basename(path))
print(os.path.dirname(path))
print(os.path.splitdrive(path_3))
print(os.path.commonpath([path, path_2]))
print(os.path.commonprefix([path, path_2]))

junction = os.path.join("\\", "test", "testIntest", "anotherTest", "Files", "Junction", "plusTest")
print(junction)