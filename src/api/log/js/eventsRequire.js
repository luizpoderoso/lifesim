import Log from "./LogRequires";

export default class Events {
    constructor(gender) {
        this.gender = gender;
        this.log = new Log();
        this.aleatory = require('../events/aleatory.json');
    }

    aleatoryEvent(age) {
        const event = this.aleatory[Math.floor(Math.random() * this.aleatory.length)];
        if (age < event["min-age"]) return {};
        return event;
    }
}