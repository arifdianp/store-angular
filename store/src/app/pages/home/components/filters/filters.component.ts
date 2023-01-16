import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: './filters.component.html'
})
export class FiltersComponent
{
  categories = ['shoes','sports'];
  @Output() showCategory = new EventEmitter<string>();

  onShowCategory(category: string): void {
    this.showCategory.next(category);
  }
}
