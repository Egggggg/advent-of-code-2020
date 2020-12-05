import java.util.ArrayList;

class Solution9 {
	static public void main(String[] args) {
		System.out.println(solve());
	}

	static public int getID(String line) {			
		int[] curX = {0, 127};
		int[] curY = {0, 7};

		for (int i = 0; i < 7; i++) {
			int dif = curX[1] - curX[0];

			if (line.charAt(i) == 'F') {
				curX[1] = curX[0] + (int)Math.floor(dif / 2);
			} else {
				curX[0] += (int)Math.ceil(dif / 2) + 1;
			}
		}

		for (int i = 7; i < 10; i++) {
			int dif = curY[1] - curY[0];

			if (line.charAt(i) == 'L') {
				curY[1] = curY[0] + (int)Math.floor(dif / 2);
			} else {
				curY[0] += (int)Math.ceil(dif / 2) + 1;
			}
		}

		return (curX[0] * 8) + curY[0];
	}

	static public int solve() {
		ArrayList<String> lines = LineReader.read();
		int max = 0;

		for (String line : lines) {
			int ID = getID(line);

			if (ID > max) {
				max = ID;
			}
		}

		return max;
	}
}