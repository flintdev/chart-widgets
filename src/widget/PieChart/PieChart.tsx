// src/widget/PieChart/PieChart.tsx

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
    type: 'pie' | 'doughnut',
    items: Item[],
    data: number[],
}

export interface Props extends WidgetProps {
    params: Params
}

export default class PieChart extends Widget<Props> {

    elementId: string = uuidv4();

    componentDidMount = () => {
        const {params} = this.props;
        const {title, type, items, data} = params;
        const pieChart = new Chart(this.elementId, {
            type: type,
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
                }
            }
        });
    };

    renderCustomComponent() {
        const {params} = this.props;
        const {width, height} = params;
        return (
            <div style={{width: width, height: height, display: 'inline-block'}}>
                <canvas
                    id={this.elementId}
                    width={width.toString()}
                    height={height.toString()}
                ></canvas>
            </div>
        )
    }
}
