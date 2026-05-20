/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from './interface';
import * as CRUD from './crud';

// Création de l'objet initial
const row: RowElement = {
  firstName: 'Guillaume',
  lastName: 'Salva',
};

// Insertion de la ligne et récupération de l'ID généré
const newRowID: RowID = CRUD.insertRow(row);

// Mise à jour de l'objet avec l'âge
const updatedRow: RowElement = {
  ...row,
  age: 23,
};

// Appels des méthodes de mise à jour et de suppression
CRUD.updateRow(newRowID, updatedRow);
CRUD.deleteRow(newRowID);