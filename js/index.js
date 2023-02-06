window.onload = function() {
    var showTime = null
        // console.log(document.querySelector('.show-time'))
        // console.log(window.screen.availHeight)
    showTime = setInterval(timer, 1000)

    function timer() {
        clearInterval(showTime)
        var date = new Date();
        var y = date.getFullYear();
        var m = date.getMonth() + 1
        var d = date.getDate()
        var hh = date.getHours()
        var mm = date.getMinutes()
        var ss = date.getSeconds()
        document.querySelector('.show-time').innerHTML = '当前时间：' + y + '年' + m + '月' + d + '日' + '-' + hh + '时' + mm + '分' + ss + '秒'
        showTime = setInterval(timer, 1000)
    }
    (function() {
        let myChart = echarts.init(document.querySelector('.content1 .bar .chart'))
        const option = {
            color: ['#2f89cf'], //设置柱形图柱子的颜色
            tooltip: {
                trggier: 'axis',
                axisPointer: {
                    //坐标轴指示器，坐标轴触发有效
                    type: 'shadow'
                }
            },
            grid: {
                left: "0%",
                top: "6px",
                right: "0%",
                bottom: "4%",
                containLabel: true
            },
            xAxis: [{
                type: 'category',
                data: ['旅游行业', '教育培训', '游戏行业',
                    '医疗行业', '电商行业', '社交行业', '金融行业'
                ],
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "9"
                },
                axisLine: {
                    show: false //不显示坐标轴刻度
                }
            }],
            yAxis: [{
                type: 'value',
                axisLabel: {
                    color: "rgba(255,255,255,0.6)",
                    fontSize: "9"
                },
                //坐标轴线条样式
                axisLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,.6)",
                        width: "2"
                    }
                },
                //坐标轴分割线的样式
                splitLine: {
                    lineStyle: {
                        color: "rgba(255,255,255,0.6)"
                    }
                }


            }],
            series: [{
                name: '柱形图',
                type: "bar",
                barWidth: "35%", //设置柱形图的宽度
                itemStyle: {
                    barBorderRadius: 5 //修改柱子圆角  
                },
                data: [200, 300, 300, 900, 1500, 1200, 600]
            }]
        }
        myChart.setOption(option)
            // 让图表跟随屏幕的变化而自适应
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    })();
    (function() {
        var myColor = ['#1089E7', '#F57474', '#56D0E3', 'F8B448', '#8B78F6']
        var myChart = echarts.init(document.querySelector('.content3 .bar .chart'))
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            grid: {
                left: "5%",
                right: "10%",
                bottom: "5%",
                containLabel: true
            },
            xAxis: {
                show: false //不显示x轴
            },
            yAxis: [{
                type: 'category',
                data: ['HTML5', 'CSS3', 'javascript', 'VUE', 'NODE'],
                axisTick: {
                    show: false
                },
                inverse: true,
                axisLine: { //不显示y轴线条
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                }
            }, {
                type: 'category',
                data: [664, 793, 610, 350, 702],
                inverse: true,

                axisTick: {
                    show: false
                },
                axisLine: { //不显示y轴线条
                    show: false
                },
                axisLabel: {
                    color: '#fff'
                }
            }],
            series: [{
                name: '条',
                type: 'bar',
                data: [70, 34, 60, 78, 69],
                //修改第一组柱子的样式
                itemStyle: {
                    barBorderRadius: 20,
                    color: function(param) {
                        return myColor[param.dataIndex]
                    }
                },
                // 在series里面的第一个对象设置0,第二个对象设置为1
                yAxisIndex: 0,
                barCategoryGap: 50, //柱子之间的距离
                barWidth: 12, //柱子的宽度
                label: {
                    show: true,
                    position: 'inside',
                    formatter: '{c}%' //会解析为data中的数据
                }
            }, {
                name: '框',
                type: 'bar',
                barCategoryGap: 50,
                barWidth: 12,
                yAxisIndex: 1,
                itemStyle: {
                    color: 'none',
                    borderColor: "#00c1de",
                    borderWidth: 2,
                    barBorderRadius: 12
                },
                data: [100, 100, 100, 100, 100],
            }]
        };
        myChart.setOption(option)
            // 让图表跟随屏幕的变化而自适应
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    })();
    (function() {
        // 让图表跟随屏幕的变化而自适应
        var myChart = echarts.init(document.querySelector('.content1 .line .chart'))
        var option = {
            color: ['#00f2f1', '#ed3f35'], //配置两条线的颜色
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['新增粉丝', '新增游客'],
                textStyle: {
                    color: '#4c9bfd'
                },
                right: '10%' //设置位置
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true, //显示边框
                borderColor: "#023f4a",
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false, //去除轴间距
                data: ['1月', '2月', '3月', '4月', '5月', '6月',
                    '7月', '8月', '9月', '10月', '11月', '12月'
                ],
                axisTick: {
                    show: false //去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd',
                    interval: 0 //设置坐标轴的间隔数
                },
                axisLine: {
                    show: false //去除轴线
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false //去除刻度线
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false //去除轴线
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a' //分割线颜色
                    }
                }
            },
            series: [{
                    name: '新增粉丝',
                    type: 'line',
                    data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
                    smooth: true
                },
                {
                    name: '新增游客',
                    type: 'line',
                    data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
                    smooth: true

                }
            ]
        };
        myChart.setOption(option)
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    })();
    (function() {
        var myChart = echarts.init(document.querySelector('.content3 .line .chart'))
        option = {
            tooltip: {
                trigger: 'axis',
            },
            legend: {
                data: ['播放量', '转发量'],
                top: "0%",
                textStyle: {
                    color: "rgba(255,255,255,.5)",
                    fontSize: "12"
                }
            },
            grid: {
                left: '10',
                top: "30",
                right: '10',
                bottom: '10',
                containLabel: true
            },
            xAxis: [{
                type: 'category',

                boundaryGap: false,
                data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23',
                    '24', '25', '26', '27', '28', '29', '30'
                ],
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '10'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                }
            }],
            yAxis: [{
                axisTick: {
                    show: false,
                },

                type: 'value',
                axisLabel: {
                    textStyle: {
                        color: 'rgba(255,255,255,0.6)',
                        fontSize: '10'
                    }
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255,255,255,0.2)'
                    }
                },
                splitLine: {
                    color: "rgba(255,255,255,0.1)"
                }
            }],
            series: [{
                    name: '播放量',
                    type: 'line',
                    smooth: true,
                    emphasis: {
                        focus: 'series'
                    },
                    lineStyle: { //单独修改线条的样式
                        color: "#0184d5",
                        width: "2"
                    },
                    areaStyle: {
                        //渐变色，使用函数来实现
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0, //偏移
                                color: 'rgb(1,132,213,0.6'
                            },
                            {
                                offset: 0.8,
                                color: 'rgb(1,132,213,0.2)'
                            }
                        ], false),
                        shadowColor: 'rgb(0,0,0,0.1)'
                    },
                    symbol: 'circle', //设置拐点为小圆点(circle)，小正方形(rect)
                    symbolSize: 12, //设置拐点的大小
                    showSymbol: false, //开始不显示，鼠标经过才显示
                    itemStyle: { //设置拐点的样式
                        color: '#0184d5',
                        borderColor: 'rgba(211,220,102,0.1)',
                        borderWidth: 12,
                    },
                    data: [
                        30,
                        40,
                        30,
                        40,
                        30,
                        40,
                        30,
                        60,
                        20,
                        40,
                        30,
                        40,
                        30,
                        40,
                        30,
                        40,
                        30,
                        60,
                        20,
                        40,
                        30,
                        40,
                        30,
                        40,
                        30,
                        40,
                        20,
                        60,
                        50,
                        40
                    ]
                },
                {
                    name: '转发量',
                    smooth: true,
                    type: 'line',
                    lineStyle: { //单独修改线条的样式
                        color: "#0184d5",
                        width: "2"
                    },
                    areaStyle: {
                        //渐变色，使用函数来实现
                        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: "rgba(0, 216, 135, 0.4)"
                            },
                            {
                                offset: 0.8,
                                color: "rgba(0, 216, 135, 0.1)"
                            }
                        ], false),
                        shadowColor: 'rgba(0,0,0,0.1)'
                    },
                    symbol: 'circle', //设置拐点为小圆点(circle)，小正方形(rect)
                    symbolSize: 12, //设置拐点的大小
                    showSymbol: false, //开始不显示，鼠标经过才显示
                    itemStyle: { //设置拐点的样式
                        color: '#0184d5',
                        borderColor: 'rgba(211,220,102,0.1)',
                        borderWidth: 12,
                    },
                    emphasis: {
                        focus: 'series'
                    },
                    data: [
                        130,
                        10,
                        20,
                        40,
                        30,
                        40,
                        80,
                        60,
                        20,
                        40,
                        90,
                        40,
                        20,
                        140,
                        30,
                        40,
                        130,
                        20,
                        20,
                        40,
                        80,
                        70,
                        30,
                        40,
                        30,
                        120,
                        20,
                        99,
                        50,
                        20
                    ]
                }
            ]
        };
        myChart.setOption(option)
        window.addEventListener('resize', function() {
            myChart.resize()
        });
        (function() {
            var myChart = echarts.init(document.querySelector('.content1 .pie .chart'))
            var option = {
                color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab'],
                tooltip: {
                    trigger: 'item'
                },
                legend: {
                    bottom: '0%',
                    left: 'center',
                    itemWidth: 10,
                    itemHeight: 10,
                    // data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎'],//series中的data设置name值可以省略
                    textStyle: {
                        color: 'rgba(255, 255, 255, 0.5)',
                        fontSize: 10
                    }
                },
                series: [{
                    name: '年龄分布',
                    radius: ['40%', '60%'], //内圆半径和外圆半径
                    type: 'pie',
                    // radius: ['40%', '70%'],
                    avoidLabelOverlap: false,
                    label: { //图形上的文字
                        show: true,
                        color: '#fff',
                        fontFamily: 'Microsoft YaHei'
                            // position: 'center'
                    },
                    // emphasis: {//设置强调元素
                    //     label: {
                    //         show: true,
                    //         fontSize: 40,
                    //         fontWeight: 'bold'
                    //     }
                    // },
                    labelLine: { //链接文字与图形的连线
                        show: true
                    },
                    data: [
                        { value: 1, name: '20岁以下' },
                        { value: 4, name: '20-29岁' },
                        { value: 2, name: '30-39岁' },
                        { value: 2, name: '40-49岁' },
                        { value: 1, name: '50岁以上' }
                    ]
                }]
            };
            myChart.setOption(option)

        })();
        (function() {
            var myChart = echarts.init(document.querySelector('.content3 .pie .chart'))
            var option = {
                color: [
                    "#006cff",
                    "#60cda0",
                    "#ed8884",
                    "#ff9f7f",
                    "#0096ff",
                    "#9fe6b8",
                    "#32c5e9",
                    "#1d9dff"
                ],
                legend: {
                    bottom: '0%',
                    itemHeight: 10,
                    itemWidth: 10,
                    textStyle: {
                        color: "rgba(255,255,255,.5)",
                        fontSize: "9"
                    },
                },
                // toolbox: {
                //     show: true,
                //     feature: {
                //         mark: { show: true },
                //         dataView: { show: true, readOnly: false },
                //         restore: { show: true },
                //         saveAsImage: { show: true }
                //     }
                // },
                series: [{
                    name: '地区分布',
                    type: 'pie',
                    radius: ['10%', '60%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    label: { //图形上的文字
                        fontSize: 9,
                        show: true,
                        color: '#fff',
                        fontFamily: 'Microsoft YaHei'
                            // position: 'center'
                    },
                    labelLine: {
                        length: 5, //链接图形的线条
                        length2: 8, //链接文字的线条
                    },
                    itemStyle: {
                        borderRadius: 8
                    },
                    data: [
                        { value: 20, name: "云南" },
                        { value: 26, name: "北京" },
                        { value: 24, name: "山东" },
                        { value: 25, name: "河北" },
                        { value: 20, name: "江苏" },
                        { value: 25, name: "浙江" },
                        { value: 30, name: "四川" },
                        { value: 42, name: "湖北" }
                    ]
                }]
            };
            myChart.setOption(option)
        })();
    })()
















}