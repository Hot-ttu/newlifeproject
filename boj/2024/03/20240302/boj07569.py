import sys
from collections import deque
input = sys.stdin.readline

M, N, H = map(int, input().split())

box = [[list(map(int, input().split())) for _ in range(N)] for _ in range(H)]

zeroCnt = 0
queue = deque()
for i in range(H):
    for j in range(N):
        for k in range(M):
            if box[i][j][k] == 0:
                zeroCnt += 1
            elif box[i][j][k] == 1:
                queue.append([i, j, k])

dx = [0, 0, -1, 1, 0, 0]
dy = [0, 0, 0, 0, -1, 1]
dz = [1, -1, 0, 0, 0, 0]

cnt = 0
while len(queue) and zeroCnt:
    size = len(queue)
    for _ in range(size):
        curZ, curY, curX = queue.popleft()

        for i in range(6):
            nx = curX + dx[i]
            ny = curY + dy[i]
            nz = curZ + dz[i]

            if not (0 <= nx < M and 0 <= ny < N and 0 <= nz < H):
                continue

            if box[nz][ny][nx] != 0:
                continue

            queue.append([nz, ny, nx])
            box[nz][ny][nx] = 1
            zeroCnt -= 1

    cnt += 1

if zeroCnt:
    print(-1)
else:
    print(cnt)
