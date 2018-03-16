# 10~13ms

line = raw_input().split()
A1 = 0
A2 = 0
A2Count = 0
A3 = 0
A4 = 0
A4Count = 0
A5 = 0
count = 0
for i in line:
    n = int(i)
    if count == 0:
        count += 1
        continue
    else:
        A1 += n if n % 10 == 0 else 0
        A2Count += 1 if n % 5 == 1 else 0
        A2 += (1 if A2Count % 2 == 1 else -1) * n if n % 5 == 1 else 0
        A3 += 1 if n % 5 == 2 else 0
        A4Count += 1 if n % 5 == 3 else 0
        A4 += n if n % 5 == 3 else 0
        A5 = n if n % 5 == 4 and n > A5 else A5
print(("N" if A1 == 0 else str(A1)) + " " +
      ("N" if A2Count == 0 else str(A2)) + " " +
      ("N" if A3 == 0 else str(A3)) + " " +
      ("N" if A4Count == 0 else str(round(A4 * 1.0 / A4Count, 1))) + " " +
      ("N" if A5 == 0 else str(A5)))
