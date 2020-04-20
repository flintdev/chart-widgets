// example/ExampleContainer.tsx

import * as React from 'react';
import { withStyles, WithStyles, createStyles } from '@material-ui/core/styles';
import PieChart from "../src/widget/PieChart";

const styles = createStyles({
    root: {},
});

export interface Props extends WithStyles<typeof styles> {

}

class ExampleContainer extends React.Component<Props, object> {
    componentDidMount(): void {

    }

    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <PieChart params={{
                    width: 300,
                    height: 300,
                    type: 'pie',
                    title: "Color Distribution",
                    items: [
                        {label: 'Red', color: '#ff0000'},
                        {label: 'Yellow', color: '#ffff00'},
                        {label: 'Blue', color: '#0000ff'},
                    ],
                    data: [10, 20, 30]
                }}/>
            </div>
        )
    }
}

export default withStyles(styles)(ExampleContainer);
