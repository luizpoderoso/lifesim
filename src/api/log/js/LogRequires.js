import correctGender from './articles';

export default class Log {
    constructor(gender) {
        this.gender = gender
    }

    makeLine = (line, age) => ((`Idade: ${age}{break}${line}`));

    birth(hapiness) {
        if (hapiness > 100 || hapiness < 0) return false;
        const birth = require('../json/birth.json');

        let line;
        if (hapiness <= 25) {
            const index = Math.floor(Math.random() * birth.bad.length);
            line = birth.bad[index];
        } else if (hapiness >= 75) {
            const index = Math.floor(Math.random() * birth.good.length);
            line = birth.good[index];
        } else {
            const index = Math.floor(Math.random() * birth.normal.length);
            line = birth.normal[index];
        }
        line = correctGender(this.gender, line);
        return this.makeLine(line, 0);
    };

    event(age) {
        const json = require('../json/events.json');
        let line;

        const haveEvent = Math.floor(Math.random() * 3);
        if (!haveEvent) line = json['no-event'];
        else {
            const { events } = json;
            const index = Math.floor(Math.random() * events.length);
            line = correctGender(this.gender, events[index]);
        }
        return this.makeLine(line, age);
    }
}