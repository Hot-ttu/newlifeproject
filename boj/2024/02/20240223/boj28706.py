import sys
input = sys.stdin.readline

T = int(input())

for i in range(T):
  N = int(input())

  choiceList = []
  for j in range(N):
    choiceList.append(input().split())

  memo = [[False] * 7 for _ in range(N+1)]

  memo[0][1] = True

  for j in range(N):
    op1, v1, op2, v2 = choiceList[j]
    for idx in range(7):
      if memo[j][idx]:
        tmp = idx
        if op1 == "+":
          tmp += int(v1)
        elif op1 == "*":
          tmp *= int(v1)
        memo[j+1][tmp%7] = True

        tmp = idx
        if op2 == "+":
          tmp += int(v2)
        elif op2 == "*":
          tmp *= int(v2)
        memo[j+1][tmp%7] = True

  if memo[N][0]:
    print("LUCKY")
  else :
    print("UNLUCKY")