#!/usr/bin/python3
import math
def solution(A, B):
    # Implement your solution her
  perimeter = A + B

  if perimeter > 0:
    side1 = math.floor(perimeter / 4)
    if side1 > 0:
      print(side1)
      return int(side1)
    else:
      return 0
  else:
      return 0

solution(13, 11)