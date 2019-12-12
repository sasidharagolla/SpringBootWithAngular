package com.capsule.springboot;

import java.util.HashSet;
import java.util.List;
import java.util.Optional;

import javax.persistence.EntityManager;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import com.capsule.beans.ParentTask;
//import com.capsule.beans.Task;
//import com.capsule.repository.TaskRepository;

//import com.capsule.beans.Task;
//import com.capsule.repository.TaskRepository;

@Service
public class TaskServicesimpl {

	@Autowired
	TaskRepository taskRepository;
	
	@Autowired
	EntityManager entitymanager;
	
		
	public Task addTasks(Task ctask) {
		
		return taskRepository.save(ctask);
	}
	
	public List<Task> getAllTasks(){
		
		return (List<Task>) taskRepository.findAll();
	}
	
	public Task getTaskById(int id) {
		
		Task t = entitymanager.find(Task.class, id);
		return t;
		
	}
	
	/*public void update(Task task) {
		
		 Task updatetask = getTaskById(task.task_id);
    	    ParentTask ptask = new ParentTask();
		    ptask.setParent_id(task.getParentid());
		    ptask.setParenttask(task);
		    updatetask.setTask_id(11);
		    updatetask.setParentid(11);
		    updatetask.setPriority(5);
		    updatetask.setTask("UNIX Patching");
		    updatetask.setStartdate("12-12-2019");
		    updatetask.setEnddate("12-12-2020");
		    updatetask.setPtask(ptask);
		    taskRepository.save(updatetask);
	}*/
	
	public void update(Task task) {
		
		
		    taskRepository.save(task);
	}
	
	public void delete(int taskid) {
		
		taskRepository.deleteById(taskid);
		
	}
	
	
	
}
