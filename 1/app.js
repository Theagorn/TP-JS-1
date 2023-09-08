function moyenne ([x = 0, y = 0, z = 0]) {
    let moy = (x + y + z)/3;
    if (moy >= 15) {
        return "Très bien";
    } else if (moy >= 10) {
        return "Assez bien";
    } else {
        return "refus";
    }
}