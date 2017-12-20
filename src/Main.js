"use strict";

var Data_List_Types = require("../Data.List.Types");

exports["sum'"] = (function () {
    var go = function (n) {
        return function (v) {
          var $tco_var_n = n;
          var $tco_done = false;
          while (!$tco_done) {
            if (v instanceof Data_List_Types.Nil) {
                $tco_done = true;
                continue;
            };
            if (v instanceof Data_List_Types.Cons) {
                $tco_var_n = $tco_var_n + v.value0 | 0;
                v = v.value1;
                continue;
            };
            throw new Error("Failed pattern match at Main line 12, column 3 - line 12, column 15: " + [ n.constructor.name, v.constructor.name ]);
          };
          return $tco_var_n;
        };
    };
    return go(0);
})();
