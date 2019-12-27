package com.qst.project02main.service.impl;

import com.qst.project02main.mapper.AgeInfoMapper;
import com.qst.project02main.service.AgeInfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AgeInfoServiceImpl implements AgeInfoService {

    @Autowired
    AgeInfoMapper ageInfoMapper;

    public List<Integer> loginList() {
        return ageInfoMapper.loginList();
    }

    public List<Integer> registList() {
        return ageInfoMapper.registList();
    }

    public List<Integer> activeList() {
        return ageInfoMapper.activeList();
    }
}
