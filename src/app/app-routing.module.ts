import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { faHouseMedicalCircleExclamation } from '@fortawesome/free-solid-svg-icons';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TractorBoardComponent } from './components/tractor-board/tractor-board.component';

const routes: Routes = [
  { path:'home', component: HomeComponent  },
  { path:'gallary', component: TractorBoardComponent  },
  { path:'', component: HomeComponent  },
  { path:'**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
