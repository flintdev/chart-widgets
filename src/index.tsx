// src/index.tsx

import * as React from 'react';
import {Registry} from "@flintdev/widget-builder";

import PieChart , {Props as PieChartProps, configJson as PieChartConfig} from "./widget/PieChart";
import BarChart , {Props as BarChartProps, configJson as BarChartConfig} from "./widget/BarChart";

let registry = new Registry();

registry.add('PieChart', PieChart, PieChartConfig, {category: "widget"});
registry.add('BarChart', BarChart, BarChartConfig, {category: "widget"});

export {
    PieChart,
    BarChart
};

export const library = registry.pack();
