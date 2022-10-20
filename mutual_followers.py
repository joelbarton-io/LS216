def solve(relations):
   ans = set()
   seen = set()

   for a, b in relations:
      seen.add((a, b))

      if (b, a) in seen:
         ans.add(b)
         ans.add(a)

   k = list(ans)
   rtr = sorted(k)
   return rtr

relations = [
   [0, 2],
   [2, 3],
   [2, 0],
   [1, 0]
]

print(solve(relations))
