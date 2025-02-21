function computeGrades(grades) {
    function getGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    }

    let parsed = grades.map(getGrade);
    let passed = parsed.filter(grade => grade !== "F").length;
    let lose = parsed.filter(grade => grade === "F").length;
    
    return { parsed, passed, lose };
}

const studentGrades = [100, 50, 65, 70, 85, 96, 45];
const result = computeGrades(studentGrades);
console.log(result);
