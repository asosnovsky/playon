import * as React from "react";
import * as moment from 'moment';
import { TextField, InputAdornment, Grid, Typography, Button } from '@material-ui/core';

import ChildSelector from '@/components/elements/NewPlan/ChildSelector';
import Categories from '@/components/elements/NewPlan/Categories';
import { NewData } from '@/components/elements/NewPlan/typings';

interface IProps {
    onDone: (d: NewData) => void;
    oldState: NewData;
}
interface IState extends NewData {
}
export default class NewPlanStepOne extends React.Component<IProps, IState> {
    componentWillMount(){
        this.componentWillReceiveProps(this.props);
    }
    componentWillReceiveProps(nextProps: IProps) {
        this.setState(nextProps.oldState);
    }
    render() {
        const {state} = this;
        return <Grid container>
            <Grid item xs={12}>
                <Typography variant="subheading">Children</Typography>
                <ChildSelector selected={state.childrenSelected} onSelect={ child => {
                    const selectedIdx = state.childrenSelected.indexOf(child.child_id);
                    if ( selectedIdx > -1) {
                        const newSel = [...state.childrenSelected];
                        newSel.splice(selectedIdx, 1);
                        return this.setState({
                            childrenSelected: newSel,
                        })
                    }   else    {
                        return this.setState({
                            childrenSelected: state.childrenSelected.concat([child.child_id])
                        })
                    }
                } }/>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "20px" }}>
                <Typography variant="subheading">Weekly Budget Limit</Typography>
                <TextField fullWidth type="number" 
                    placeholder="" value={state.budgetLimit} 
                    onChange={ e => this.setState({ budgetLimit: Number(e.currentTarget.value) }) }
                    InputProps={{
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                        endAdornment: <InputAdornment position="end">/weekly</InputAdornment>,
                    }}/>
        
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "20px" }}>
                <Typography variant="subheading">Date Range</Typography>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="date" label="From" value={state.dateFrom.format("YYYY-MM-DD")} onChange={ e => {
                        this.setState({ 
                            dateFrom: moment(e.currentTarget.value, "YYYY-MM-DD"),
                        })
                }}/>
            </Grid>
            <Grid item xs={6}>
                <TextField fullWidth type="date" label="To" value={state.dateTo.format("YYYY-MM-DD")} onChange={ e => {
                        this.setState({ dateTo: moment(e.currentTarget.value, "YYYY-MM-DD") })
                }}/>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "20px" }}>
                <Typography variant="subheading">Activities</Typography>
                <Categories selected={state.activityTypes} onSelect={ (cat) => {
                    const filtered = state.activityTypes.filter( a => !( a.cat === cat ) )
                    if (filtered.length === this.state.activityTypes.length) {
                        filtered.push({ cat, subcat: "" })
                    } 
                    this.setState({
                        activityTypes: filtered,
                    })
                } }/>
            </Grid>
            <Grid item xs={12} style={{ paddingTop: "20px" }}>
                <Button onClick={ () => this.props.onDone(state) } color="primary" variant="outlined">Next</Button>
            </Grid>
        </Grid>
    }

}
