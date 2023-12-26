import sys
input = sys.stdin.readline

N = int(input())

nums = [int(input()) for _ in range(N)]
nums.sort()
if sum(nums) > 0:
    print(int(sum(nums)/N+0.5))
else:
    print(int(sum(nums)/N-0.5))
print(nums[N//2])
count = {}

for i in nums:
    if i in count:
        count[i] += 1
    else:
        count[i] = 1

max_freq = max(count.values())
most = []

for i in count:
    if max_freq == count[i]:
        most.append(i)

if len(most) > 1:
    print(most[1])
else:
    print(most[0])
print(nums[N-1] - nums[0])
