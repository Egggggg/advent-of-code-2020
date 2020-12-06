using System;
using System.Collections.Generic;

namespace Problem_12 {
    class Program {
        static public void Main(string[] args) {
            Console.WriteLine(Solve());
        }

        static public int Solve() {
            List<String> lines = LineReader.Read();
            List<char> valid = new List<char>();
            int total = 0;

            for (char c = 'a'; c <= 'z'; c++) {
                valid.Add(c);
            }

            foreach (String line in lines) {
                if (line == "") {
                    total += valid.Count;

                    valid = new List<char>();

                    for (char c = 'a'; c <= 'z'; c++) {
                        valid.Add(c);
                    }

                    continue;
                }
                
                List<char> temp = new List<char>();
                
                foreach (char c in valid) {
                    if (line.Contains(c)) {
                        temp.Add(c);
                    }
                }

                valid = new List<char>(temp);
            }

            total += valid.Count;

            return total;
        }
    }
}
