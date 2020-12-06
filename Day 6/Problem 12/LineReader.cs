using System;
using System.Collections.Generic;

namespace Problem_12 {
	class LineReader {
		static public List<String> Read() {
			System.IO.StreamReader file = new System.IO.StreamReader("input.txt");
			List<String> lines = new List<String>();
			String line = file.ReadLine();

			while (line != null) {
				lines.Add(line);
				line = file.ReadLine();
			}

			return lines;
		}
	}
}