import { NumberToArrayPipe } from './number-to-array.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [NumberToArrayPipe],
    exports: [NumberToArrayPipe]
})
export class SharedPipesModule { }
