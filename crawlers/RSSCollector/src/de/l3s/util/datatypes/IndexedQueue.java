package de.l3s.util.datatypes;

import java.util.ArrayList;
import java.util.HashSet;

public class IndexedQueue<T> extends ArrayList<T>{
HashSet<T> idx=new HashSet<T>();
	@Override
	public boolean add(T e) {
		if(idx.contains(e)){return false;}
		idx.add(e);
		return super.add(e);
	}
	
		public synchronized T firstElement() {
		 T todel = super.remove(0);
		 idx.remove(todel);
			return todel;
		}
		public synchronized T showFirst() {
			
				return super.get(0);
			}

		public boolean empty() {
			// TODO Auto-generated method stub
			return size()==0;
		}
}
