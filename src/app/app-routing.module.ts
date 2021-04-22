import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {MazuComponent} from './mazu/mazu.component';
import {DataComponent} from './data/data.component';
import {PortfolioComponent} from './portfolio/portfolio.component'


const routes: Routes = [
  { path: 'Mazu', component: MazuComponent  },
  { path: 'Data', component: DataComponent  },
  { path: 'Portfolio', component: PortfolioComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
