import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductControllerService } from 'src/app/Api/services';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  searchFor: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {}

  search() {
    if (this.searchFor != '') {
      this.router.navigate(['/search'], {
        queryParams: { val: this.searchFor },
      });
    }
  }
}
