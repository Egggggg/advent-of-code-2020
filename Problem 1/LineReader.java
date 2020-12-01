import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;

public class LineReader {
	static public ArrayList<String> read() {
		ArrayList<String> lines = new ArrayList<String>();
		File fileObj = new File("input.txt");
		
		try {
			Scanner fileReader = new Scanner(fileObj);

			while (fileReader.hasNextLine()) {
				lines.add(fileReader.nextLine());
			}

			fileReader.close();

			return lines;
		} catch (FileNotFoundException e) {
			return null;
		}
	}
}
