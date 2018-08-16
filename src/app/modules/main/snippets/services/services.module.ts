import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';
import { QuestionService } from './question.service';
import { ExampaperService } from './exampaper.service';
import { GradeService } from './grade.service';
@NgModule({
    declarations: [],
    imports: [ CommonModule ],
    exports: [],
    providers: [
        UserService,
        QuestionService,
        ExampaperService,
        GradeService
       ]
})
export class ServicesModule {}
