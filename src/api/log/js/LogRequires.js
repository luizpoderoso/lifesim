import correctGender from './articles';

export default class Log {
    constructor(gender) {
        this.gender = gender
    }

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
        return line;
    }
}