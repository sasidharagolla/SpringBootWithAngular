package com.capsule.springboot;

import java.util.Optional;

import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

//import com.capsule.beans.Task;

//import com.capsule.beans.Task;

public interface TaskRepository extends CrudRepository<Task,Integer> {


}
