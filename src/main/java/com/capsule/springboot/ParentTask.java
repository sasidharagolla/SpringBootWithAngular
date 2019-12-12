package com.capsule.springboot;

import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.OrderColumn;
import javax.persistence.PrimaryKeyJoinColumn;
import javax.persistence.Table;

@Entity		 
@Table(name="parenttask")
public class ParentTask {
	
	@Id
	@Column(name="parent_id", unique=true, nullable=false)
	public int parent_id;
	
	@Column(name="parenttask")
	public String parenttask; 
	
	/*@OneToOne
	@PrimaryKeyJoinColumn
	private Task etask;
	
	public Task getEtask() {
		return etask;
	}
	public void setEtask(Task etask) {
		this.etask = etask;
	}*/

	public int getParent_id() {
		return parent_id;
	}
	public void setParent_id(int parent_id) {
		this.parent_id = parent_id;
	}
	public String getParenttask() {
		return parenttask;
	}
	public void setParenttask(String parenttask) {
		this.parenttask = parenttask;
	}
	
}
