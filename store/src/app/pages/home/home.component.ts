import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit, OnDestroy
{
  cols = 3;
  category: string | undefined;

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onColumnsCountChange(colsNum: number): void {
   this.cols = colsNum;
 }

 onShowCategory(newCategory: string): void {
    this.category = newCategory;
  }

}
