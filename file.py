import argparse, json, os
parser = argparse.ArgumentParser()
#parser.add_argument("-f", "--filename", help="Enter the filename to be read", type=str)
#parser.add_argument("-p", "--path", help="Enter the path to the file", type=str)
parser.add_argument("-d", "--directory", help="Parse all files in directory")
args = parser.parse_args()

def jsonFromFile(handle):
    with open(handle, "r", encoding="utf-8") as f:
        for line in f:
            line = line.rstrip()
            words.append(line.strip(','))
    return words

def jsonToFile(data, handle):
    with open('json/' + handle + '.json', 'w+', encoding="utf-8") as j:
        json.dump(data, j, indent=2)

fileName = ""
path = ""

words = []

if not args.directory:

    print('Run program and enter a directory with -d')
#    if args.path:
#        path = args.path
#    else:
#        path = input('Path: ')
#
#    if args.filename:
#        fileName = args.filename
#    else:
#        fileName = input('Filename: ')
#
#    words = jsonFromFile(path + '/' + fileName + '.txt')
#
#    jsonToFile(words, path + '_' + fileName)
else:
    dirwords = {}
    for fn in os.listdir(args.directory):
        words = []
        words = jsonFromFile(args.directory + '/' + fn)
        #jsonToFile(words, args.directory + '_' + fn.rsplit('.')[0])
        dirwords[fn.rsplit('.')[0]] = words

        jsonToFile(dirwords, args.directory)


