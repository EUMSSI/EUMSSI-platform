package de.l3s.web;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.URL;

public class WebUtils {
	public String readPage(URL url) throws IOException {
		final InputStream inputStream = url.openConnection().getInputStream();
		final BufferedReader reader = new BufferedReader(new InputStreamReader(inputStream));

		String line;
StringBuffer sb=new StringBuffer();
		while ((line = reader.readLine()) != null) {
			sb.append(line);
			sb.append("\n");
		}

		reader.close();
		return sb.toString();
	}
}
