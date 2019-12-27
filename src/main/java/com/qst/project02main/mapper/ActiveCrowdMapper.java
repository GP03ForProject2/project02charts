package com.qst.project02main.mapper;

import com.qst.project02main.pojo.ActiveCrowd;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface ActiveCrowdMapper {
    List<ActiveCrowd> query();
}
