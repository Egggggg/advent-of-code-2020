$lines = @()
$x = 0, 0, 0, 0, 0
$y = 0
$y2 = 0
$trees = 0, 0, 0, 0, 0
$totalTrees = 1
$xIncrease = 1, 3, 5, 7

Get-Content .\input.txt | ForEach-Object {
	$lines += $_
}

while ($y -lt $lines.length) {
	for ($i = 0; $i -lt 4; $i++) {
		if ($lines[$y].substring($x[$i], 1) -eq "#") {
			$trees[$i]++
		}

		$x[$i] += $xIncrease[$i]

		if ($x[$i] -ge $lines[0].length) {
			$x[$i] -= $lines[0].length
		}
	}

	$y++
}

while ($y2 -lt $lines.length) {
	if ($lines[$y2].substring($x[4], 1) -eq "#") {
		$trees[4]++
	}

	$x[4]++
	$y2 += 2

	if ($x[4] -ge $lines[0].length) {
		$x[4] -= $lines[0].length
	}
}

for ($i = 0; $i -lt 5; $i++) {
	$totalTrees *= $trees[$i]
}

echo $totalTrees