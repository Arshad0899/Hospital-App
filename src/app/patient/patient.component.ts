import { Component, OnInit } from '@angular/core';
import { AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {NgFor, NgIf} from '@angular/common';

export interface PeriodicElement {
  ID: number;
  Name: string;
  Age: number;
  Gender: string;
  Doctor: string;
  Appointement: string;
  medical_history: string;
  current_medications: string;
  patient_img: string;
  test_results: string;
  description: string;
}


const ELEMENT_DATA: PeriodicElement[] = [
  
  {
    ID: 230975,
    Name: 'Arshad',
    Age: 22,
    Gender: 'M',
    Doctor: 'Dr. Snehal',
    Appointement: '03-04-2023',
    medical_history: 'Asthama',
    current_medications: 'Good',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'Negative',
    description: 'Patient has a family history of Asthama'
  },
  {
    ID: 120933,
    Name: 'Suresh',
    Age: 24,
    Gender: 'M',
    Doctor: 'Dr. Bhavya',
    Appointement: '19-04-2023',
    medical_history: 'vomiting',
    current_medications: 'Next few days',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'Negetive',
    description: 'Patient has a family history of gallbladder disease'
  },
  {
    ID: 430902,
    Name: 'Deepika',
    Age: 64,
    Gender: 'F',
    Doctor: 'Dr. Snehal',
    Appointement: '22-05-2023',
    medical_history: 'Joint pain and stiffness',
    current_medications: 'Regular',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'nill',
    description: 'Patient expresses difficulty with daily activities due to joint pain.'
  },
  {
    ID: 240982,
    Name: 'Aditi',
    Age: 22,
    Gender: 'F',
    Doctor: 'Dr. Snehal',
    Appointement: '06-05-2023',
    medical_history: 'Shortness of breath',
    current_medications: 'Regular',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'Negative',
    description: 'Patient reports recent stress and increased workload'
  },
  {
    ID: 983896,
    Name: 'Ramesh',
    Age: 12,
    Gender: 'M',
    Doctor: 'Dr. Bhavya',
    Appointement: '12-05-2023',
    medical_history: 'Fever',
    current_medications: 'Few days',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'positive',
    description: 'No known allergies or exposure to individuals with strep throat'
  },
  {
    ID: 643255,
    Name: 'Abhishek',
    Age: 27,
    Gender: 'M',
    Doctor: 'Dr. Bhavya',
    Appointement: '26-12-2022',
    medical_history: 'Allergies',
    current_medications: 'Irregular',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'positive',
    description: 'Need to eat Veggies and stop smoking'
  },
  {
    ID: 567321,
    Name: 'Pranav',
    Age: 20,
    Gender: 'M',
    Doctor: 'Dr. Snehal',
    Appointement: '01-04-2023',
    medical_history: 'Vomiting and food position',
    current_medications: 'Regular',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'nill',
    description: 'Patient exposed to bad food and water'
  },
  {
    ID: 764098,
    Name: 'Arjun',
    Age: 25,
    Gender: 'M',
    Doctor: 'Dr. Bhavya',
    Appointement: '22-03-2023',
    medical_history: 'Migraine',
    current_medications: 'Regular',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'negative',
    description: 'Patient need exposed to cold climate and cold food'
  },
  {
    ID: 534634,
    Name: 'Mur mur',
    Age: 21,
    Gender: 'F',
    Doctor: 'Dr. Snehal',
    Appointement: '12-04-2023',
    medical_history: 'Diabeties',
    current_medications: 'Regular',
    patient_img: '../../assets/user-solid.svg',
    test_results: 'positive',
    description: 'Patient need to maintain proper food diet'
  }
];
  
  @Component({
    selector: 'app-patient',
    templateUrl: './patient.component.html',
    styleUrls: ['./patient.component.css'],
    animations: [
      trigger('detailExpand', [
        state('collapsed', style({height: '0px', minHeight: '0'})),
        state('expanded', style({height: '*'})),
        transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
      ]),
    ],
  })
  
  export class PatientComponent implements AfterViewInit {

    
  // @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  // ngAfterViewInit() {
  //   this.dataSource.paginator:any = this.paginator;
  // }
    
    constructor() { }
    ngAfterViewInit(): void {
      throw new Error('Method not implemented.');
    }
    
    dataSource = ELEMENT_DATA;
    columnsToDisplayInHeader = ['Patient ID', 'Patient Name', 'Age', 'Gender', 'Appointed Doctor', 'Action'];
    columnsToDisplay = ['ID', 'Name', 'Age', 'Gender', 'Doctor', 'Appointement' ];
    columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
    expandedElement!: PeriodicElement | null;
  }

  // {
    //   position: 1,
    //   name: 'Hydrogen',
    //   weight: 1.0079,
    //   symbol: 'H',
    //   description: `Hydrogen is a chemical element with symbol H and atomic number 1. With a standard
    //       atomic weight of 1.008, hydrogen is the lightest element on the periodic table.`,
    // },
    // {
      //   position: 2,
      //   name: 'Helium',
      //   weight: 4.0026,
      //   symbol: 'He',
      //   description: `Helium is a chemical element with symbol He and atomic number 2. It is a
  //       colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
  //       group in the periodic table. Its boiling point is the lowest among all the elements.`,
  // },
  // {
  //   position: 3,
  //   name: 'Lithium',
  //   weight: 6.941,
  //   symbol: 'Li',
  //   description: `Lithium is a chemical element with symbol Li and atomic number 3. It is a soft,
  //       silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
  //       lightest solid element.`,
  // },
  // {
  //   position: 4,
  //   name: 'Beryllium',
  //   weight: 9.0122,
  //   symbol: 'Be',
  //   description: `Beryllium is a chemical element with symbol Be and atomic number 4. It is a
  //       relatively rare element in the universe, usually occurring as a product of the spallation of
  //       larger atomic nuclei that have collided with cosmic rays.`,
  // },
  // {
  //   position: 5,
  //   name: 'Boron',
  //   weight: 10.811,
  //   symbol: 'B',
  //   description: `Boron is a chemical element with symbol B and atomic number 5. Produced entirely
  //       by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
  //       low-abundance element in the Solar system and in the Earth's crust.`,
  // },
  // {
  //   position: 6,
  //   name: 'Carbon',
  //   weight: 12.0107,
  //   symbol: 'C',
  //   description: `Carbon is a chemical element with symbol C and atomic number 6. It is nonmetallic
  //       and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
  //       to group 14 of the periodic table.`,
  // },
  // {
  //   position: 7,
  //   name: 'Nitrogen',
  //   weight: 14.0067,
  //   symbol: 'N',
  //   description: `Nitrogen is a chemical element with symbol N and atomic number 7. It was first
  //       discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  // },
  // {
  //   position: 8,
  //   name: 'Oxygen',
  //   weight: 15.9994,
  //   symbol: 'O',
  //   description: `Oxygen is a chemical element with symbol O and atomic number 8. It is a member of
  //        the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
  //        agent that readily forms oxides with most elements as well as with other compounds.`,
  // },
  // {
  //   position: 9,
  //   name: 'Fluorine',
  //   weight: 18.9984,
  //   symbol: 'F',
  //   description: `Fluorine is a chemical element with symbol F and atomic number 9. It is the
  //       lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
  //       conditions.`,
  // },
  // {
  //   position: 10,
  //   name: 'Neon',
  //   weight: 20.1797,
  //   symbol: 'Ne',
  //   description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },
  // {
  //   position: 10,
  //   name: 'Neon',
  //   weight: 20.1797,
  //   symbol: 'Ne',
  //   description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },
  // {
  //   position: 10,
  //   name: 'Neon',
  //   weight: 20.1797,
  //   symbol: 'Ne',
  //   description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },
  // {
  //   position: 10,
  //   name: 'Neon',
  //   weight: 20.1797,
  //   symbol: 'Ne',
  //   description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },
  // {
  //   position: 10,
  //   name: 'Neon',
  //   weight: 20.1797,
  //   symbol: 'Ne',
  //   description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },
  // {
  //   position: 10,
  //   name: 'Neon',
  //   weight: 20.1797,
  //   symbol: 'Ne',
  //   description: `Neon is a chemical element with symbol Ne and atomic number 10. It is a noble gas.
  //       Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
  //       two-thirds the density of air.`,
  // },



