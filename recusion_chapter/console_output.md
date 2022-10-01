LS216>node print_all_items_🥞recursively🥞.js
1
2
3
🥞 - printAllItems([4,5,6]) - UNWIND BEGINS
🥞 - printAllItems(<initialArray>)
4
5
6
7
🥞 - printAllItems([8,[9,10,11,[12,13,14]]])
🥞 - printAllItems(<initialArray>)
8
🥞 - printAllItems([9,10,11,[12,13,14]])
🥞 - printAllItems([8,[9,10,11,[12,13,14]]])
🥞 - printAllItems(<initialArray>)
9
10
11
🥞 - printAllItems([12,13,14]) - UNWIND BEGINS
🥞 - printAllItems([9,10,11,[12,13,14]])
🥞 - printAllItems([8,[9,10,11,[12,13,14]]])
🥞 - printAllItems(<initialArray>)
12
13
14
🥞 - printAllItems([15,16,17,18,19,[20,21,22,[23,24,25,[26,27,29]],30,31],32])
🥞 - printAllItems(<initialArray>)
15
16
17
18
19
🥞 - printAllItems([20,21,22,[23,24,25,[26,27,29]],30,31])
🥞 - printAllItems([15,16,17,18,19,[20,21,22,[23,24,25,[26,27,29]],30,31],32])
🥞 - printAllItems(<initialArray>)
20
21
22
🥞 - printAllItems([23,24,25,[26,27,29]])
🥞 - printAllItems([20,21,22,[23,24,25,[26,27,29]],30,31])
🥞 - printAllItems([15,16,17,18,19,[20,21,22,[23,24,25,[26,27,29]],30,31],32])
🥞 - printAllItems(<initialArray>)
23
24
25
🥞 - printAllItems([26,27,29]) - UNWIND BEGINS
🥞 - printAllItems([23,24,25,[26,27,29]])
🥞 - printAllItems([20,21,22,[23,24,25,[26,27,29]],30,31])
🥞 - printAllItems([15,16,17,18,19,[20,21,22,[23,24,25,[26,27,29]],30,31],32])
🥞 - printAllItems(<initialArray>)
26
27
29
30
31
32
33