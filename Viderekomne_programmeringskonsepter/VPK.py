j = "V"

try:
   print(int(j))
except ValueError as e:
    print("Value Error", e)