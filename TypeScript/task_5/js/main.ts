// 1. Définition de l'interface MajorCredits avec son "brand"
export interface MajorCredits {
    credits: number;
    // Propriété brand pour le typage nominal (n'existe pas réellement à l'exécution)
    __brand: 'MajorCredits';
  }
  
  // 2. Définition de l'interface MinorCredits avec son "brand"
  export interface MinorCredits {
    credits: number;
    __brand: 'MinorCredits';
  }
  
  // 3. Fonction pour additionner les Major Credits
  export function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
      credits: subject1.credits + subject2.credits,
    } as MajorCredits; // Le cast est nécessaire ici pour satisfaire le compilateur à cause du brand
  }
  
  // 4. Fonction pour additionner les Minor Credits
  export function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
      credits: subject1.credits + subject2.credits,
    } as MinorCredits;
  }
