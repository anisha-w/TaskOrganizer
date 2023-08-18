package com.github.anishaw.taskorganizerapp.taskdetail;

//POJO Class
public class TaskDetail {

    private String id;
    private String startDate;
    private String endDate;
    private String title;
    private String tname;
    private String color;
    private String actions;
    private Boolean allDay;
    //resizeable and draggable are true by default 
    private String metaData;

    public String getId() {
        return id;
    }
    public void setId(String id) {
        this.id = id;
    }
    public String getStartDate() {
        return startDate;
    }
    public void setStartDate(String startDate) {
        this.startDate = startDate;
    }
    public String getEndDate() {
        return endDate;
    }
    public void setEndDate(String endDate) {
        this.endDate = endDate;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public String getTname() {
        return tname;
    }
    public void setTname(String tname) {
        this.tname = tname;
    }
    public String getColor() {
        return color;
    }
    public void setColor(String color) {
        this.color = color;
    }
    public String getActions() {
        return actions;
    }
    public void setActions(String actions) {
        this.actions = actions;
    }
    public Boolean getAllDay() {
        return allDay;
    }
    public void setAllDay(Boolean allDay) {
        this.allDay = allDay;
    }
    public String getMetaData() {
        return metaData;
    }
    public void setMetaData(String metaData) {
        this.metaData = metaData;
    }

    
}