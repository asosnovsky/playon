import * as React from "react";
import { observable } from 'mobx';
import { observer } from 'mobx-react';
import { Dialog, DialogContent } from '@material-ui/core';

const state = observable({
    show: false,
    text: <div></div>,
})

@observer
export default class HeadDialog extends React.Component {
    static notify(text:JSX.Element, waitFor:number = 0) {
        window.setTimeout(() => {
            state.text = text;
            state.show = true;
        }, waitFor)
    }

    render() {
        return <Dialog open={state.show} onClose={ () => state.show = false }>
            <DialogContent>
                {state.text}
            </DialogContent>
        </Dialog>
    }
}