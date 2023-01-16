import { Component, OnDestroy, OnInit } from '@angular/core';

const ROWS_HEIGHT: { [id: number]: number } = { 1: 400, 3: 335, 4: 350 };

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, OnDestroy
{
  cols = 3;
  category: string | undefined;
  rowHeight: number = ROWS_HEIGHT[this.cols];

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onColumnsCountChange(colsNum: number): void {
   this.cols = colsNum;
 }

 onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
