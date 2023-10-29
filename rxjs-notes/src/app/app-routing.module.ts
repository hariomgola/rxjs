import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// importing router component
import { RxjsNoteComponent } from './rxjs-note/rxjs-note.component';

const routes: Routes = [
  {
    path: 'rxjs',
    component: RxjsNoteComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
