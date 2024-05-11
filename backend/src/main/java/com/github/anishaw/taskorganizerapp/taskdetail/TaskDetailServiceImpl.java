package com.github.anishaw.taskorganizerapp.taskdetail;

import org.springframework.stereotype.Service;

@Service
public class TaskDetailServiceImpl implements TaskDetailService {

    public String connectionTest(){
        return "success";
    }
    
}
