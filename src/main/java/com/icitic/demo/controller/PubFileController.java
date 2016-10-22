package com.icitic.demo.controller;

import com.icitic.demo.controller.service.PubFileService;
import main.java.com.icitic.demo.base.controller.BaseController;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;

/**
 * Created by suyc on 2016/9/20.
 */
@Controller
public class PubFileController extends BaseController {
    @Autowired
    private PubFileService pubFileService;

}
