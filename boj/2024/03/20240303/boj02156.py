import sys
input = sys.stdin.readline

n = int(input())

wine = []
for _ in range(n):
    wine.append(int(input()))

memo = [[0 for _ in range(n+1)] for _ in range(2)]
memo[0][1] = wine[0]
memo[1][1] = wine[0]
result = wine[0]
for i in range(2, n+1):
    memo[0][i] = max(memo[1][i-1] + wine[i-1], memo[0][i-1])
    memo[1][i] = max(memo[0][i-2], memo[1][i-2]) + wine[i-1]
    result = max(result, memo[0][i], memo[1][i])

print(result)