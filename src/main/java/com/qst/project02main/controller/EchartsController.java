package com.qst.project02main.controller;

import com.alibaba.fastjson.JSON;
import com.qst.project02main.pojo.ActiveCrowd;
import com.qst.project02main.pojo.Citys;
import com.qst.project02main.service.ActiveCrowdService;
import com.qst.project02main.service.AgeInfoService;
import com.qst.project02main.service.CityService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.util.ArrayList;
import java.util.List;


@Controller
@RequestMapping("/")
public class EchartsController {

    @Autowired
    CityService cityService;

    @Autowired
    ActiveCrowdService activeCrowdService;

    @Autowired
    AgeInfoService ageInfoService;

    /**
     * 折线图对应的controller
     * 传递数据：二维数组[[活跃人数],[新增人数],[在线人数]]
     */
    @RequestMapping(value = "/lineChart")
    @ResponseBody
    public List<List<Integer>> lineChart(HttpServletRequest request, HttpServletResponse response) {
        List<List<Integer>> list = new ArrayList<>();
        list.add(ageInfoService.activeList());
        list.add(ageInfoService.registList());
        list.add(ageInfoService.loginList());
        return list;
    }

    /**
     * 饼图对应controller
     * 传递数据：JSON：{"name":"年龄段","value":人数}
     */
    @RequestMapping(value = "/pieChart")
    @ResponseBody
    public String pieChart(HttpServletRequest request, HttpServletResponse response) {
        List<ActiveCrowd> list = activeCrowdService.query();
        return JSON.toJSONString(list);
    }

    /**
     * 地图对应controller
     * 传递数据：JSON：{"name":"地区","value":"top3商品"}
     */
    @RequestMapping(value = "/mapChart")
    @ResponseBody
    public String mapChart(HttpServletRequest request, HttpServletResponse response) {
        List<Citys> list = cityService.query();
        return JSON.toJSONString(list);
    }

}
