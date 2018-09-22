import { observable, action } from "mobx";
import { children, auth } from '@/db';
import Notifier from '@/components/layouts/Notifier';


class ApplicationState {
    @observable isLoggedIn:boolean = false;
    @observable userId: string;
    @observable children: Child[] = [];

    @action async addChild(child: Child) {
        const newChildDoc = children.doc();
        child.parent_id = this.userId;
        await newChildDoc.set(child);
        this.children.push({
            child_id: newChildDoc.id,
            ...child,
        });
        Notifier.notify("New Child Information Added!");
        return newChildDoc;
    }

    @action async updateChild(child: Child) {
        if (!('child_id' in child)) {
            Notifier.notify("Error: MCI01");
            throw new Error("Missing Child Id");
        }
        child.parent_id = this.userId;
        const newChildDoc = children.doc(child.child_id);
        await newChildDoc.set(child);
        for (const idx in this.children) {
            if (this.children.hasOwnProperty(idx)) {
                const c = this.children[idx];
                c.parent_id = this.userId;
                c.date_of_birth = child.date_of_birth;
                c.name = child.name;
                break;
            }
        }
        Notifier.notify("New Child Information Updated!");
        return newChildDoc;
    }

    @action async removeChild(childId: string) {
        await children.doc(childId).delete();
        this.children = this.children.filter( c => c.child_id !== childId );
        Notifier.notify("New Child Information Updated!");
        return;
    }
}


const applicatoinState = new ApplicationState();

export default applicatoinState;