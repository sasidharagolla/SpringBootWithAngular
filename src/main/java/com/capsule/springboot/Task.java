package com.capsule.springboot;

import java.util.Date;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

//import org.hibernate.annotations.Columns;


@Entity
@Table(name="tasks")
public class Task {
	
	@Id
	@Column(name="task_id")
	public int task_id;
	
	@Column(name="parentid")
	public int parentid;
	
	public int getParentid() {
		return parentid;
	}
	public void setParentid(int parentid) {
		this.parentid = parentid;
	}
	@Column(name="task")
	public String task;
	
	@Column(name="priority")
	public int priority;
	
	@Column(name="startdate")
	public String startdate;
	
	@Column(name="enddate")
	public String enddate;
			
	@OneToOne(targetEntity=ParentTask.class,cascade=CascadeType.ALL)
	@JoinColumn(name="task_id" , referencedColumnName="parent_id")
	public ParentTask ptask;
	
	public ParentTask getPtask() {
		return ptask;
	}
	public void setPtask(ParentTask ptask) {
		this.ptask = ptask;
	}
	public int getTask_id() {
		return task_id;
	}
	public void setTask_id(int task_id) {
		this.task_id = task_id;
	}
	
	public String getTask() {
		return task;
	}
	public void setTask(String task) {
		this.task = task;
	}
	public String getStartdate() {
		return startdate;
	}
	public void setStartdate(String startdate) {
		this.startdate = startdate;
	}
	public String getEnddate() {
		return enddate;
	}
	public void setEnddate(String enddate) {
		this.enddate = enddate;
	}
	public int getPriority() {
		return priority;
	}
	public void setPriority(int priority) {
		this.priority = priority;
	}


}
