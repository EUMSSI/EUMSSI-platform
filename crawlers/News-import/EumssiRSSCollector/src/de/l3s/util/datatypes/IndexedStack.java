package de.l3s.util.datatypes;

import java.util.HashSet;
import java.util.Stack;

public class IndexedStack<T> extends Stack<T> {
	HashSet<T> idx=new HashSet<T>();

	@Override
	public synchronized boolean add(T e) {
		if(idx.contains(e)){return false;}
		idx.add(e);
		return super.add(e);
	}
	@Override
	public synchronized T pop() {
		T ret;
		idx.remove(ret=super.pop());
		return ret;
	}

}
