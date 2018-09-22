import * as React from "react";
import { Grid, Button } from '@material-ui/core';
import { NewData } from '@/components/elements/NewPlan/typings';


interface IProps {
    data: NewData;
    onNext: () => void;
    onBack: () => void;
}
export default class NewPlanStepTwo extends React.Component<IProps> {

    render() {
        return <Grid container>
            
            <Grid item xs={12}>
                <Button onClick={this.props.onBack} variant="outlined">Back</Button>
                <Button onClick={this.props.onNext} color="primary" variant="outlined">Next</Button>
            </Grid>
        </Grid>
    }

}
