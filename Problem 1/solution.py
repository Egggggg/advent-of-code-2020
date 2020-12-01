def solve(input_, maximum):
	for i in input_:
		if i <= maximum:
			for e in input_:
				if i + e == 2020:
					return i * e

with open("input.txt", "r") as f:
	input_ = f.readlines()

input_ = [int(i) for i in input_]
maximum = 2020 - min(input_)

print(solve(input_, maximum))
