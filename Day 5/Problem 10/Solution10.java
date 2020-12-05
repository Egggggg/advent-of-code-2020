import java.util.ArrayList;

public class Solution10 {
	static public void main(String[] args) {
		System.out.println(solve());
	}

	static public int solve() {
		ArrayList<String> lines = LineReader.read();
		ArrayList<Integer> IDs = new ArrayList<Integer>();

		for (String line : lines) {
			IDs.add(Solution9.getID(line));
		}

		for (int ID : IDs) {
			if (!IDs.contains(ID+1) && IDs.contains(ID+2)) {
				return ID + 1;
			}
		}

		return -1;
	}
}
