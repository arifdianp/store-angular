import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html'
})
export class FiltersComponent implements OnInit, OnDestroy
{
  categories = ['shoes','sports'];
  @Output() showCategory = new EventEmitter<string>();

  ngOnInit(): void {}
  ngOnDestroy(): void {}

  onShowCategory(category: string): void {
    this.showCategory.emit(category);
  }
}
