import { Component, OnInit } from '@angular/core';
import { GradeService } from '../../snippets/services/grade.service';
import { NzMessageService } from 'ng-zorro-antd';

@Component({
  selector: 'app-exam',
  templateUrl: './exam.component.html',
  styleUrls: ['./exam.component.less']
})
export class ExamComponent implements OnInit {

  examId: number;
  answers: any;
  constructor(
    private gradeService: GradeService,
    private msg: NzMessageService
  ) { }

  ngOnInit() {
  }

  endExam() {
    this.gradeService.endExam(this.examId, this.answers).subscribe(val => {
      this.msg.success('提交成功');
    });
  }

}
