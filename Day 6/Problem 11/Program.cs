using System;
using System.Collections.Generic;

namespace Problem_11 {
    class Program {
        static public void Main(string[] args) {
            Console.WriteLine(Solve());
        }

        static public int Solve() {
            List<String> lines = LineReader.Read();
            List<char> used = new List<char>();
            int total = 0;

            foreach (String line in lines) {
                if (line == "") {
                    total += used.Count;
                    used = new List<char>();
                    continue;
                }

                foreach (char c in line) {
                    if (!used.Contains(c)) {
                        used.Add(c);
                    }
                }
            }

            total += used.Count;

            return total;
        }
    }
}
