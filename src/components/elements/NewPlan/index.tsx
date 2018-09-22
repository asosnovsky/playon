import * as React from "react";
import * as moment from 'moment';
import { Card, CardHeader, CardContent, Stepper, Step, StepLabel } from '@material-ui/core';

import { NewData } from '@/components/elements/NewPlan/typings';
import NewPlanStepOne from '@/components/elements/NewPlan/NewPlanStepOne';
import NewPlanStepTwo from '@/components/elements/NewPlan/NewPlanStepTwo';
import Notifier from '@/components/layouts/Notifier';
import NewPlanStepThree from '@/components/elements/NewPlan/NewPlanStepThree';

interface IState {
    step: number;
    data: NewData;
}

export default class NewPlan extends React.Component<{}, IState> {
    state: IState = {   
        step: 0,
        data: {
            childrenSelected: [], activityTypes : [], 
            dateFrom        : moment(), dateTo  : moment().add(7, "days"), 
            budgetLimit: 200 
        }
    }
    renderContent() {
        const {state} = this;
        switch(state.step) {
            case 0: return <NewPlanStepOne oldState={state.data} onDone={ data => {
                if (data.childrenSelected.length === 0) {
                    return Notifier.notify("Must Select at least 1 child");
                }
                if (data.activityTypes.length === 0) {
                    return Notifier.notify("Must Select at least 1 activity");
                }
                return this.setState({
                    data,
                    step: 1
                })
            } }/>

            case 1: return <NewPlanStepTwo data={state.data} onNext={ () => this.setState({ step: 2 }) } onBack={ () => this.setState({ step: 0 }) }/>
            case 2: return <NewPlanStepThree data={state.data} onNext={ () => {
                
            } } onBack={ () => this.setState({ step: 1 }) }/>

            default: return <div>N/A</div>
        }
    }
    render() {
        const {state} = this;
        return <Card>
            <CardHeader title="New Weekly Plan" style={{ paddingBottom: 0 }}></CardHeader>
            <CardContent style={{ paddingTop: 0 }}>
                <Stepper activeStep={state.step}>
                    <Step>
                        <StepLabel>Fill in Information</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Select Agenda</StepLabel>
                    </Step>
                    <Step>
                        <StepLabel>Done</StepLabel>
                    </Step>
                </Stepper>
                {this.renderContent()}
            </CardContent>
        </Card>
    }

}
