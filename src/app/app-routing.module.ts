import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SearchResultComponent } from './Components/search-result/search-result.component';
import { IndexComponent } from './Components/shared/index/index.component';
import { MenuComponent } from './Components/shared/menu/menu.component';

const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'search', component: SearchResultComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
