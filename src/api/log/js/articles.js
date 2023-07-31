const correctGender = (gender, line) => {
    let corrected = line.split('{article}').join(gender === "man" ? "o" : "a");
    corrected = corrected.split('{uarticle}').join(gender === "man" ? "" : "a");
    return corrected;
}

export default correctGender;