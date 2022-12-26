// ==UserScript==
// @name         翱翔教务半自动评教
// @namespace    Mion-NPU-Course-Evalue
// @version      0.1
// @description  打开评教页面后会点击右上角按钮可自动完成一项评教任务。所有选项按照满意给分，默认选择匿名评教。
// @author       Mion
// @match        https://jwxt.nwpu.edu.cn/evaluation-student-frontend/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=nwpu.edu.cn
// @updateURL    
// ==/UserScript==


( function() {
    'use strict';
    var surveyList ;

    function fillForm(){
        var NL = document.querySelectorAll("[data-v-46df80d0][tabindex]");
        for (var i = 1; i < NL.length; i += 5) {
            NL[i].click();
        }
        document.querySelector("textarea").innerHTML = "非常满意";

        setTimeout(function(){
            var btns = document.querySelectorAll("button[data-v-6bea3ecb]");
            btns[1].click();
        },500);
    }

    function run(){
        surveyList =  document.querySelectorAll("a[title='点击开始评教']");
        if (surveyList.length == 0) {
            alert("没有需要评教的课程");
            return;
        }else if (surveyList.length > 1){
            setTimeout(function(){
                fillForm();
            }, 1000);
            surveyList[0].click();
        }
    }


    setTimeout(function(){
        surveyList =  document.querySelectorAll("a[title='点击开始评教']");
        var btn = document.createElement("button");
        if (surveyList.length > 0) {
            btn.innerHTML = "完成下一评教";
            btn.onclick = run;
        }else{
            btn.innerHTML = "所有评教任务已完成";
        }
        btn.style = "position:fixed;right:0;top:0;z-index:9999;";
        document.body.appendChild(btn);
    }, 1000);

    console.log("自动评教脚本已加载 Author: Mion, Blog: https://www.qwq.cc , Ver: 0.1, Date: 2022/12/26");

} )();




