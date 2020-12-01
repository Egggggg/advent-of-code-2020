import java.util.ArrayList;

class Main {
	static public void main(String[] args) {
		System.out.println(solve());
	}

	static public int solve() {
		ArrayList<String> lines = LineReader.read();
		
		for (int i = 0; i < lines.size(); i++) {
			int i_int = Integer.parseInt(lines.get(i));

			for (int e = i+1; e < lines.size(); e++) {
				int e_int = Integer.parseInt(lines.get(e));
				if (i_int + e_int == 2020) {
					return i_int * e_int;
				}
			}
		}

		return 0;
	}
}