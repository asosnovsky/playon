import * as React from "react";
import { Grid, Button, List, ListItem, Checkbox, ListItemText, Typography } from '@material-ui/core';
import { NewData } from '@/components/elements/NewPlan/typings';
import { reccomendActivity, ReccomendActivityProps } from '@/db/reccomendar';
import * as moment from "moment";
import applicatoinState from '@/stores';

interface IProps {
    data: NewData;
    onNext: (data: Activity[]) => void;
    onBack: () => void;
}
interface IState {
    reccomendation?: Activity[];
    selected: number[];
}
function getAge({day, month, year}: DateObject) {
    const dob = moment(`${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`, "YYYY-MM-DD");
    return moment().diff(dob, "years");
}

function convertToReccomend(data: NewData): ReccomendActivityProps {
    let minAge = Infinity;
    let maxAge = 0;
    data.childrenSelected.forEach( childId => {
        const child = applicatoinState.children.find( c => c.child_id === childId );
        const age = getAge(child.date_of_birth);
        minAge = Math.min(minAge, age);
        maxAge = Math.max(maxAge, age);
    } )
    return {
        ages: {min: minAge, max: maxAge},
        activityTypes: data.activityTypes,
        dateFrom: data.dateFrom,
        dateTo: data.dateTo,
        budgetLimit: data.budgetLimit,
    }
}
function getDayName(weekday: number) {
    switch(weekday) {
        case 0: return "Sunday";
        case 1: return "Monday";
        case 2: return "Tuesday";
        case 3: return "Wednesday";
        case 4: return "Thursday";
        case 5: return "Friday";
        case 6: return "Saturday";
        case 7: return "Sunday";
    }
}
function formatTime(hour: number, min: number) {
    return `${String(hour).padStart(2, "0")}:${String(min).padStart(2, "0")}`
}
export default class NewPlanStepTwo extends React.Component<IProps, IState> {
    state: IState = { selected: [] };
    componentWillMount(){
        this.componentWillReceiveProps(this.props);
    }
    async componentWillReceiveProps(nextProps: IProps) {
        this.setState({
            reccomendation: await reccomendActivity(convertToReccomend(nextProps.data)),
            selected: [],
        })
    }
    renderContent = () => {
        if (!this.state.reccomendation) {
            return <div>Loading...</div>
        }
        return <List>
            {this.state.reccomendation.map( (reccomend, i) => 
            <ListItem key={i} role={undefined} dense button onClick={() => {
                const items = this.state.selected.filter( sIdx => sIdx !== i );
                if (items.length === this.state.selected.length) {
                    items.push(i)
                }
                this.setState({
                    selected: items,
                })
            }} style={{
                backgroundColor: this.state.selected.includes(i) ? "rgba(0, 0, 0, 0.14)" : "transparent"
            }}>
                <Checkbox
                    checked={this.state.selected.includes(i)}
                    tabIndex={-1}
                    disableRipple
                    style={{ height: "100%" }}
                />
                <ListItemText primary={reccomend.category} secondary={reccomend.sub_category} />
                <Typography>
                    {getDayName(reccomend.weekday)} 5:00PM to 6:30PM
                </Typography>
            </ListItem> )}
        </List>
    }
    render() {
        return <Grid container>
            {this.renderContent()}
            <Grid item xs={12}>
                <Button onClick={this.props.onBack} variant="outlined">Back</Button>
                <Button onClick={() => {
                    this.props.onNext(this.state.selected.map( idx => this.state.reccomendation[idx] ))
                }} color="primary" variant="outlined">Next</Button>
            </Grid>
        </Grid>
    }

}
