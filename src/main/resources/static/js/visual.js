//交通工具流量
/*
option2 = {
    
    tooltip: {//鼠标指上时的标线
        trigger: 'axis',
        axisPointer: {
            lineStyle: {
                color: '#fff'
            }
        }
    },
    legend: {
        icon: 'rect',
        itemWidth: 14,
        itemHeight: 5,
        itemGap: 13,
        data: ['活跃用户', '新增用户', '总用户'],
        right: '10px',
        top: '0px',
        textStyle: {
            fontSize: 12,
            color: '#fff'
        }
    },
    grid: {
        x: 30,
        y: 25,
        x2: 8,
        y2: 25,
    },
    xAxis: [{
        type: 'category',
        boundaryGap: false,
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            textStyle: {
                color:'#fff',
            },
        },
        data: ['0点', '2点', '4点', '6点', '8点', '10点', '12点', '14点', '16点', '18点', '20点', '22点','24点']
    }],
    yAxis: [{
        type: 'value',
        axisTick: {
            show: false
        },
        axisLine: {
            lineStyle: {
                color: '#57617B'
            }
        },
        axisLabel: {
            margin: 10,
            textStyle: {
                fontSize: 14
            },
            textStyle: {
                color:'#fff',
            },
        },
        splitLine: {
            lineStyle: {
                color: '#57617B'
            }
        }
    }],
    series: [{
        name: '活跃用户',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(137, 189, 27, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(137, 189, 27, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(137,189,27)'
            }
        },
        data: result[0]
    }, {
        name: '总用户',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(0, 136, 212, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(0, 136, 212, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(0,136,212)'
            }
        },
        data: result[1]
    }, {
        name: '新增用户',
        type: 'line',
        smooth: true,
        lineStyle: {
            normal: {
                width: 2
            }
        },
        areaStyle: {
            normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                    offset: 0,
                    color: 'rgba(219, 50, 51, 0.3)'
                }, {
                    offset: 0.8,
                    color: 'rgba(219, 50, 51, 0)'
                }], false),
                shadowColor: 'rgba(0, 0, 0, 0.1)',
                shadowBlur: 10
            }
        },
        itemStyle: {
            normal: {
                color: 'rgb(219,50,51)'
            }
        },
        data: result[2]
    }, ]
};
*/
//////////////////////用户基本信息 -- 折线/曲线图 end

//本月发生事件1 -- 雷达图
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "马云",
        "value": 30
    },
    {
        "name": "刘强东",
        "value": 30
    },
    {
        "name": "马化腾",
        "value": 42
    },
    {
        "name": "雷军",
        "value": 50
    },
    {
        "name": "郭炜炜",
        "value": 34
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "告警类型TOP5",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option3 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件1 end
//本月发生事件2
var color = ['#e9df3d', '#f79c19', '#21fcd6', '#08c8ff', '#df4131'];
var data = [{
        "name": "马云",
        "value": 15
    },
    {
        "name": "刘强东",
        "value": 14
    },
    {
        "name": "雷军",
        "value": 23
    },
    {
        "name": "马化腾",
        "value": 2
    },
    {
        "name": "郭炜炜",
        "value": 50
    }
];

var max = data[0].value;
data.forEach(function(d) {
    max = d.value > max ? d.value : max;
});

var renderData = [{
    value: [],
    name: "告警类型TOP5",
    symbol: 'none',
    lineStyle: {
        normal: {
            color: '#ecc03e',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0,
                [{
                    offset: 0,
                    color: 'rgba(203, 158, 24, 0.8)'
                }, {
                    offset: 1,
                    color: 'rgba(190, 96, 20, 0.8)'
                }],
                false)
        }
    }
}];


data.forEach(function(d, i) {
    var value = ['', '', '', '', ''];
    value[i] = max,
    renderData[0].value[i] = d.value;
    renderData.push({
        value: value,
        symbol: 'circle',
        symbolSize: 12,
        lineStyle: {
            normal: {
                color: 'transparent'
            }
        },
        itemStyle: {
            normal: {
                color: color[i],
            }
        }
    })
})
var indicator = [];

data.forEach(function(d) {
    indicator.push({
        name: d.name,
        max: max,
        color: '#fff'
    })
})


option31 = {
    tooltip: {
        show: true,
        trigger: "item"
    },
    radar: {
        center: ["50%", "50%"],//偏移位置
        radius: "80%",
        startAngle: 40, // 起始角度
        splitNumber: 4,
        shape: "circle",
        splitArea: {
            areaStyle: {
                color: 'transparent'
            }
        },
        axisLabel: {
            show: false,
            fontSize: 20,
            color: "#000",
            fontStyle: "normal",
            fontWeight: "normal"
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        splitLine: {
            show: true,
            lineStyle: {
                color: "rgba(255, 255, 255, 0.5)"
            }
        },
        indicator: indicator
    },
    series: [{
        type: "radar",
        data: renderData
    }]
}
//////////////////////本月发生事件2 end



//收费站收费排行1
var spirit = '../images.ksh45.png';

var maxData = 200;

option4 = {
   "title": {
      "text": " ",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    
    "grid": {
      "left": 30,
      "top": 0,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 100,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "晋城",
          "太旧",
          "太原",
          "吕梁",
          "长治",
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -4,
          "textStyle": {
            "color": "#fff",
            "fontSize": 16.25
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          13,
          42,
          67,
          81,
          86,
          
        ],
        "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          13,
          42,
          67,
          81,
          86,
          
        ],
        "z": 5
      }
    ]
};


//////////////////////收费站收费排行2 end

//收费站收费排行2
var spirit = '../images.ksh45.png';

var maxData = 200;

option41 = {
   "title": {
      "text": " ",
      "left": "center",
      "y": "10",
      "textStyle": {
        "color": "#fff"
      }
    },
    
    "grid": {
      "left": 30,
      "top": 0,
      "bottom": 10
    },
    "tooltip": {
      "trigger": "item",
      "textStyle": {
        "fontSize": 12
      },
      "formatter": "{b0}:{c0}"
    },
    "xAxis": {
      "max": 100,
      "splitLine": {
        "show": false
      },
      "axisLine": {
        "show": false
      },
      "axisLabel": {
        "show": false
      },
      "axisTick": {
        "show": false
      }
    },
    "yAxis": [
      {
        "type": "category",
        "inverse": false,
        "data": [
          "朔州",
          "大同",
          "运城",
          "忻州",
          "临汾",
        ],
        "axisLine": {
          "show": false
        },
        "axisTick": {
          "show": false
        },
        "axisLabel": {
          "margin": -4,
          "textStyle": {
            "color": "#fff",
            "fontSize": 16.25
          }
        }
      },
    
    ],
    "series": [
      {
        "type": "pictorialBar",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbolClip": true,
        "symbolSize": 22.5,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "symbolBoundingData": 300,
        "data": [
          51,
          32,
          82,
          42,
          81,
          
        ],
        "z": 10
      },
      {
        "type": "pictorialBar",
        "itemStyle": {
          "normal": {
            "opacity": 0.3
          }
        },
        "label": {
          "normal": {
            "show": false
          }
        },
        "animationDuration": 0,
        "symbolRepeat": "fixed",
        "symbolMargin": "5%",
        "symbol": "image://data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAADYElEQVR4nO2dz0sUYRjHP7tIdAmxQ1LdlhCKMohAIsgiyEuHjkUEFQTlpejS/xCCBB06RBGBBKIG4cGyH0qHBKE9eKyFqBQPRQeNCt06vGNY7bq7szPfeZLnAwuzM+/zgw/DDvMu70wOIVveLscJOwycA44A24CfwAfgKXAbeFVvovlC/o/vuVwuTj+x0FWiYdGbgXvA8RrjHgAXgIVaCbMU3SKr1BhtwEtgZx1jTwI7gG7ga5pNNUO+9pBMuEN9klfYD9xMqZdEsCj6AHAiRtxZYFeyrSSHRdGnYsblCD8jJrEoek8TsbsT6yJhLIrelFFsqlgUPZtRbKpYFP2kidjxxLpIGIuiB4AvMeLmgJGEe0kMi6I/AVdjxPVSx91hVlgUDXAXuEaY16jFMnAJeJhqR01iVTTAdeAYUFxjzBRwCLgl6agJrM51rDAO7AP2EmbxthPO8vfAc2Ams84axLpoCGKLrH1mm8eC6KPAGaAL2Fpj7AZgY7T9DfhRY/wc4eflPmH+OjOynI8uEGbpukXlJ4Dz84V8aWWHcj46q4thFzCNTjJRren2UrlLWPM3WYjuAMYIk/tq2oCx9lK5Q11YLboFGARaxXVX0woMtpfK0uuTWvRFoFNcsxKdhF5kqEX3iuuthbQXtehG/gdMG2kvlm/B1xUuWoSLFmFF9CRwg2TnM4pRzskEc8bGiugR4ArhNjkpJqKcJv51sSJ63eOiRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEWvTHKvs/p1izWu5qvaSCWvTlCvtmgeEUaw5TeUVtpV5SQy16COgBRoHXhMWb3aS7PnAhqjEQ1RwFeuYL+aEUa/5DFmtYHkefOEwQVmcBvKD+FQNvgNN/P+pHiV8MRbhoES5ahIsW4aJFuGgRLlqEixbhokW4aBEuWoSLFuGiRbhoES5ahIsW4aJFuGgRLlqEixbhokVYEx3nudGKXE1jTfS6xUWLcNEiXLQIFy3CRYtw0SJctAgXLcJFi3DRIv430eUq2+axJvp7jePPqmzHySXFmuhHwFKVYzNA/6rv/VR/s9BSlMsM1kTPEN4DPkU4I8vAO6APOAgsrhq7GO3ri8aUo5ipKIep1zv9AtipgOACGIrLAAAAAElFTkSuQmCC",
        "symbolSize": 22.5,
        "symbolBoundingData": 300,
        "symbolPosition": "start",
        "symbolOffset": [
          20,
          0
        ],
        "data": [
          51,
          32,
          82,
          42,
          81,
          
        ],
        "z": 5
      }
    ]
};


//////////////////////收费站收费排行2 end

//今日实时收费

var shadowColor = '#374b86';
var value = 80;
option5 = {
    
    title: {
        //text: `${value}万辆`,
        text: `点击量`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#1d54f7' || '#00cefc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#68eaf9' || '#367bec' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = 85;
option6 = {
    
    title: {
        //text: `${value}万辆`,
        text: `下单量`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#02df94' || '#25d6bc' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#28d3d0' || '#14dbaa' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}

var shadowColor = '#374b86';
var value = 46;
option7 = {
    
    title: {
        //text: `${value}万辆`,
        text: `实际支付量`,
        subtext: '',
        left: 'center',
        top: 'center',//top待调整
        textStyle: {
            color: '#fff',
            fontSize: 16,
            fontFamily: 'PingFangSC-Regular'
        },
        subtextStyle: {
            color: '#ff',
            fontSize: 14,
            fontFamily: 'PingFangSC-Regular',
            top: 'center'
        },
        itemGap: -1//主副标题间距
    },

    series: [{
        name: 'pie1',
        type: 'pie',
        clockWise: true,
        radius: ['65%', '70%'],
        itemStyle: {
            normal: {
                label: {
                    show: false
                },
                labelLine: {
                    show: false
                }
            }
        },
        hoverAnimation: false,
        data: [{
            value: value,
            name: 'completed',
            itemStyle: {
                normal: {
                    borderWidth: 8,
                    borderColor: { 
                    colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    color: { // 完成的圆环的颜色
                        colorStops: [{
                            offset: 0,
                            color: '#eb3600' || '#cc9a00' // 0% 处的颜色
                        }, {
                            offset: 1,
                            color: '#d0a00e' || '#d0570e' // 100% 处的颜色
                        }]
                    },
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    }
                }
            }
        }, {
            name: 'gap',
            value: 100 - value,
            itemStyle: {
                normal: {
                    label: {
                        show: false
                    },
                    labelLine: {
                        show: false
                    },
                    color: 'rgba(0, 0, 0, 0)',
                    borderColor: 'rgba(0, 0, 0, 0)',
                    borderWidth: 0
                }
            }
        }]
    }]
}
//////////////////////今日实时收费 end