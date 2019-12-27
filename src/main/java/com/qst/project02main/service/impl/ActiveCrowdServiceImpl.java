package com.qst.project02main.service.impl;

import com.qst.project02main.mapper.ActiveCrowdMapper;
import com.qst.project02main.pojo.ActiveCrowd;
import com.qst.project02main.service.ActiveCrowdService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActiveCrowdServiceImpl implements ActiveCrowdService {

    @Autowired
    ActiveCrowdMapper activeCrowdMapper;

    public List<ActiveCrowd> query() {
        return activeCrowdMapper.query();
    }
}
