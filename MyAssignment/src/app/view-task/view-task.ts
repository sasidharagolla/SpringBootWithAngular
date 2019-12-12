
export class ViewTask {
buttonLabel: String;
    constructor(public task_id: Number, public parentid: Number, public task: String, public priority: Number
      , public startdate: String, public enddate: String, public parent_id: Number, public parenttask: String) { 
    }
}