package de.l3s.eumssi.core;

import java.util.ArrayList;
import java.util.HashMap;


public class sortingMap {

    public static void main(String args[]) {

    }
    
    /**
	 * sorting keys by values 
     * @param <V>
     * @param <K>
	 * @param keys
	 * @param h
	 */
	public static < V extends Comparable> void qsort(ArrayList<String> keys, HashMap<String, V> h, int lo, int hi) {
		int l = lo, r = hi;
		V pivot  = h.get(keys.get((lo + hi)/2));
		while (l<=r) {
			while (h.get(keys.get(l)).compareTo(pivot)>0) l++;
			while (h.get(keys.get(r)).compareTo(pivot)<0) r--;
			if (l<=r) {
				String tmp =  keys.get(l);
				keys.set(l, keys.get(r));
				keys.set(r, tmp);
				l++; r--;
			}
		}
		
		if (lo< r) qsort(keys, h, lo, r);
		if (l <hi) qsort(keys, h, l, hi);
	}
}