package de.adorsys.xs2a.adapter.ui.paging;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class PageController {

    @GetMapping()
    public String intro() {
        return "intro";
    }

    @GetMapping("/page/psu/data")
    public String psuData() {
        return "psu_data";
    }
}
