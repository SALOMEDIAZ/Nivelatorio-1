function computegrades (studentgrades){
    let parsed= [];
    let pass= 0;
    let lose= 0;
}
studentGrades.forEach((grade) => {
    if (grade>= 90){
        parsed.push("A");
        passed++;
    }
    else if (grade >= 80) {
        parsed.push("B");
        passed++;
      }
      else if (grade >= 70) {
        parsed.push("C");
        passed++;
      }
      else if (grade >= 60) {
        parsed.push("D");
        passed++;
      }
      else {
        parsed.push("F");
        lose++;
      }
      })
    return{
        parsed,
        pass,
        lose,
    };
    const studentGrades= [100, 50, 65, 70, 85, 96, 45];
    const result= computegrades(studentGrades);
    console.log(result);

