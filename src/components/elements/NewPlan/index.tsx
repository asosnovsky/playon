import * as React from "react";
import * as moment from 'moment';
import { Card, CardHeader, CardContent, Stepper, Step, StepLabel } from '@material-ui/core';

import { NewData } from '@/components/elements/NewPlan/typings';
import NewPlanStepOne from '@/components/elements/NewPlan/NewPlanStepOne';
import NewPlanStepTwo from '@/components/elements/NewPlan/NewPlanStepTwo';
import Notifier from '@/components/layouts/Notifier';
import NewPlanStepThree from '@/components/elements/NewPlan/NewPlanStepThree';
import applicatoinState from '@/stores';
import { goTo, PAGES } from '@/components/router/history';

interface IState {
    step: number;
    data: NewData;
}

function getNextDay(weekday: number, today = moment()): moment.Moment {
    if (today.isoWeekday() <= weekday) { 
        return today.isoWeekday(weekday);
    } else {
        return today.add(1, 'weeks').isoWeekday(weekday);
    }
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

            case 1: return <NewPlanStepTwo data={state.data} onNext={ async data => {
                try {
                    console.log("!")
                    await applicatoinState.addEvents(
                        data.map( item => {
                            const day = getNextDay(item.weekday, state.data.dateFrom).format("YYYY-MM-DD");
                            return {
                                _id: String(Date.now()) + Math.random().toString(36),
                                name: item.sub_category,
                                startDateTime : moment(`${day} 5:00PM`,"YYYY-MM-DD hh:mm a").toDate(),
                                endDateTime   : moment(`${day} 6:30PM`, "YYYY-MM-DD hh:mm a").toDate(),
                                userId        : applicatoinState.userId,
                                childId       : ""
                            }
                        } )
                    )
                    Notifier.notify("Added succesfully!")
                } catch(err) {
                    console.error(err);
                    Notifier.notify("Database Timeout");
                }
                goTo(PAGES.HOME)
            } } onBack={ () => this.setState({ step: 0 }) }/>

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
