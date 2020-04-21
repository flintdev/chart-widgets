// src/widget/BarChart/BarChart.tsx

import * as React from 'react';
import {Widget, WidgetProps} from "@flintdev/widget-builder";
import * as Chart from 'chart.js';
import { v4 as uuidv4 } from 'uuid';

interface Item {
    label: string,
    color: string,
}

interface Params {
    width: number,
    height: number,
    title: string,
    type: 'vertical' | 'horizontal',
    items: Item[],
    data: number[],
}

const typeMap = {
    'vertical': 'bar',
    'horizontal': 'horizontalBar',
};

export interface Props extends WidgetProps {
    params: Params
}

export default class BarChart extends Widget<Props> {
    elementId: string = uuidv4();

    componentDidMount = () => {
        const {params} = this.props;
        const {title, type, items, data} = params;
        const barChart = new Chart(this.elementId, {
            type: typeMap[type],
            data: {
                datasets: [{
                    data,
                    backgroundColor: items.map(item => item.color)
                }],
                labels: items.map(item => item.label),
            },
            options: {
                title: {
                    display: title !== "",
                    text: title
                },
                legend: { display: false },
                scales: {
                    yAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        });
    };

    renderCustomComponent() {
        const {params} = this.props;
        const {width, height} = params;
        return (
            <div style={{width: width, height: height, display: 'inline-block'}}>
                <canvas id={this.elementId}></canvas>
            </div>
        )
    }
}
