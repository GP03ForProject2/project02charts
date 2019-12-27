package com.qst.project02main.mapper;

import com.qst.project02main.pojo.Citys;
import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import java.util.List;

@Mapper
@Repository
public interface CityMapper {
    List<Citys> query();
}
