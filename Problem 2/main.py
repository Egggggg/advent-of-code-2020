def solve(input_):
	for i in input_:
		for e in input_:
			for x in input_:
				if i + e + x == 2020:
					return i * e * x

with open("input.txt", "r") as f:
	input_ = f.readlines()

input_ = [int(i) for i in input_]

print(solve(input_))
