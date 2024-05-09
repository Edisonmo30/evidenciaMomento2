let students = [];
let records = 0;

function registerStudent() {
    let student = {};
    student.name = prompt("Ingrese el nombre completo del estudiante: ");
    student.id = prompt("Ingrese el documento de identidad del estudiante: ");
    let grade1 = parseFloat(prompt("Ingrese la primera nota (20% de la materia): "));
    let grade2 = parseFloat(prompt("Ingrese la segunda nota (40% de la materia): "));
    let grade3 = parseFloat(prompt("Ingrese la tercera nota (40% de la materia): "));

    if (grade1 < 0 || grade1 > 5 || grade2 < 0 || grade2 > 5 || grade3 < 0 || grade3 > 5) {
        console.log("Error: Las notas deben estar entre 0.0 y 5.0");
        return;
    }

    let finalGrade = (grade1 * 0.2) + (grade2 * 0.4) + (grade3 * 0.4);

    if (finalGrade > 3.5) {
        console.log(`${student.name} ha ganado la materia con una nota lfinal de:  ${finalGrade}`);
    } else {
        console.log(`${student.name} ha perdido la materia con una nota final de: ${finalGrade}`);
    }

    student.finalGrade = finalGrade;
    students.push(student);
    records++;
}

function showStudentsInfo() {
    let failed = students.filter(student => student.finalGrade <= 3.5);
    let passed = students.filter(student => student.finalGrade > 3.5);

    console.log("Estudiantes que perdieron la materia:");
    failed.forEach(student => console.log(`${student.id} - ${student.name} - Nota final: ${student.finalGrade}`));

    console.log("\nEstudiantes que ganaron la materia:");
    passed.forEach(student => console.log(`${student.id} - ${student.name} - Nota final: ${student.finalGrade}`));
}

function menuOptions() {
    let option;
    do {
        option = parseInt(prompt("Seleccione una de las siguientes opciones:\n1. Registro de estudiantes y notas\n2. Mostar información de los estudiantes\n3. Salir"));

        switch (option) {
            case 1:
                registerStudent();
                break;
            case 2:
                showStudentsInfo();
                break;
            case 3:
                console.log(`Se relizaron ${records} regristros.`);
                break;
            default:
                console.log("Error. Por favor, seleccione una opción válida.");
        }
    } while (option !== 3);
}
menuOptions();
