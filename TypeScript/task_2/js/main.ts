// 1. Définition de DirectorInterface
interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

// 2. Définition de TeacherInterface
interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

// 3. Implémentation de la classe Director
class Director implements DirectorInterface {
  workFromHome(): string {
    return 'Working from home';
  }

  getCoffeeBreak(): string {
    return 'Getting a coffee break';
  }

  workDirectorTasks(): string {
    return 'Getting to director tasks';
  }
}

// 4. Implémentation de la classe Teacher
class Teacher implements TeacherInterface {
  workFromHome(): string {
    return 'Cannot work from home';
  }

  getCoffeeBreak(): string {
    return 'Cannot have a break';
  }

  workTeacherTasks(): string {
    return 'Getting to work';
  }
}

// 5. Fonction d'usine createEmployee avec Union de types
function createEmployee(salary: number | string): Director | Teacher {
  // Si le salaire est un nombre inférieur à 500, c'est un Teacher
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  }
  // Dans tous les autres cas (nombre >= 500 ou chaîne de caractères), c'est un Director
  return new Director();
}

// Exemples d'utilisation de l'énoncé pour tester
console.log(createEmployee(200));    // Doit afficher une instance de Teacher
console.log(createEmployee(1000));   // Doit afficher une instance de Director
console.log(createEmployee('$500')); // Doit afficher une instance de Director

// 1. Fonction isDirector utilisant un Type Predicate (employee is Director)
function isDirector(employee: Director | Teacher): employee is Director {
  return (employee as Director).workDirectorTasks !== undefined;
}

// 2. Fonction executeWork qui adapte le comportement selon le type d'employé
function executeWork(employee: Director | Teacher): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  }
  return employee.workTeacherTasks();
}

// Exemples de test de l'énoncé
console.log(executeWork(createEmployee(200)));  // Doit afficher : Getting to work
console.log(executeWork(createEmployee(1000))); // Doit afficher : Getting to director tasks

// 1. Définition du String Literal Type 'Subjects'
type Subjects = 'Math' | 'History';

// 2. Écriture de la fonction teachClass
function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  }
  if (todayClass === 'History') {
    return 'Teaching History';
  }
  // Optionnel mais recommandé pour la sécurité des types : une sécurité si une valeur improbable arrivait
  throw new Error('Unknown subject');
}

// Exemples d'utilisation de l'énoncé pour tester
console.log(teachClass('Math'));    // Doit afficher : Teaching Math
console.log(teachClass('History')); // Doit afficher : Teaching History

// Exemple de ce qui se passe si on fait une erreur :
// teachClass('French'); 
// -> Le compilateur TypeScript bloquera DIRECTEMENT avec une erreur !


