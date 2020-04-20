// src/index.tsx

import * as React from 'react';
import {Registry} from "@flintdev/widget-builder";

import PieChart , {Props as PieChartProps, configJson as PieChartConfig} from "./widget/PieChart";

let registry = new Registry();

registry.add('PieChart', PieChart, PieChartConfig, {category: "widget"});

export {
    PieChart
};

export const library = registry.pack();
