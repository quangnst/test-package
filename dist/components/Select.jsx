"use client"; // Component này chạy phía client
import { useState } from "react";
export var Select = function (_a) {
    var _b;
    var options = _a.options;
    var _c = useState(((_b = options[0]) === null || _b === void 0 ? void 0 : _b.value) || ""), selected = _c[0], setSelected = _c[1];
    return (<select value={selected} onChange={function (e) { return setSelected(e.target.value); }}>
      {options.map(function (option) { return (<option key={option.value} value={option.value}>
          {option.label}
        </option>); })}
    </select>);
};
