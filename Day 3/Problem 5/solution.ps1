$lines = @()
$x = 0
$y = 0
$trees = 0

Get-Content .\input.txt | ForEach-Object {
	$lines += $_
}

while ($y -lt $lines.length) {
	if ($lines[$y].substring($x, 1) -eq "#") {
		$trees++
	}

	$x += 3
	$y++

	if ($x -ge $lines[0].length) {
		$x -= $lines[0].length
	}
}

echo $trees