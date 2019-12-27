package com.qst.project02main.service.impl;

import com.qst.project02main.mapper.CityMapper;
import com.qst.project02main.pojo.Citys;
import com.qst.project02main.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CityServiceImpl implements CityService {

    @Autowired
    CityMapper cityMapper;

    public List<Citys> query() {
        return cityMapper.query();
    }
}
